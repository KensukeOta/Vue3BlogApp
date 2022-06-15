<script setup lang="ts">
defineProps<{
  disabled: boolean;
}>();
</script>

<template>
  <button type="submit" :disabled="disabled" class="border">
    <slot></slot>
  </button>
</template>