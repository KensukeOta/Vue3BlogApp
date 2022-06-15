<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { useAuthUserStore } from "@/stores/authUser";
import TitleArea from "../components/molecules/TitleArea.vue";
import PostArea from "../components/molecules/PostArea.vue";
import SubmitButton from "../components/atoms/SubmitButton.vue";
import { axios } from "@/lib/axios";
import { useRouter } from "vue-router";

const authUser: any = useAuthUserStore();

const router = useRouter();

const { value: user_id } = useField("user_id");

const schema = object({
  title: string().required("必須の項目です。").max(50, "50文字以内で入力してください。"),
  body: string().required("必須の項目です。").max(1000, "1000文字以内で入力してください。"),
  user_id: string().required("必須の項目です。"),
});

const { errors, handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    title: "",
    body: "",
    user_id: `${authUser.info.id}`,
  }
});

const onSubmit = handleSubmit(async (values) => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/posts/create`, { title: values.title, body: values.body, user_id: values.user_id });
    router.replace("/");
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <h1 class="font-bold">記事投稿フォーム</h1>

  <form @submit="onSubmit">
    <dl>
      <input type="hidden" v-model="user_id" name="user_id">
      <TitleArea />
      <p class="text-red-500">{{ errors.title }}</p>
      <PostArea />
      <p class="text-red-500">{{ errors.body }}</p>
      <SubmitButton :disabled="isSubmitting">投稿する</SubmitButton>
    </dl>
  </form>
</template>