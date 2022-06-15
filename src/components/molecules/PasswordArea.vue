<script setup lang="ts">
import Label from '../atoms/Label.vue';
import PasswordInput from '../atoms/PasswordInput.vue';
</script>

<template>
  <dt>
    <Label for="password">パスワード</Label>
  </dt>
  <dd>
    <PasswordInput />
  </dd>
</template>