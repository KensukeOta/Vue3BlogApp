<script setup lang="ts">
import { useRouter } from 'vue-router';
import { axios } from '@/lib/axios';

const props = defineProps<{
  id: string;
}>();

const router = useRouter();

async function destroy() {
  if (!confirm("この記事を削除しますか？")) {
    return;
  }
  await axios.delete(`${import.meta.env.VITE_API_URL}/api/posts/${props.id}/destroy`);
  router.replace("/");
}
</script>

<template>
  <button @click="destroy" class="text-red-500">削除</button>
</template>