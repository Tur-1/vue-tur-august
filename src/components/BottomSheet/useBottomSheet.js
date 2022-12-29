import { reactive, ref } from "vue";




const useBottomSheet = reactive({
    isOpen: false,
    id: String,
    open(id)
    {
        this.id = id;
        this.isOpen = true;

    },
    close(id)
    {
        this.id = id;
        this.isOpen = false;

    }
});
export default useBottomSheet;