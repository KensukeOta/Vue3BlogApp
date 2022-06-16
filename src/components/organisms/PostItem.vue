<script setup lang="ts">
import type { Post } from "@/types/Post";
import { RouterLink } from "vue-router";
import { useAuthUserStore } from "@/stores/authUser";
import PostEditFormLink from "@/components/atoms/PostEditFormLink.vue";
import PostDeleteButton from "@/components/atoms/PostDeleteButton.vue";

defineProps<{
  post: Post;
}>();

const authUser: any = useAuthUserStore();
</script>

<template>
  <li class="border">
    <RouterLink :to="`/posts/${post.id}`">
      <h1 class="font-bold">{{ post.title }}</h1>
    </RouterLink>
    <nav class="flex justify-between">
      <p>by {{ post.user.name }}</p>
      <PostEditFormLink :id="`${post.id}`" v-if="authUser.info.id === post.user_id" />
      <PostDeleteButton :id="`${post.id}`" v-if="authUser.info.id === post.user_id" />
    </nav>
  </li>
</template>