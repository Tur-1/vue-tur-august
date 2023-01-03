
import { reactive } from 'vue';

let registerForm = reactive({
    fields: {
        register_name: "",
        register_email: "",
        register_password: "",
        password_confirmation: "",
        gender: "Male",
    },
    errors: {
        register_name: null,
        register_email: null,
        register_password: null,
        gender: null,
    },

    onProgress: false,
    showProgress()
    {
        this.onProgress = true;


    },

    hideProgress()
    {
        this.onProgress = false;
    },
    clearErrors()
    {
        this.errors = {};
    },

    addValuesToField()
    {

    },
    setFields(fields)
    {
        this.fields = fields;
    },
    appendFields(newFields)
    {

        let field;
        for (field in newFields)
        {
            if (!this.fields.hasOwnProperty(newFields))
            {
                this.fields[field] = newFields[field];
            }

        }
    },
    clearFields()
    {

        let field;
        for (field in this.fields)
        {
            this.fields[field] = '';
        }
    },
    setErrors(response) 
    {
        if (response.status == 422)
        {
            this.errors = response.data.errors;
        }
    }
})


export default registerForm;
