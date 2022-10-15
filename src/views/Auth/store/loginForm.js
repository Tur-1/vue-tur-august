import { ref } from "vue";

let loginForm = ref({
    email: String,
    password: String,
    onProgress: false,
    error: {
        email: null,
        password: null,
    },
    resetErrors()
    {
        this.error.email = null;
        this.error.password = null;

    }
});


export default loginForm.value;