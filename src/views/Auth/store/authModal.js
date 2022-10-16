import { ref } from "vue";


const authModal = ref({
    isOpen: false,
    openModal()
    {
        this.isOpen = true;
    },
    closeModal()
    {
        this.isOpen = false;
    }

});


export default authModal.value;