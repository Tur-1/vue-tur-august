import api from "@/api";

const BASE_URL = 'shop';

const getCategoryPageContent = (categorySlug) =>
{
    return api().get(BASE_URL + `/${ categorySlug }`);
}

export default {
    getCategoryPageContent
};