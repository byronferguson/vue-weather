<script setup>
import { titleCase } from '@/utils/string.utils';

defineProps({
  city: String,
})

</script>

<template>
  <h1 class="mb-2 mt-8 text-center text-4xl font-bold">Weather Dashboard</h1>

  <h2 v-if="city" class="mb-8 text-center text-3xl font-medium">
    for {{ titleCase(city) }}
  </h2>
</template>
