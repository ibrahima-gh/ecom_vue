import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useAuth = defineStore("auth", () => {
    const user = ref(null);
    const isAuthenticated = computed(() => user.value !== null);

    const authenticate = (username, email) => {
        user.value = {
            username: username || "Utilisateur",
            email: email || "email@example.com",
        };
    };

    const register = (username, email) => {
        user.value = {
            username: username || "Utilisateur",
            email: email || "email@example.com",
        };
    };

    const route = useRoute(); 

    return {
        user,
        url: computed(() => route.fullPath),
        isAuthenticated,
        authenticate,
        register
    };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
}