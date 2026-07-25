<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 class="mb-4">Sign out</h1>
        <p v-if="email">Current user: {{ email }}</p>
        <p v-else>No user is logged in.</p>
        <p>
          <button class="btn btn-danger" @click="signout">Sign out from Firebase</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth()
const email = ref(auth.currentUser ? auth.currentUser.email : '')

const signout = () => {
  signOut(auth)
    .then(() => {
      console.log('Firebase Sign out Successful!')
      email.value = ''
      console.log(auth.currentUser)
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>
