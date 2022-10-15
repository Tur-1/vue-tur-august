import { ref } from "vue";


const authModal = ref({
    isOpen: false,
    intendedPath: '',
    openModal()
    {
        this.isOpen = true;
    },
    closeModal()
    {
        this.isOpen = false;
    },
    setIntendedPath(path)
    {
        this.intendedPath = path;
    },

});


export default authModal.value;