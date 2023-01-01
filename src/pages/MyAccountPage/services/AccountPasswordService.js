
import useMyAccountPageApi from "@/pages/MyAccountPage/api/useMyAccountPageApi";

import toastStore from "@/components/Toast/toastStore";
import passwordForm from "@/pages/MyAccountPage/store/passwordForm";
import useBaseModel from "@/components/BaseModal/useBaseModel";




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
    useBaseModel.open('account-password-modal');
};
const closeModal = () =>
{
    useBaseModel.close('account-password-modal');
};


export { updateMyAccountPassword, openModal, closeModal, passwordForm }