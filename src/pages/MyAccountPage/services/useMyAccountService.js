
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useMyAccountPageApi from "@/pages/MyAccountPage/api/useMyAccountPageApi";
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
import useToastNotification from "@/components/Toast/useToastNotification";
import { FormStore } from "@/components/BaseForm";
import { useBaseModel } from "@/components/BaseModal";
import { useConfirmModal } from "@/components/ConfirmModel";


export default function useMyAccountService()
{

    const getAccountPageContent = async () =>
    {

        useLoadingSpinner.show();

        let response = await useMyAccountPageApi.getAccountPageContent();

        MyAccountStore.userInfo = response.data.userInfo;
        MyAccountStore.userAddresses = response.data.userAddresses;

        useLoadingSpinner.hide();
    }
    const updateAccountInformation = async () =>
    {

        FormStore.showProgress();
        FormStore.clearErrors();

        let res = await useMyAccountPageApi.updateAccountInfo(FormStore.fields);

        MyAccountStore.userInfo = res.data.user;
        useToastNotification.open(res.data.message);

        FormStore.hideProgress();

        useBaseModel.close("account-info-modal");
    }


    const updateMyPhoneNumber = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();
        try
        {
            let res = await useMyAccountPageApi.updateMyPhoneNumber(FormStore.fields.phone_number);

            MyAccountStore.userInfo.phone_number = FormStore.fields.phone_number;

            useToastNotification.open(res.data.message);

            useBaseModel.close("account-info-modal");
        } catch (error)
        {

            if (error.response.status == 422)
            {
                FormStore.setErrors(error.response);
            }
        }
        FormStore.hideProgress();

    };

    const updateMyAccountPassword = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();
        try
        {
            let res = await useMyAccountPageApi.updateMyAccountPassword(FormStore.fields);

            useToastNotification.open(res.data.message);

            useBaseModel.close("account-password-modal");
        } catch (error)
        {
            if (error.response.status == 422)
            {
                FormStore.setErrors(error.response);
            }
        }

        FormStore.hideProgress();
    };
    const storeNewAddress = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();
        try
        {
            let res = await useMyAccountPageApi.storeNewAddress(FormStore.fields);

            MyAccountStore.userAddresses.push(res.data.address);
            useToastNotification.open(res.data.message);

            useBaseModel.close("account-address-modal");
        } catch (error)
        {
            if (error.response.status == 422)
            {
                FormStore.setErrors(error.response);
            }
        }

        FormStore.hideProgress();
    };
    const updateAddress = async () =>
    {
        FormStore.showProgress();
        FormStore.clearErrors();
        try
        {
            let response = await useMyAccountPageApi.updateUserAddress(FormStore.fields);

            MyAccountStore.userAddresses = response.data.userAddresses;

            useToastNotification.open(response.data.message);

            useBaseModel.close("account-address-modal");
        } catch (error)
        {
            if (error.response.status == 422)
            {
                FormStore.setErrors(error.response);
            }
        }

        FormStore.hideProgress();
    };
    const deleteAddress = async (address) =>
    {
        useConfirmModal.onProgress(true);

        let response = await useMyAccountPageApi.destroyAddress(address.address_id);

        MyAccountStore.userAddresses.splice(address.index, 1);

        useToastNotification.open(response.data.message);

        useConfirmModal.onProgress(false);

        useConfirmModal.close();



    };
    return {
        getAccountPageContent,
        updateAccountInformation,
        updateMyPhoneNumber,
        updateMyAccountPassword,
        storeNewAddress,
        updateAddress,
        deleteAddress
    }
}