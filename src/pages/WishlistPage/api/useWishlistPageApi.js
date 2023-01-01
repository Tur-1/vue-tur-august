import api from "@/api";

const BASE_URL = 'wishlist';

const getUserWishlist = () =>
{
    return api().get(BASE_URL);
}
const addToWishlist = (productId) =>
{
    return api().get(`${ BASE_URL }/${ productId }/store`);
}
export default {
    getUserWishlist,
    addToWishlist
};