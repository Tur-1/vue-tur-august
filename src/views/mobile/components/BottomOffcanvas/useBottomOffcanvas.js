import { ref } from "vue";

export const offcanvas = ref({
    isOpen: false,
    open(value)
    {
        this.isOpen = value;
    }
});
