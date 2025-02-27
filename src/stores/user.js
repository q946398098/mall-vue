import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore  = defineStore('userInfoStore', () => {
        const userInfo = reactive({})

        const token = ref('');

        const setToken = (newToken) => {
            token.value = newToken
        }

        const removeToken = () => {
            token.value = '';
        }

        const setUserInfo = (newUserInfo) => {
            userInfo.value = newUserInfo
        }

        const removeUserInfo = () => {
            userInfo.value = {}
        }


        return {
            userInfo, setUserInfo, removeUserInfo, token, setToken, removeToken
        }
    },
    {
        persist: true
    });