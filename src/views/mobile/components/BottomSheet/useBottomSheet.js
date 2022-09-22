import { reactive, ref } from "vue";

export const useBottomSheet = reactive({
    isOpen: false,
    open(value, modalName)
    {
        this.isOpen = value;
    }
});
