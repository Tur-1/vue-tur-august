import api from "@/api";

const BASE_URL = 'product-detail';

const getProductDetail = (productSlug) =>
{
    return api().get(BASE_URL + `/${ productSlug }`);
}
const sendComment = (productSlug, comment) =>
{
    return api().post(BASE_URL + `/${ productSlug }/comment`, comment);
}
const addToShoppingCart = (params) =>
{
    return api().post(BASE_URL + `/add-to-cart`, params);
}


export default {
    getProductDetail,
    sendComment,
    addToShoppingCart
};