import { reactive } from "vue";


const useOffcanvas = reactive({
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
export default useOffcanvas;