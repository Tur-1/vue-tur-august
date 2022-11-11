
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";
import { ref } from "vue";
import toastStore from "@/views/components/Toast/toastStore";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";
import useBaseModel from "@/views/components/BaseModal/useBaseModel";




let form = ref({
    onProgress: false,
    phone_number: accountPageContent.user.phone_number,
    error: null,
});

const updateMyPhoneNumber = async () =>
{
    form.value.error = null;
    form.value.onProgress = true;
    try
    {
        let res = await useMyAccountPageApi.updateMyPhoneNumber(form.value.phone_number);

        accountPageContent.user.phone_number = form.value.phone_number;
        toastStore.open(res.data.data.message);
        closeModal();
    } catch (error)
    {
        if (error.response.status == 422)
        {
            form.value.error = error.response.data.message;
        }
    }
    form.value.onProgress = false;
};
const openModal = () =>
{
    useBaseModel.open('account-phone-number-modal');

    form.value.error = null;
    form.value.phone_number = accountPageContent.user.phone_number;


};
const closeModal = () =>
{
    useBaseModel.close('account-phone-number-modal');
};


export { updateMyPhoneNumber, openModal, closeModal, form }