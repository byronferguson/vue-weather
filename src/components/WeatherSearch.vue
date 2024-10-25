<script setup>
import { ref } from 'vue';

const emit = defineEmits(['search'])

const location = ref('');

function handleSubmit() {
  emit('search', location.value)
  location.value = '';
}
</script>

<template>
  <form class="flex flex-col gap-2" @submit.prevent="handleSubmit">
    <div>
      <input type="text"
        class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Please Enter a City" v-model="location" />
    </div>
    <button type="submit"
      class="inline-flex justify-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <span>🔎</span>
      <span>Search</span>
    </button>
  </form>
</template>
