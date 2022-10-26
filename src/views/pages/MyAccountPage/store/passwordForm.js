import { computed, readonly, ref } from "vue";


let passwordForm = ref({
    onProgress: false,
    fields: {
        current_password: '',
        new_password: '',
        new_password_confirmation: '',
    },
    errors: {
        current_password: null,
        new_password: null,
        new_password_confirmation: null,
    },

    resetErrors()
    {
        let erorr;
        for (erorr in this.errors)
        {
            this.errors[erorr] = null;
        }

    },
    resetFields()
    {
        let field;
        for (field in this.fields)
        {
            this.fields[field] = null;
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
    },
});

export default passwordForm.value;