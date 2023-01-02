import api from "@/api"



export default {
    getCheckoutContent()
    {
        return api().get('checkout');
    }

}