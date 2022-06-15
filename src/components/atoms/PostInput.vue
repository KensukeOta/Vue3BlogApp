<script setup lang="ts">
import { useField } from 'vee-validate';

const { value: body } = useField<string>("body");
</script>

<template>
  <textarea name="body" v-model="body" id="body" placeholder="本文" class="border"></textarea>
</template>