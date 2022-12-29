import { ref } from "vue";


let addressForm = ref({
    onProgress: false,
    fields: {
        address_id: "",
        full_name: "",
        address: "",
        city: "",
        phone_number: "",
        street: "",
    },
    errors: {
        address_id: null,
        full_name: null,
        address: null,
        city: null,
        phone_number: null,
        street: null,
    },

    resetErrors()
    {
        for (let err in this.errors)
        {
            err = null;
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
    setFieldsValue(object)
    {
        let field;
        let value;
        for (field in this.fields)
        {
            for (value in object)
            {
                if (field == value)
                {
                    this.fields[field] = object[value];
                }
            }
        }
    },
    setErrors(response)
    {
        if (response.status == 422)
        {
            this.errors = response.data.errors;

        }
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

export default addressForm.value;