// import { defineStore, acceptHMRUpdate } from "pinia"; // already imported in nuxt config

export const useuser = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {
    login() {
      // isLoggedIn.value = true;
      this.isLoggedIn = true;
      useRouter().push("/");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useuser, import.meta.hot));
}
