<script setup lang="ts">
import { useForm } from "vee-validate"
import { object, string, ref } from "yup";
import NameArea from "@/components/molecules/NameArea.vue";
import EmailArea from "@/components/molecules/EmailArea.vue";
import PasswordArea from "@/components/molecules/PasswordArea.vue";
import PasswordConfirmArea from "@/components/molecules/PasswordConfirmArea.vue";
import SubmitButton from "@/components/atoms/SubmitButton.vue";

const schema = object({
  name: string().required("必須の項目です。"),
  email: string().required("必須の項目です。").email("メールアドレスの形式ではありません。"),
  password: string().required("必須の項目です。"),
  password_confirmation: string().oneOf([ref("password"), null], "パスワードが一致しません。")
});

const { errors, handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }
});

const onSubmit = handleSubmit(async (values) => {
  console.log(values);
});
</script>

<template>
  <h1 class="font-bold">ユーザー登録フォーム</h1>

  <form @submit="onSubmit">
    <dl>
      <NameArea />
      <p>{{ errors.name }}</p>
      <EmailArea />
      <p>{{ errors.email }}</p>
      <PasswordArea />
      <p>{{ errors.password }}</p>
      <PasswordConfirmArea />
      <p>{{ errors.password_confirmation }}</p>
      <SubmitButton :disabled="isSubmitting">登録</SubmitButton>
    </dl>
  </form>
</template>