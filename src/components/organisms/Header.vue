<script setup lang="ts">
import { useAuthUserStore } from '@/stores/authUser';
import { RouterLink } from 'vue-router';
import LogoutButton from '../atoms/LogoutButton.vue';

const authUser = useAuthUserStore();
</script>

<template>
  <header class="flex justify-between border-b">
    <RouterLink to="/">
      <h1>Vue3BlogApp</h1>
    </RouterLink>

    <nav>
      <div v-if="!authUser.info">
        <RouterLink to="/signup">新規登録</RouterLink>
        <RouterLink to="/login">ログイン</RouterLink>
      </div>
      <div v-else>
        <LogoutButton />
      </div>
    </nav>
  </header>
</template>