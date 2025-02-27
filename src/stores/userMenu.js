import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserMenuStore = defineStore('userInfo', () => {



    const allowedRoutes = ref([])

    const setAllowedRoutes = (newAllowedRoutes) => {
        allowedRoutes.value = newAllowedRoutes
    }


    return {
        allowedRoutes, setAllowedRoutes
    }


},{
    persist: true
})