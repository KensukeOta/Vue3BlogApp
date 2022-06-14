<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/organisms/Header.vue";
import Footer from "./components/organisms/Footer.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>