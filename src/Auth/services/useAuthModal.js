import { reactive } from "vue";
import useBottomSheet from "@/components/BottomSheet/useBottomSheet";
import { useBaseModel } from "@/components/BaseModal";

const useAuthModal = reactive({
    isOpen: false,
    open()
    {
        this.isOpen = true;

        useBaseModel.open('auth-modal');


        useBottomSheet.open('auth-modal');

    },
    close()
    {
        this.isOpen = false;

        useBaseModel.close('auth-modal');

        useBottomSheet.close('auth-modal');

    }

});


export default useAuthModal;