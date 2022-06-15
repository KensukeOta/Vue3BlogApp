<script setup lang="ts">
const props = defineProps<{
  for: string;
}>();
</script>

<template>
  <label :for="props.for">
    <slot></slot>
  </label>
</template>