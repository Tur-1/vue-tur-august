import { computed, readonly, ref } from "vue";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";


let user = computed(() => readonly(accountPageContent.user));

let userForm = ref({
    onProgress: false,
    fields: {
        name: user.value.name,
        email: user.value.email,
        gender: user.value.gender,
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
    resetFields()
    {
        let field;
        for (field in this.fields)
        {
            for (let value in user.value)
            {
                if (field == value)
                {
                    this.fields[field] = user.value[value];
                }
            }
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

export default userForm.value;