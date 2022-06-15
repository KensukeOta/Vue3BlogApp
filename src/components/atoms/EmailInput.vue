<script setup lang="ts">
import { useField } from 'vee-validate';

const { value: email } = useField("email");
</script>

<template>
  <input type="email" v-model="email" name="email" id="email" placeholder="メールアドレス" class="border" />
</template>