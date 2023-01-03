import useAuthApi from "@/Auth/api/useAuthApi";
import loginForm from "@/Auth/store/loginForm";

import useAuthModal from "@/Auth/services/useAuthModal";
import useRouterService from "@/router/useRouterService";

const login = async () =>
{
    loginForm.showProgress(true);
    loginForm.clearErrors();
    try
    {
        let response = await useAuthApi.login(loginForm.fields);


        useAuthModal.close();

        useRouterService.redirectToIntendedPath();
    } catch (error)
    {

        loginForm.setErrors(error.response);
    }

    loginForm.showProgress(false);
};


export { loginForm, login }