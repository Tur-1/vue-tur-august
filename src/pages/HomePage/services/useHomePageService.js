
import useHomePageApi from '@/pages/HomePage/api/useHomePageApi';
import HomePageStore from '@/pages/HomePage/store/HomePageStore';

export default function useHomePageService()
{
    return {
        async getHomePageContent()
        {

            HomePageStore.onProgress = true;


            try
            {

                let response = await useHomePageApi.getHomePageContent();


                HomePageStore.largeBanners = response.data.largeBanners;
                HomePageStore.products = response.data.products;
                HomePageStore.mediumBanners = response.data.mediumBanners;

            } catch (error)
            {
                console.log(error);

            }

            HomePageStore.onProgress = false;

        }
    }
}
