<template>
  <div class="container mt-4">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook" class="mt-3">
      <div class="mb-3">
        <label for="isbn" class="form-label">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" v-model="name" id="name" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Add Book</button>
    </form>

    <BookList />
  </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';
import BookList from '../components/BookList.vue';

export default {
  components: { BookList },
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      try {
        await addDoc(collection(db, 'books'), {
          isbn: Number(isbn.value),
          name: name.value
        });
        isbn.value = '';
        name.value = '';
        alert('Book added!');
      } catch (e) {
        console.error('Error adding book:', e);
      }
    };

    return { isbn, name, addBook };
  }
};
</script>
