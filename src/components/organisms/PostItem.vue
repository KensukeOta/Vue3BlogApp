<script setup lang="ts">
import type { Post } from "@/types/Post";
import { RouterLink } from "vue-router";

defineProps<{
  post: Post;
}>();
</script>

<template>
  <li class="border">
    <RouterLink :to="`/posts/${post.id}`">
      <h1 class="font-bold">{{ post.title }}</h1>
    </RouterLink>
    <nav>
      <p>by {{ post.user.name }}</p>
    </nav>
  </li>
</template>