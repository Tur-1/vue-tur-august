
import { ref } from "vue";

export const Tab = ref({
    id: 0,
    categoryId: 0,
    openSectionTab(id)
    {
        this.id = id;
        this.categoryId = 0;

    },
    openCategoryContent(categoryId) 
    {
        this.categoryId = categoryId;
    }

});





