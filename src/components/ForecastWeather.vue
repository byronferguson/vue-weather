<script setup>
import WeatherCard from './WeatherCard.vue';

defineProps({
  forecast: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div className="mt-4 grid grid-cols-5 gap-4">
    <WeatherCard v-for="weather in forecast" :weather :key="weather.$d" />
  </div>
</template>
