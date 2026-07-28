<script setup>
import { isAuthenticated, currentUser, logout } from '../auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const onLogout = () => {
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills align-items-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" exact-active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>

        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li v-else class="nav-item d-flex align-items-center ms-2">
          <span class="navbar-text me-2">{{ currentUser }}</span>
          <button type="button" class="btn btn-sm btn-outline-danger" @click="onLogout">
            Logout
          </button>
        </li>

        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogout" class="nav-link" active-class="active">Firebase Logout</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/manage" class="nav-link" active-class="active">Manage Books</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBooks" class="nav-link" active-class="active">Book Showcase</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetWeather" class="nav-link" active-class="active">Get Weather</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.nav-link.active {
  background-color: #0d6efd;
  color: #fff;
}
</style>
