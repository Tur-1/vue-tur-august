
import { ref } from "vue";
import toastStore from "@/views/components/Toast/toastStore";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";
import addressForm from "@/views/pages/MyAccountPage/store/addressForm";
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";
import ConfirmModelStore from "@/views/components/ConfirmModel/ConfirmModelStore";
import spinnerStore from "@/views/components/PageSpinner/spinnerStore";


let isModalOpen = ref(false);

let updateMode = ref(false);

let addressId = ref(0);

const storeAddress = async () =>
{
    addressForm.onProgress = true;
    addressForm.resetErrors();
    try
    {
        let res = updateMode.value ? await useMyAccountPageApi.updateMyAddress(addressForm.fields) : await useMyAccountPageApi.storeNewAddress(addressForm.fields);


        accountPageContent.userAddresses = await (await useMyAccountPageApi.getUserAddresses()).data.data;

        toastStore.open(res.data.data.message);

        closeModal();
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
        let res = await useMyAccountPageApi.destroyAddress(addressId.value);

        accountPageContent.userAddresses = await (await useMyAccountPageApi.getUserAddresses()).data.data;

        toastStore.open(res.data.data.message);

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

    if (address)
    {


        updateMode.value = true;

        let field;
        let value;
        for (field in addressForm.fields)
        {
            for (value in address)
            {
                if (field == value)
                {

                    addressForm.fields[field] = address[value];
                }
            }
        }
    }


    isModalOpen.value = true;
    // addressForm.resetFields();
    // addressForm.resetErrors();
};

const closeModal = () =>
{

    isModalOpen.value = false;
};


export
{
    openConfirmModal,
    isModalOpen,
    storeAddress,
    openModal,
    closeModal,
    addressForm,
    updateMode,
    destroyAddress
}