<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useForm } from "vee-validate"
import { object, string } from "yup";
import { useRouter } from "vue-router";
import { axios } from "@/lib/axios";
import { useAuthUserStore } from "@/stores/authUser";
import EmailArea from "@/components/molecules/EmailArea.vue";
import PasswordArea from "@/components/molecules/PasswordArea.vue";
import SubmitButton from "@/components/atoms/SubmitButton.vue";

const error = ref<string>();

const authUser = useAuthUserStore();

const router = useRouter();

onMounted(() => {
  if (authUser.info) {
    router.replace("/");
  }
});

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
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, { email: values.email, password: values.password });
    if (res.data.id) {
      router.replace("/");
      authUser.$patch({ info: res.data });
    } else {
      error.value = res.data.message;
    }
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <h1 class="font-bold">ログインフォーム</h1>

  <form @submit="onSubmit">
    <p class="text-red-500">{{ error }}</p>
    <dl>
      <EmailArea />
      <p class="text-red-500">{{ errors.email }}</p>
      <PasswordArea />
      <p class="text-red-500">{{ errors.password }}</p>
      <SubmitButton :disabled="isSubmitting">ログイン</SubmitButton>
    </dl>
  </form>
</template>