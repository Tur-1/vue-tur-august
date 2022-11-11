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
    setPageBackgroundColor(color)
    {

        document.body.style.backgroundColor = color ?? 'white';

    },
    setPageTitle(metaTitle)
    {

        document.title = `${ config.APP_NAME }  ${ metaTitle != 'august' ? '- ' + metaTitle : '' }`.toString().toUpperCase();

    },
});


export default useRouterService;