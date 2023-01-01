import api from "@/api";

const BASE_URL = 'shop';

const getCategoryPageContent = (categorySlug, queris) =>
{
    return api().get(BASE_URL + `/${ categorySlug }`, { params: queris });
}

export default {
    getCategoryPageContent
};