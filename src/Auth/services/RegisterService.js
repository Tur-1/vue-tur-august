import useAuthApi from "@/Auth/api/useAuthApi";
import registerForm from "@/Auth/store/registerForm";

import useAuthModal from "@/Auth/services/useAuthModal";
import useRouterService from "@/router/useRouterService";

const register = async () =>
{
    registerForm.onProgress = true;
    registerForm.resetErrors();
    try
    {
        await useAuthApi.register(registerForm.fields);

        useAuthModal.close();
        useRouterService.redirectToIntendedPath();
    } catch (error)
    {

        registerForm.setErrors(error.response);
    }

    registerForm.onProgress = false;
};
export { registerForm, register }