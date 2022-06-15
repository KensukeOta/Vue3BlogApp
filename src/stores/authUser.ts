import { defineStore } from "pinia";

export const useAuthUserStore = defineStore({
  id: "authUser",
  state: () => ({
    info: "",
  }),
  persist: {
    enabled: true
  }
});
