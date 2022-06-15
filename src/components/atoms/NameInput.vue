<script setup lang="ts">
import { useField } from 'vee-validate';

const { value: name } = useField("name");
</script>

<template>
  <input type="text" v-model="name" name="name" id="name" placeholder="名前" class="border" />
</template>