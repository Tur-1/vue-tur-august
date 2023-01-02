import api from "@/api"



export default {
    getSections() 
    {
        return api().get('/get-sections');
    }

}