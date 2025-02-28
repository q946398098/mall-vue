import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore  = defineStore('userInfoStore', () => {
        const userInfo = reactive({
            username: '',
            roles: [],
            icon:'',
            menus: [],
        })

        const token = ref('');

        const setToken = (newToken) => {
            token.value = newToken
        }

        const removeToken = () => {
            token.value = '';
        }

        const setUserInfo = (newUserInfo) => {
            userInfo.username = newUserInfo.username;
            userInfo.roles = newUserInfo.roles;
            userInfo.icon = newUserInfo.icon;
            userInfo.menus = newUserInfo.menus; //暂时写死
        }

        const removeUserInfo = () => {
            userInfo.username = '';
            userInfo.roles = [];
            userInfo.icon = '';
            userInfo.menus = [];
        }

        const setAllowedRoutes = (newAllowedRoutes) => {
            userInfo.allowedRoutes = newAllowedRoutes
        }


        return {
            userInfo, setUserInfo, removeUserInfo, token, setToken, removeToken
        }
    },
    {
        persist: true
    });