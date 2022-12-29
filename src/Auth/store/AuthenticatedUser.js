import { reactive, ref } from "vue";


const AuthenticatedUser = reactive({
    user: {},
    setAuthUser(user)
    {
        this.user = user;
    }

});


export default AuthenticatedUser;