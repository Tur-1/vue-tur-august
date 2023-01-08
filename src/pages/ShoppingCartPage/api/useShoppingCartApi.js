import api from "@/api"



export default {

    getCartCount() 
    {
        return api().get('cart/count');
    },
    getCartProducts() 
    {
        return api().get('/cart');
    },
    removeCartItem(cartItemId)
    {
        return api().post(`/cart/remove-item/${ cartItemId }`);
    },
    saveForLater({ productId, cartItemId })
    {
        return api().post(`cart/save-for-later/${ cartItemId }/product/${ productId }`);
    },
    incrementItemQuantity(cartItemId)
    {
        return api().post(`cart/increase-item-quantity/${ cartItemId }`);
    },
    decrementItemQuantity(cartItemId)
    {
        return api().post(`cart/decrease-item-quantity/${ cartItemId }`);
    },


}