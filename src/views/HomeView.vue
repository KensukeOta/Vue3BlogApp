<script setup lang="ts">
import { useAuthUserStore } from '@/stores/authUser';

const authUser: any = useAuthUserStore();
</script>

<template>
  <h1 class="font-bold">トップページ</h1>
  <p>Welcome! {{ authUser.info ? authUser.info.name : "stranger" }}</p>
</template>
