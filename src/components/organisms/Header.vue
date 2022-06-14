<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="flex justify-between border-b">
    <RouterLink to="/">
      <h1>Vue3BlogApp</h1>
    </RouterLink>

    <nav>
      <RouterLink to="/signup">新規登録</RouterLink>
      <RouterLink to="/login">ログイン</RouterLink>
    </nav>
  </header>
</template>