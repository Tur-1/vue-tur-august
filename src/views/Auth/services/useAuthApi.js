import api from "@/api";
import axios from "axios";
import loginForm from "@/views/Auth/store/loginForm";
import registerForm from "@/views/Auth/store/registerForm";


axios.defaults.withCredentials = true;

const setCsrfCookie = () =>
{
    api().get("http://localhost:8000/sanctum/csrf-cookie");
}
const isNotAuthenticated = async () =>
{
    let isNotAuthenticated = await api().get('isNotAuthenticated');

    if (isNotAuthenticated.data == true)
    {
        return true;
    }

    return false;
}
const login = () =>
{
    setCsrfCookie();
    return api().post("login", {
        email: loginForm.email,
        password: loginForm.password,
    });
}
const logout = () =>
{

    return api().post("logout");
}
const register = () =>
{
    setCsrfCookie();
    return api().post("register", {
        register_name: registerForm.register_name,
        register_email: registerForm.register_email,
        register_password: registerForm.register_password,
        password_confirmation: registerForm.password_confirmation,
        gender: registerForm.gender,
    });
}

const getAuthenticatedUser = () =>
{
    return api().get("/user");
}
const getLoginErrors = errors =>
{
    if (errors)
    {


        if (errors.email)
        {
            loginForm.error.email = errors.email[0];
        }
        if (errors.password)
        {
            loginForm.error.password = errors.password[0];
        }
    }
}
const getRegisterErrors = (errors) =>
{
    if (errors)
    {
        if (errors.register_name)
        {
            registerForm.error.register_name =
                errors.register_name[0];
        }
        if (errors.register_email)
        {
            registerForm.error.register_email =
                errors.register_email[0];
        }
        if (errors.register_password)
        {
            registerForm.error.register_password =
                errors.register_password[0];
        }
        if (errors.gender)
        {
            registerForm.error.gender = errors.gender[0];
        }
    }
}
export default {
    register,
    login,
    getAuthenticatedUser,
    getLoginErrors,
    getRegisterErrors,
    isNotAuthenticated,
    logout
}