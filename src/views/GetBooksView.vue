<template>
  <div class="container mt-4">
    <h1>Book Showcase</h1>
    <p class="text-muted">Fetch all books from Firestore via Cloud Function</p>
    <button class="btn btn-success mt-2" @click="fetchBooks">Load Books</button>

    <div v-if="books.length" class="mt-4">
      <div class="card mb-2" v-for="book in books" :key="book.isbn">
        <div class="card-body">
          <h5 class="card-title">{{ book.name }}</h5>
          <p class="card-text text-muted">ISBN: {{ book.isbn }}</p>
        </div>
      </div>
    </div>

    <p v-if="error" class="text-danger mt-3">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      error: null,
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('/emulator/week7-gxchen/us-central1/getBooks');
        this.books = response.data.books;
        this.error = null;
      } catch (error) {
        console.error('Error fetching books:', error);
        this.error = error.message;
        this.books = [];
      }
    },
  },
};
</script>
