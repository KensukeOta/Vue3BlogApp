<script setup lang="ts">
import { useAuthUserStore } from '@/stores/authUser';
import PostFormLink from '../components/atoms/PostFormLink.vue';

const authUser: any = useAuthUserStore();
</script>

<template>
  <h1 class="font-bold">トップページ</h1>
  <p>Welcome! {{ authUser.info ? authUser.info.name : "stranger" }}</p>
  <nav class="text-center">
    <PostFormLink />
  </nav>
</template>
