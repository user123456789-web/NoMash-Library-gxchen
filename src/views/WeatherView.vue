<template>
  <div class="container mt-4">
    <div class="text-center mb-4">
      <h1>WEATHER APP</h1>
      <div class="d-flex justify-content-center gap-2 mb-3">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="form-control w-auto"
          @keyup.enter="searchByCity"
        />
        <button @click="searchByCity" class="btn btn-primary">Search</button>
      </div>
    </div>

    <main class="text-center">
      <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
      <div v-if="weatherData">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
      <div v-else-if="!errorMsg">
        <p>Loading weather for your location...</p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

const apikey = import.meta.env.VITE_WEATHER_KEY;

export default {
  name: "App",
  data() {
    return {
      city: "",
      weatherData: null,
      errorMsg: null,
    };
  },
  computed: {
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273)
        : null;
    },
    iconUrl() {
      return this.weatherData
        ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
  methods: {
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        });
      }
    },
    async searchByCity() {
      if (!this.city.trim()) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
      await this.fetchWeatherData(url);
    },
    async fetchWeatherData(url) {
      this.errorMsg = null;
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        this.errorMsg = error.response?.data?.message || "Failed to fetch weather data.";
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>
