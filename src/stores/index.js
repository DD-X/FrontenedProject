import {defineStore} from 'pinia';
import { ref } from 'vue';

function initState(){
    return{
        isCollapse:true,
    };
}

export const useAllDataStore = defineStore('allData', () => {
    //ref state 属性
    //computed getters
    //function actions

    const state = ref(initState());
  
    return { state };
  })