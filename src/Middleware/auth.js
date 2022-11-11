import useRouterService from "@/router/RouterService";
import useAuthApi from "@/views/Auth/api/useAuthApi";
import useAuthModal from "@/views/Auth/services/useAuthModal";
import spinnerStore from "@/views/components/PageSpinner/spinnerStore";


const auth = async ({ to, from, next }) =>
{
    spinnerStore.showSpinner();

    let isNotAuthenticated = await useAuthApi.isAuthenticated();

    spinnerStore.hideSpinner();

    if (isNotAuthenticated.data == false)
    {
        useRouterService.setIntendedPath(to.fullPath);
        useAuthModal.open();
        return next(false);
    }

    return next();
}

export default auth