import api from "@/api"



export default {
    getCheckoutContent()
    {
        return api().get('checkout');
    },
    applyCoupon(code, cartTotal)
    {
        return api().post(`checkout/apply-coupon`, { couponCode: code, cartTotal: cartTotal });
    },
    buyNow(addressId)
    {
        return api().post(`checkout/buy-now`, { addressId: addressId });
    }

}