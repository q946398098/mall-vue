import {defineStore} from "pinia";
import {ref} from "vue";

export const useLayoutStore = defineStore('layoutInfoStore', ()=>{

    const sidebarStatus = ref(false);


    const withoutAnimation = ref(false)

    const device = ref('desktop');

    const setSidebarStatus = (boolean_status) => {
        sidebarStatus.value = boolean_status;
    }

    const setDevice = (device_status) => {
        device.value = device_status;
    }


    return {sidebarStatus,device,setSidebarStatus,setDevice,withoutAnimation}

})