<script setup lang="ts">
import { useRoute } from 'vue-router';

const props = defineProps<{
  for: string;
}>();

const route = useRoute();
</script>

<template>
  <label :for="props.for">
    <slot></slot> <span class="text-red-500">{{ route.path === "/signup" ? "*必須" : null }}</span>
  </label>
</template>