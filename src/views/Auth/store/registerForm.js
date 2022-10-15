import { ref } from "vue";

let registerForm = ref({
    register_name: String,
    register_email: String,
    register_password: String,
    password_confirmation: String,
    gender: String,
    onProgress: false,
    error: {
        register_name: null,
        register_email: null,
        register_password: null,
        gender: null,
    },

    resetErrors()
    {
        this.error.gender = null;
        this.error.register_password = null;
        this.error.register_email = null;
        this.error.register_name = null;
    }
});


export default registerForm.value;