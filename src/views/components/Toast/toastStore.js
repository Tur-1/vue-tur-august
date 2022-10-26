import { reactive, ref } from "vue";

let backgroundErrorColor = 'bg-alert-danger';
let backgroundSuccessColor = 'bg-alert-success';


let toastStore = reactive({

    message: '',
    background: backgroundSuccessColor,
    isOpen: false,
    time: 3500,


    open(message, background)
    {
        this.isOpen = true;
        this.message = message;
        // this.background = background;
        setTimeout(() =>
        {
            this.isOpen = false;
        }, this.time);
    },
    close()
    {
        this.isOpen = false;
        this.message = '';
    }
})

export default toastStore;