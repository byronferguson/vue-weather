<script setup async>
import { onMounted, shallowRef } from 'vue';
import ForecastWeather from './components/ForecastWeather.vue';
import PageHeader from './components/PageHeader.vue';
import WeatherCard from './components/WeatherCard.vue';
import WeatherSearch from './components/WeatherSearch.vue';
import WeatherSearchHistory from './components/WeatherSearchHistory.vue';
import { useSearchHistory } from './composables/search-history';
import { WeatherService } from "./services/weather.service.js";

const city = shallowRef('Shawnee')
const { history, addItem } = useSearchHistory();
const current = shallowRef(null);
const forecast = shallowRef([]);

onMounted(async () => {
  await search(history.value[0] ?? 'Kansas City')
})

async function search(location) {
  const [_current, _forecast] = await WeatherService.forecastByLocation(location)
  city.value = location
  addItem(location);
  current.value = _current;
  forecast.value = _forecast;
}
</script>

<template>
  <PageHeader :city />
  <div className="flex gap-4">
    <aside className="flex w-1/5 flex-col gap-8">
      <WeatherSearch @search="search" />
      <WeatherSearchHistory :history="history" @search="search" />
    </aside>
    <main>
      <WeatherCard v-if="current" :weather="current" />
      <ForecastWeather v-if="forecast" :forecast />
    </main>
  </div>
</template>
