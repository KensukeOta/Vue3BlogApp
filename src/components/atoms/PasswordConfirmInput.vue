<script setup lang="ts">
import { useField } from 'vee-validate';

const { value: password_confirmation } = useField("password_confirmation");
</script>

<template>
  <input type="password" v-model="password_confirmation" name="password_confirmation" id="password_confirmation"
    placeholder="パスワード確認" class="border" />
</template>