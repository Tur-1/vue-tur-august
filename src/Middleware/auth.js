import useRouterService from "@/router/useRouterService";
import useAuthApi from "@/Auth/api/useAuthApi";
import useAuthModal from "@/Auth/services/useAuthModal";
import { useLoadingSpinner } from "@/components/LoadingSpinner";


const auth = async ({ to, from, next }) =>
{
    useLoadingSpinner.show();

    let isNotAuthenticated = await useAuthApi.isAuthenticated();

    useLoadingSpinner.hide();

    if (isNotAuthenticated.data == false)
    {
        useRouterService.setIntendedPath(to.fullPath);
        useAuthModal.open();
        return next(false);
    }

    return next();
}

export default auth