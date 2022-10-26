
import { ref } from "vue";
import toastStore from "@/views/components/Toast/toastStore";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";
import userForm from "@/views/pages/MyAccountPage/store/userForm";
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";


let isModalOpen = ref(false);




const updateAccountInfo = async () =>
{
    userForm.onProgress = true;
    userForm.resetErrors();
    try
    {
        let res = await useMyAccountPageApi.updateAccountInfo(userForm.fields);

        accountPageContent.user = await (await useMyAccountPageApi.getUserInformation()).data.data;

        toastStore.open(res.data.data.message);

        closeModal();
    } catch (error)
    {
        userForm.setErrors(error.response);
    }

    userForm.onProgress = false;
};


const openModal = () =>
{
    isModalOpen.value = true;
    userForm.resetFields();
    userForm.resetErrors();
};

const closeModal = () =>
{

    isModalOpen.value = false;
};


export { isModalOpen, updateAccountInfo, openModal, closeModal, userForm }