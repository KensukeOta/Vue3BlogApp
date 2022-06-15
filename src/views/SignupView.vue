<script setup lang="ts">
import { onMounted } from "vue";
import { useForm } from "vee-validate"
import { object, string, ref } from "yup";
import { useRouter } from "vue-router";
import { axios } from "@/lib/axios";
import { useAuthUserStore } from "@/stores/authUser";
import NameArea from "@/components/molecules/NameArea.vue";
import EmailArea from "@/components/molecules/EmailArea.vue";
import PasswordArea from "@/components/molecules/PasswordArea.vue";
import PasswordConfirmArea from "@/components/molecules/PasswordConfirmArea.vue";
import SubmitButton from "@/components/atoms/SubmitButton.vue";

const authUser = useAuthUserStore();

onMounted(() => {
  if (authUser.info) {
    router.replace("/");
  }
});

const router = useRouter();

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
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/users/create`, { name: values.name, email: values.email, password: values.password, password_confirmation: values.password_confirmation });
    router.replace("/");
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <h1 class="font-bold">ユーザー登録フォーム</h1>

  <form @submit="onSubmit">
    <dl>
      <NameArea />
      <p class="text-red-500">{{ errors.name }}</p>
      <EmailArea />
      <p class="text-red-500">{{ errors.email }}</p>
      <PasswordArea />
      <p class="text-red-500">{{ errors.password }}</p>
      <PasswordConfirmArea />
      <p class="text-red-500">{{ errors.password_confirmation }}</p>
      <SubmitButton :disabled="isSubmitting">登録</SubmitButton>
    </dl>
  </form>
</template>