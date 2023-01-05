import { reactive, ref } from "vue";


const authUser = reactive({
    user: {},
    access_token: null,
    setAuthUser(user)
    {
        this.user = user;
    },
    setAccessToken(access_token)
    {
        this.access_token = access_token;
    }
});


export default authUser;