<script setup lang="ts">
import { axios } from '@/lib/axios';
import { useAuthUserStore } from '@/stores/authUser';
import { useRouter } from 'vue-router';

const authUser = useAuthUserStore();

const router = useRouter();

async function logout() {
  await axios.post(`${import.meta.env.VITE_API_URL}/api/users/logout`);
  router.replace("/login");
  authUser.$patch({ info: "" });
}
</script>

<template>
  <button @click="logout">ログアウト</button>
</template>