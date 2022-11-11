
import { ref } from "vue";
import toastStore from "@/views/components/Toast/toastStore";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";
import addressForm from "@/views/pages/MyAccountPage/store/addressForm";
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";
import ConfirmModelStore from "@/views/components/ConfirmModel/ConfirmModelStore";
import spinnerStore from "@/views/components/PageSpinner/spinnerStore";

import useBaseModel from "@/views/components/BaseModal/useBaseModel";
import { isNotNull } from "@/helpers";



let updateMode = ref(false);

let addressId = ref(0);


const storeAddress = async () =>
{

    addressForm.onProgress = true;
    addressForm.resetErrors();
    try
    {
        let response = await useMyAccountPageApi.storeNewAddress(addressForm.fields);

        accountPageContent.userAddresses = await (await useMyAccountPageApi.getUserAddresses()).data.data;

        toastStore.open(response.data.data.message);

        closeModal();
    } catch (error)
    {
        addressForm.setErrors(error.response);
    }

    addressForm.onProgress = false;
};
const updateUserAddress = async () =>
{


    addressForm.onProgress = true;
    addressForm.resetErrors();
    try
    {
        let response = await useMyAccountPageApi.updateUserAddress(addressForm.fields)

        accountPageContent.userAddresses = await (await useMyAccountPageApi.getUserAddresses()).data.data;

        toastStore.open(response.data.data.message);

        closeModal();
        updateMode.value = false;
    } catch (error)
    {

        addressForm.setErrors(error.response);
    }

    addressForm.onProgress = false;

};
const openConfirmModal = (id) =>
{

    ConfirmModelStore.open();
    addressId.value = id;
}
const destroyAddress = async () =>
{
    spinnerStore.showSpinner();
    ConfirmModelStore.close();
    try
    {
        let response = await useMyAccountPageApi.destroyAddress(addressId.value);

        accountPageContent.userAddresses = await (await useMyAccountPageApi.getUserAddresses()).data.data;

        toastStore.open(response.data.data.message);

    } catch (error)
    {
        if (error.response.data.success == false)
        {
            toastStore.open(error.response.data.message, false);
        }
    }
    spinnerStore.hideSpinner();

};

const openModal = (address = null) =>
{
    useBaseModel.open('address-book-modal');

    addressForm.resetFields();
    addressForm.resetErrors();

    if (isNotNull(address))
    {
        updateMode.value = true;
        addressForm.setFieldsValue(address);
    } else
    {
        updateMode.value = false;
    }

};

const closeModal = () =>
{
    useBaseModel.close('address-book-modal');
};


export 
{
    updateUserAddress,
    openConfirmModal,
    storeAddress,
    openModal,
    closeModal,
    addressForm,
    updateMode,
    destroyAddress
}