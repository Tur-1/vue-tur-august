
import useCategoriesPageApi from '@/pages/CategoriesPage/api/useCategoriesPageApi';
import CategoriesPageStore from '@/pages/CategoriesPage/store/CategoriesPageStore';

export default function useCategoriesPageService()
{
    return {
        async getAllCategories()
        {

            CategoriesPageStore.onProgress = true;


            try
            {

                let response = await useCategoriesPageApi.getSectionsWithCategories();

                CategoriesPageStore.sections = response.data.sections;

            } catch (error)
            {
                console.log(error);

            }

            CategoriesPageStore.onProgress = false;

        }
    }
}
