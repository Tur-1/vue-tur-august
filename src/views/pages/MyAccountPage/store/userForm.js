import { ref } from "vue";


let userForm = ref({
    onProgress: false,
    fields: {
        name: '',
        email: '',
        gender: '',
    },
    errors: {
        name: null,
        email: null,
        gender: null
    },

    resetErrors()
    {
        let erorr;
        for (erorr in this.errors)
        {
            this.errors[erorr] = null;
        }

    },
    getUserInfo(userInfo)
    {
        this.fields = userInfo;
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

export default userForm.value;