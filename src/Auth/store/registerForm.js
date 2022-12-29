import { ref } from "vue";

let registerForm = ref({
    fields: {
        register_name: "",
        register_email: "",
        register_password: "",
        password_confirmation: "",
        gender: "Male",
    },
    onProgress: false,
    errors: {
        register_name: null,
        register_email: null,
        register_password: null,
        gender: null,
    },

    resetErrors()
    {
        let erorr;
        for (erorr in this.errors)
        {
            this.errors[erorr] = null;
        }
    },
    setErrors(response) 
    {
        if (response.status == 422)
        {
            let errors = response.data.errors;
            let err;
            let field;
            for (err in errors)
            {

                for (field in this.errors)
                {
                    if (field == err)
                    {
                        this.errors[field] = errors[err][0];
                    }
                }
            }
        }
    }
});


export default registerForm.value;