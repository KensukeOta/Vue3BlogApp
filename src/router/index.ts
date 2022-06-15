import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SignupView from "@/views/SignupView.vue";
import LoginView from "@/views/LoginView.vue";
import PostFormView from "@/views/PostFormView.vue";
import PostContentView from "@/views/PostContentView.vue";
import PostEditFormView from "@/views/PostEditFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/posts/create",
      name: "posts_create",
      component: PostFormView,
    },
    {
      path: "/posts/:id",
      name: "post_content",
      component: PostContentView,
    },
    {
      path: "/posts/:id/edit",
      name: "post_edit",
      component: PostEditFormView,
    },
  ],
});

export default router;
