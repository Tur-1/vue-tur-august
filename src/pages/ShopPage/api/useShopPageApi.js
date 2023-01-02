import api from "@/api";

const BASE_URL = 'shop';

const getCategoryPageContent = (categorySlug, queris, url) =>
{
    return api().get(url ?? BASE_URL + `/${ categorySlug }`, { params: queris });
}

export default {
    getCategoryPageContent
};