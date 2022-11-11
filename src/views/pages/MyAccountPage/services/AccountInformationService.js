

import toastStore from "@/views/components/Toast/toastStore";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";
import userForm from "@/views/pages/MyAccountPage/store/userForm";
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";
import useBaseModel from "@/views/components/BaseModal/useBaseModel";

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
    useBaseModel.open('account-info-modal');
    userForm.getUserInfo(accountPageContent.user);

    userForm.resetErrors();
};

const closeModal = () =>
{
    useBaseModel.close('account-info-modal');

};


export { updateAccountInfo, openModal, closeModal, userForm }