import { reactive } from "vue";

const WishlistStore = reactive({
    products: [],
    onProgress: false,
    productsIds: [],
    isInWishlist(productId)
    {
        let found = this.productsIds.find(element => element == productId);

        if (found)
        {
            return true;
        } else
        {
            this.products = this.products.filter((item) => item.id != productId);

            return false;
        }

    }
});


export default WishlistStore;