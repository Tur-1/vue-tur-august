import useLayoutApi from "@/layouts/api/useLayoutApi"
import SectionsStore from "@/layouts/stores/SectionsStore";


export default function useLayoutService()
{
    return {
        async getSections() 
        {

            let res = await useLayoutApi.getSections();

            SectionsStore.list = res.data.sections;

        }

    }
}