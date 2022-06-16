<script setup lang="ts">
import type { Post } from "@/types/Post";
import { RouterLink } from "vue-router";
import PostEditFormLink from "@/components/atoms/PostEditFormLink.vue";

defineProps<{
  post: Post;
}>();
</script>

<template>
  <li class="border">
    <RouterLink :to="`/posts/${post.id}`">
      <h1 class="font-bold">{{ post.title }}</h1>
    </RouterLink>
    <nav class="flex justify-between">
      <p>by {{ post.user.name }}</p>
      <PostEditFormLink :id="`${post.id}`" />
    </nav>
  </li>
</template>