<template>
  <div class="container mt-4">
    <h1>Book Counter</h1>
    <button class="btn btn-primary mt-2" @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null" class="mt-3">Total number of books: {{ count }}</p>
    <p v-if="error" class="text-danger mt-3">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      count: null,
      error: null,
    };
  },
  methods: {
    async getBookCount() {
      try {
        const response = await axios.get('https://countbooks-bhnqakklka-uc.a.run.app');
        this.count = response.data.count;
        this.error = null;
      } catch (error) {
        console.error('Error fetching book count:', error);
        this.error = error.message;
        this.count = null;
      }
    },
  },
};
</script>
