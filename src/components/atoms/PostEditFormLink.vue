<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  id: string;
}>();
</script>

<template>
  <RouterLink :to="`/posts/${id}/edit`" class="text-green-500">更新</RouterLink>
</template>