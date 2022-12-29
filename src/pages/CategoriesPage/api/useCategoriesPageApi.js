import api from "@/api";


const getSectionsWithCategories = () =>
{
    return api().get("/get-all-categories");
}

export default {
    getSectionsWithCategories,

}