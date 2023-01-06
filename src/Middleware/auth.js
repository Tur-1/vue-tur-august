import useRouterService from "@/router/useRouterService";
import useAuthApi from "@/Auth/api/useAuthApi";
import useAuthModal from "@/Auth/services/useAuthModal";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import authUser from "@/Auth/store/authUser";


const auth = async ({ to, from, next }) =>
{
    authUser.setAuthUser(null);
    useLoadingSpinner.show();

    let isNotAuthenticated = await useAuthApi.isAuthenticated();

    useLoadingSpinner.hide();

    if (isNotAuthenticated.data == false)
    {
        useRouterService.setIntendedPath(to.fullPath);
        useAuthModal.open();
        return next(false);
    }

    authUser.setAuthUser(isNotAuthenticated.data);
    return next();
}

export default auth