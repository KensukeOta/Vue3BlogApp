<script setup lang="ts">
import Label from '../atoms/Label.vue';
import PasswordConfirmInput from '../atoms/PasswordConfirmInput.vue';
</script>

<template>
  <dt>
    <Label for="password_confirmation">パスワード確認</Label>
  </dt>
  <dd>
    <PasswordConfirmInput />
  </dd>
</template>