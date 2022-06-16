<script setup lang="ts">
import type { Post } from '@/types/Post';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { axios } from '@/lib/axios';

const post = ref<Post>();

const route = useRoute();

onMounted(async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${route.params.id}`);
  post.value = res.data;
});
</script>

<template>
  <h1 class="font-bold">{{ post?.title }}</h1>
  <p class="whitespace-pre-line">{{ post?.body }}</p>
</template>