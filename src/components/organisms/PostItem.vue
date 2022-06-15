<script setup lang="ts">
import type { Post } from "@/types/Post";

defineProps<{
  post: Post;
}>();
</script>

<template>
  <li class="border">
    <h1 class="font-bold">{{ post.title }}</h1>
    <nav>
      <p>by {{ post.user.name }}</p>
    </nav>
  </li>
</template>