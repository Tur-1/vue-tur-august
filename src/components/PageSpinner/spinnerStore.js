import { reactive, readonly } from 'vue';


const spinnerStore = reactive({
    isShown: false,

    showSpinner()
    {
        this.isShown = true;
    },
    hideSpinner()
    {
        this.isShown = false;

    }
});


export default spinnerStore;