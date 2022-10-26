import { reactive } from "vue";

const ConfirmModelStore = reactive({
    isOpen: false,
    open()
    {
        this.isOpen = true;

    },
    close()
    {
        this.isOpen = false;
    },
});

export default ConfirmModelStore;