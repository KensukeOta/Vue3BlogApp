<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { axios } from '@/lib/axios';
import { useAuthUserStore } from '@/stores/authUser';
import PostFormLink from '../components/atoms/PostFormLink.vue';
import PostItem from '../components/organisms/PostItem.vue';

const authUser: any = useAuthUserStore();

const posts = ref();
onMounted(async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts`);
  posts.value = res.data;
});
</script>

<template>
  <h1 class="font-bold">トップページ</h1>
  <p>Welcome! {{ authUser.info ? authUser.info.name : "stranger" }}</p>

  <nav class="text-center">
    <PostFormLink />
  </nav>

  <ul>
    <template v-for="post in posts" :key="post.id">
      <PostItem :post="post" />
    </template>
  </ul>
</template>
