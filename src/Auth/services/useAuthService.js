import useAuthApi from "@/Auth/api/useAuthApi";
import loginForm from "@/Auth/store/loginForm";
import registerForm from "@/Auth/store/registerForm";

import useAuthModal from "@/Auth/services/useAuthModal";
import useRouterService from "@/router/useRouterService";

export default function useAuthService()
{
    const login = async () =>
    {
        loginForm.showProgress();
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

        loginForm.hideProgress();
    };
    const register = async () =>
    {
        loginForm.showProgress();
        registerForm.clearErrors();
        try
        {
            await useAuthApi.register(registerForm.fields);

            useAuthModal.close();
            useRouterService.redirectToIntendedPath();
        } catch (error)
        {

            registerForm.setErrors(error.response);
        }

        loginForm.hideProgress();
    };

    return {
        login,
        register
    }
}

