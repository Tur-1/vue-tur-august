import useAuthApi from "@/views/Auth/api/useAuthApi";
import registerForm from "@/views/Auth/store/registerForm";

import authModal from "@/views/Auth/store/authModal";
import useRouterService from "@/router/RouterService";

const register = async () =>
{
    registerForm.onProgress = true;
    registerForm.resetErrors();
    try
    {
        await useAuthApi.register(registerForm.fields);

        authModal.close();
        useRouterService.redirectToIntendedPath();
    } catch (error)
    {

        registerForm.setErrors(error.response);
    }

    registerForm.onProgress = false;
};
export { registerForm, register }