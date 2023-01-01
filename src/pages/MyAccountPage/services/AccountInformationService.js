

import toastStore from "@/components/Toast/toastStore";
import accountPageContent from "@/pages/MyAccountPage/store/accountPageContent";
import userForm from "@/pages/MyAccountPage/store/userForm";
import useMyAccountPageApi from "@/pages/MyAccountPage/api/useMyAccountPageApi";
import useBaseModel from "@/components/BaseModal/useBaseModel";

const updateAccountInfo = async () =>
{
    userForm.onProgress = true;
    userForm.resetErrors();
    try
    {
        let res = await useMyAccountPageApi.updateAccountInfo(userForm.fields);

        accountPageContent.user = await (await useMyAccountPageApi.getUserInformation()).data.data;

        toastStore.open(res.data.message);

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