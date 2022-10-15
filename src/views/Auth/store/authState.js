import { reactive, ref } from "vue";



export default {
    getState()
    {
        return localStorage.getItem('isNotAuthenticated') ?? true;
    },
    setState(value)
    {
        localStorage.setItem('isNotAuthenticated', value)
    }
};