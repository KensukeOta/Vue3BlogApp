<script setup lang="ts">
import Label from "../atoms/Label.vue";
import TitleInput from "../atoms/TitleInput.vue";
</script>

<template>
  <dt>
    <Label for="title">タイトル</Label>
  </dt>
  <dd>
    <TitleInput />
  </dd>
</template>