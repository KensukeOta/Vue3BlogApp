<script setup lang="ts">
import type { Post } from "@/types/Post";
import { onMounted, ref } from "vue";
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { useRoute, useRouter } from "vue-router";
import { axios } from "@/lib/axios";
import { useAuthUserStore } from "@/stores/authUser";
import TitleArea from "../components/molecules/TitleArea.vue";
import PostArea from "../components/molecules/PostArea.vue";
import SubmitButton from "../components/atoms/SubmitButton.vue";

const authUser: any = useAuthUserStore();

const post = ref<Post>();

const route = useRoute();

const router = useRouter();

onMounted(async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${route.params.id}`);
  post.value = res.data;
  if (authUser.info.id !== post.value?.user_id) {
    router.replace("/");
  }
});

const { value: user_id } = useField("user_id");

const schema = object({
  title: string().required("必須の項目です。").max(50, "50文字以内で入力してください。"),
  body: string().required("必須の項目です。").max(1000, "1000文字以内で入力してください。"),
  user_id: string().required("必須の項目です。"),
});

const { errors, handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    title: `${post.value?.title}`,
    body: `${post.value?.body}`,
    user_id: `${post.value?.user_id}`
  }
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await axios.patch(`${import.meta.env.VITE_API_URL}/api/posts/${route.params.id}/update`, { title: values.title, body: values.body, user_id: values.user_id });
    router.replace("/");
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <h1 class="font-bold">記事更新フォーム</h1>

  <form @submit="onSubmit">
    <dl>
      <input type="hidden" v-model="user_id" name="user_id">
      <TitleArea />
      <p class="text-red-500">{{ errors.title }}</p>
      <PostArea />
      <p class="text-red-500">{{ errors.body }}</p>
      <SubmitButton :disabled="isSubmitting">更新する</SubmitButton>
    </dl>
  </form>
</template>