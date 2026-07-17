<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../auth.js'

const router = useRouter()

const username = ref('')
const password = ref('')
const errorMsg = ref('')

const submit = () => {
  errorMsg.value = ''
  if (!login(username.value, password.value)) {
    errorMsg.value = 'Invalid username or password.'
    return
  }
  router.replace('/about')
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Member Login</h2>

            <form @submit.prevent="submit" novalidate>
              <div class="mb-3">
                <label for="login-username" class="form-label">Username</label>
                <input
                  id="login-username"
                  type="text"
                  class="form-control"
                  v-model="username"
                />
              </div>

              <div class="mb-3">
                <label for="login-password" class="form-label">Password</label>
                <input
                  id="login-password"
                  type="password"
                  class="form-control"
                  v-model="password"
                  autocomplete="current-password"
                />
              </div>

              <div v-if="errorMsg" class="alert alert-danger py-2" role="alert">
                {{ errorMsg }}
              </div>

              <button type="submit" class="btn btn-primary w-100">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
