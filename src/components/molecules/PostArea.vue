<script setup lang="ts">
import Label from '../atoms/Label.vue';
import PostInput from '../atoms/PostInput.vue';
</script>

<template>
  <dt>
    <Label for="body">本文</Label>
  </dt>
  <dd>
    <PostInput />
  </dd>
</template>