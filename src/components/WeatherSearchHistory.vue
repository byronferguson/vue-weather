<script setup>
import { titleCase } from '@/utils/string.utils.js';

defineProps({
  history: {
    type: Array,
    default: () => [],
  }
})

defineEmits(['search'])
</script>

<template>
  <section>
    <p class="mb-2 text-center">Recent Searches</p>
    <div class="overflow-hidden rounded-md bg-slate-100 text-slate-800 shadow">
      <ul role="list" class="divide-y divide-slate-300">
        <li @click="$emit('search', city)" class="cursor-pointer px-6 py-4 hover:bg-indigo-200" v-for="city in history"
          :key="city">
          {{ titleCase(city) }}
        </li>
      </ul>
    </div>
  </section>
</template>
