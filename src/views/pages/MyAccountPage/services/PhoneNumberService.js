
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";
import { ref } from "vue";
import toastStore from "@/views/components/Toast/toastStore";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";



let isModalOpen = ref(false);

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
        toastStore.open(res.data.message);
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
    form.value.error = null;
    form.value.phone_number = accountPageContent.user.phone_number;
    isModalOpen.value = true;
};
const closeModal = () =>
{

    isModalOpen.value = false;
};


export { isModalOpen, updateMyPhoneNumber, openModal, closeModal, form }