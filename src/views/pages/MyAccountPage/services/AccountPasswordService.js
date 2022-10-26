
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";
import { ref } from "vue";
import toastStore from "@/views/components/Toast/toastStore";
import passwordForm from "@/views/pages/MyAccountPage/store/passwordForm";



let isModalOpen = ref(false);


const updateMyAccountPassword = async () =>
{
    passwordForm.onProgress = true;
    passwordForm.resetErrors();
    try
    {
        let res = await useMyAccountPageApi.updateMyAccountPassword(passwordForm.fields);

        toastStore.open(res.data.message);

        closeModal();
    } catch (error)
    {
        passwordForm.setErrors(error.response);
    }

    passwordForm.onProgress = false;
};
const openModal = () =>
{
    passwordForm.resetErrors();
    passwordForm.resetFields();
    isModalOpen.value = true;
};
const closeModal = () =>
{

    isModalOpen.value = false;
};


export { isModalOpen, updateMyAccountPassword, openModal, closeModal, passwordForm }