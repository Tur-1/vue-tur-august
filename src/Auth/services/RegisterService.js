import useAuthApi from "@/views/Auth/api/useAuthApi";
import registerForm from "@/views/Auth/store/registerForm";

import useAuthModal from "@/views/Auth/services/useAuthModal";
import useRouterService from "@/router/RouterService";

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