<script setup lang="ts">
import { useField } from 'vee-validate';

const { value: password } = useField("password");
</script>

<template>
  <input type="password" v-model="password" name="password" id="password" placeholder="パスワード" class="border" />
</template>