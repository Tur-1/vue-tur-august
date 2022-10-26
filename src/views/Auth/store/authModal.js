import { ref } from "vue";


const authModal = ref({
    isOpen: false,
    open()
    {
        this.isOpen = true;
    },
    close()
    {
        this.isOpen = false;
    }

});


export default authModal.value;