import useAuthApi from "@/views/Auth/api/useAuthApi";
import loginForm from "@/views/Auth/store/loginForm";

import authModal from "@/views/Auth/store/authModal";
import useRouterService from "@/router/RouterService";

const login = async () =>
{
    loginForm.onProgress = true;
    loginForm.resetErrors();
    try
    {
        let response = await useAuthApi.login(loginForm.fields);


        authModal.close();

        useRouterService.redirectToIntendedPath();
    } catch (error)
    {

        loginForm.setErrors(error.response);
    }

    loginForm.onProgress = false;
};


export { loginForm, login }