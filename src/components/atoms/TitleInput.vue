<script setup lang="ts">
import { useField } from 'vee-validate';

const { value: title } = useField("title");
</script>

<template>
  <input type="text" v-model="title" name="title" id="title" placeholder="タイトル" class="border" />
</template>