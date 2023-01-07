import { reactive } from "vue";
import router from '@/router'
import config from "@/config/app";
import { isNotNull } from "@/helpers";



const useRouterService = reactive({
    intendedPath: null,
    setIntendedPath(path)
    {
        this.intendedPath = path;
    },
    redirectToIntendedPath()
    {
        if (isNotNull(this.intendedPath))
        {
            return router.push(this.intendedPath);
        }

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