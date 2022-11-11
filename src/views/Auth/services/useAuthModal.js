import { reactive } from "vue";
import useBottomSheet from "@/views/components/BottomSheet/useBottomSheet";
import useBaseModel from "@/views/components/BaseModal/useBaseModel";

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