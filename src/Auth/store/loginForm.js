import { ref } from "vue";

let loginForm = ref({
    fields: {
        email: "",
        password: "",
    },
    errors: {
        email: null,
        password: null,
    },
    onProgress: false,
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


export default loginForm.value;