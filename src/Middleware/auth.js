import useRouterService from "@/router/RouterService";
import useAuthApi from "@/views/Auth/api/useAuthApi";
import authModal from "@/views/Auth/store/authModal";
import spinnerStore from "@/views/components/PageSpinner/spinnerStore";


const auth = async ({ to, from, next }) =>
{
    spinnerStore.showSpinner();

    let isNotAuthenticated = await useAuthApi.isAuthenticated();

    spinnerStore.hideSpinner();

    if (isNotAuthenticated.data == false)
    {
        useRouterService.setIntendedPath(to.fullPath);
        authModal.open();

        return next(false);
    }

    return next();
}

export default auth