import useAuthApi from "@/views/Auth/api/useAuthApi";
import loginForm from "@/views/Auth/store/loginForm";

import useAuthModal from "@/views/Auth/services/useAuthModal";
import useRouterService from "@/router/useRouterService";

const login = async () =>
{
    loginForm.onProgress = true;
    loginForm.resetErrors();
    try
    {
        let response = await useAuthApi.login(loginForm.fields);


        useAuthModal.close();

        useRouterService.redirectToIntendedPath();
    } catch (error)
    {

        loginForm.setErrors(error.response);
    }

    loginForm.onProgress = false;
};


export { loginForm, login }