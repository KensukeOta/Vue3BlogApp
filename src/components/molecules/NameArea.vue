<script setup lang="ts">
import Label from '../atoms/Label.vue';
import NameInput from '../atoms/NameInput.vue';
</script>

<template>
  <dt>
    <Label for="name">名前</Label>
  </dt>
  <dd>
    <NameInput />
  </dd>
</template>