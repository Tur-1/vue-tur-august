import api from "@/api";

const BASE_URL = 'my-account';

const getUserInformation = () =>
{
    return api().get(BASE_URL + "/get-user-info");
}
const getAccountPageContent = () =>
{
    return api().get(BASE_URL);
}
const showOrder = (id) =>
{
    return api().get(BASE_URL + "/orders/" + id);
}

const updateAccountInfo = (fields) =>
{
    return api().post(BASE_URL + "/update-info", fields);
}
const updateMyPhoneNumber = (phoneNumber) =>
{
    return api().post(BASE_URL + "/update-phone-number", { phone_number: phoneNumber });
}

const updateMyAccountPassword = (fields) =>
{
    return api().post(BASE_URL + "/update-password", fields);
}

const updateUserAddress = (fields) =>
{
    return api().post(BASE_URL + "/update-address/", fields);
}
const storeNewAddress = (fields) =>
{
    return api().post(BASE_URL + "/new-address", fields);
}
const destroyAddress = (id) =>
{
    return api().post(BASE_URL + "/delete-address/" + id);
}
export default {
    getAccountPageContent,
    getUserInformation,
    updateAccountInfo,
    updateMyPhoneNumber,
    updateMyAccountPassword,
    storeNewAddress,
    updateUserAddress,
    destroyAddress,
    showOrder
}