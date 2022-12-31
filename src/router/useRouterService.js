import { reactive } from "vue";
import router from '@/router'
import config from "@/config/app";



const useRouterService = reactive({
    intendedPath: '/',
    setIntendedPath(path)
    {
        this.intendedPath = path;
    },
    redirectToIntendedPath()
    {
        return router.push(this.intendedPath);
    },
    redirectToRoute(routeName)
    {
        return router.push({ name: routeName });
    },
    setPageBackgroundColor(color)
    {

        document.body.style.backgroundColor = color ?? 'white';

    },
    setPageTitle(title)
    {

        if (title)
        {
            document.title = `${ config.APP_NAME }  ${ title != 'august' ? '- ' + title : '' }`.toString().toUpperCase();
        } else
        {
            document.title = config.APP_NAME;
        }
    }


});


export default useRouterService;