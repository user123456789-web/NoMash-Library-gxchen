<template>
  <div v-if="apiResponse" class="api-response">
    <pre>{{ JSON.stringify(apiResponse, null, 2) }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const apiResponse = ref(null)

const getAllBooks = async () => {
  try {
    const response = await fetch('src/assets/json/authors.json')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    const books = []
    data.forEach(author => {
      author.famousWorks.forEach(work => {
        books.push({
          title: work.title,
          year: work.year,
          author: author.name
        })
      })
    })

    apiResponse.value = {
      success: true,
      data: {
        totalBooks: books.length,
        books: books
      },
      timestamp: new Date().toISOString()
    }

  } catch (err) {
    console.error('Error loading books:', err)
  }
}

onMounted(() => {
  getAllBooks()
})
</script>
