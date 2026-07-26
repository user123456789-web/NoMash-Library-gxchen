<template>
  <div class="mt-4">
    <h2>All Books</h2>
    <ul class="list-group mt-2">
      <li v-for="book in books" :key="book.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span v-if="editingId !== book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
        </span>
        <span v-else>
          <input v-model="editName" class="form-control form-control-sm d-inline w-auto" />
        </span>
        <span>
          <template v-if="editingId !== book.id">
            <button class="btn btn-sm btn-outline-secondary me-1" @click="startEdit(book)">Edit</button>
            <button class="btn btn-sm btn-outline-danger" @click="deleteBook(book.id)">Delete</button>
          </template>
          <template v-else>
            <button class="btn btn-sm btn-success me-1" @click="updateBook(book.id)">Save</button>
            <button class="btn btn-sm btn-secondary" @click="editingId = null">Cancel</button>
          </template>
        </span>
      </li>
    </ul>

    <h2 class="mt-4">Top 3 Books by ISBN (desc, ISBN &gt; 1000)</h2>
    <ul class="list-group mt-2">
      <li v-for="book in topBooks" :key="book.id" class="list-group-item">
        {{ book.name }} - ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import {
  collection, query, where, orderBy, limit,
  getDocs, doc, updateDoc, deleteDoc
} from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);
    const topBooks = ref([]);
    const editingId = ref(null);
    const editName = ref('');

    const fetchBooks = async () => {
      const snapshot = await getDocs(collection(db, 'books'));
      books.value = [];
      snapshot.forEach((d) => books.value.push({ id: d.id, ...d.data() }));
    };

    const fetchTopBooks = async () => {
      const q = query(
        collection(db, 'books'),
        where('isbn', '>', 1000),
        orderBy('isbn', 'desc'),
        limit(3)
      );
      const snapshot = await getDocs(q);
      topBooks.value = [];
      snapshot.forEach((d) => topBooks.value.push({ id: d.id, ...d.data() }));
    };

    const startEdit = (book) => {
      editingId.value = book.id;
      editName.value = book.name;
    };

    const updateBook = async (id) => {
      await updateDoc(doc(db, 'books', id), { name: editName.value });
      editingId.value = null;
      await fetchBooks();
      await fetchTopBooks();
    };

    const deleteBook = async (id) => {
      await deleteDoc(doc(db, 'books', id));
      await fetchBooks();
      await fetchTopBooks();
    };

    onMounted(() => {
      fetchBooks();
      fetchTopBooks();
    });

    return { books, topBooks, editingId, editName, startEdit, updateBook, deleteBook };
  }
};
</script>
