<template>
  <div class="mt-4">
    <h2>Books with ISBN &gt; 1000</h2>
    <ul class="list-group mt-2">
      <li v-for="book in books" :key="book.id" class="list-group-item">
        {{ book.name }} - ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);

    onMounted(async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const snapshot = await getDocs(q);
        snapshot.forEach((d) => {
          books.value.push({ id: d.id, ...d.data() });
        });
      } catch (e) {
        console.error('Error fetching books:', e);
      }
    });

    return { books };
  }
};
</script>
