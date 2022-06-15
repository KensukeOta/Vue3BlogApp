<script setup lang="ts">
import Label from '../atoms/Label.vue';
import EmailInput from '../atoms/EmailInput.vue';
</script>

<template>
  <dt>
    <Label for="email">メールアドレス</Label>
  </dt>
  <dd>
    <EmailInput />
  </dd>
</template>