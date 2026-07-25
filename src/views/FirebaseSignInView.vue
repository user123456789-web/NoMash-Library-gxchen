<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 class="mb-4">Sign in</h1>
        <p>
          <input type="text" class="form-control" placeholder="Email" v-model="email" />
        </p>
        <p>
          <input type="password" class="form-control" placeholder="Password" v-model="password" />
        </p>
        <p v-if="errorMsg" class="text-danger">{{ errorMsg }}</p>
        <p>
          <button class="btn btn-primary" @click="signin">Sign in via Firebase</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const router = useRouter()
const auth = getAuth()

const signin = () => {
  errorMsg.value = ''
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Firebase Login Successful!')
      router.push('/')
      console.log(auth.currentUser)
    })
    .catch((error) => {
      console.log(error.code)
      errorMsg.value = error.code
    })
}
</script>
