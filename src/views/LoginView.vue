<script setup lang="ts">
import { useForm } from "vee-validate"
import { object, string } from "yup";
import { useRouter } from "vue-router";
import { axios } from "@/lib/axios";
import EmailArea from "@/components/molecules/EmailArea.vue";
import PasswordArea from "@/components/molecules/PasswordArea.vue";
import SubmitButton from "@/components/atoms/SubmitButton.vue";

const router = useRouter();

const schema = object({
  email: string().required("必須の項目です。").email("メールアドレスの形式ではありません。"),
  password: string().required("必須の項目です。"),
});

const { errors, handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  }
});

const onSubmit = handleSubmit(async (values) => {
  try {
    console.log(values);
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <h1 class="font-bold">ログインフォーム</h1>

  <form @submit="onSubmit">
    <dl>
      <EmailArea />
      <p>{{ errors.email }}</p>
      <PasswordArea />
      <p>{{ errors.password }}</p>
      <SubmitButton :disabled="isSubmitting">登録</SubmitButton>
    </dl>
  </form>
</template>