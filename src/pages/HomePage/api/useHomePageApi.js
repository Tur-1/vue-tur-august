import api from "@/api";


const getHomePageContent = () =>
{
    return api().get("/home");
}

export default {
    getHomePageContent,

}