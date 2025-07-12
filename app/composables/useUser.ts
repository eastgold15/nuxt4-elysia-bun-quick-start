import { useStorage } from "@vueuse/core";

import { skipHydrate } from "pinia";
interface User {
  id: string;
}

export const useUserStore = defineStore("user", () => {
  const user = useStorage<User | any>("blog/user", {});

  const setUser = (userData: User) => {
    user.value = userData;
  };
  const logout = () => {
    user.value = {};
  };

  const isLogin = computed(() => {
    return !!(user.value as User).id;
  });

  const isVisitor = computed(() => {
    return user.value.role === "visitor";
  });

  return {
    user: skipHydrate(user),
    setUser,
    isLogin,
    isVisitor,
    logout
  };
});
