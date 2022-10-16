import api from "@/api";



const getUserInformation = () =>
{
    return api().get("/user-info");
}

export default {
    getUserInformation,

}