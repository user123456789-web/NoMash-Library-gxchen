import { ref, computed } from 'vue'

const USERS = [
  { username: 'admin',   password: 'admin123' },
  { username: 'student', password: 'student123' }
]

const currentUser = ref(null)

const isAuthenticated = computed(() => !!currentUser.value)

const login = (username, password) => {
  const match = USERS.find(
    u => u.username === username && u.password === password
  )
  if (match) {
    currentUser.value = match.username
    return true
  }
  return false
}

const logout = () => {
  currentUser.value = null
}

export { isAuthenticated, currentUser, login, logout }
