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
    errors: {},

    resetErrors()
    {
        this.errors = {};
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
    },
});

export default addressForm.value;