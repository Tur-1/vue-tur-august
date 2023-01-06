
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useMyAccountPageApi from "@/pages/MyAccountPage/api/useMyAccountPageApi";
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
import useToastNotification from "@/components/Toast/useToastNotification";
import { FormStore } from "@/components/BaseForm";
import { useBaseModel } from "@/components/BaseModal";
import { useConfirmModal } from "@/components/ConfirmModel";
import { useRoute } from "vue-router";


export default function useMyAccountService()
{

    const getAccountPageContent = async () =>
    {

        useLoadingSpinner.show();

        let response = await useMyAccountPageApi.getAccountPageContent();

        MyAccountStore.userInfo = response.data.userInfo;
        MyAccountStore.userAddresses = response.data.userAddresses;
        MyAccountStore.orders = response.data.orders;


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


    const showOrder = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();

        const route = useRoute();

        let response = await useMyAccountPageApi.showOrder(route.params.id);

        MyAccountStore.orderDetail.order = response.data.order.order;
        MyAccountStore.orderDetail.products = response.data.order.products;
        MyAccountStore.orderDetail.coupon = response.data.order.coupon;
        MyAccountStore.orderDetail.address = response.data.order.address;

        useLoadingSpinner.hide();

    };
    return {
        getAccountPageContent,
        updateAccountInformation,
        updateMyPhoneNumber,
        updateMyAccountPassword,
        storeNewAddress,
        updateAddress,
        deleteAddress,
        showOrder
    }
}