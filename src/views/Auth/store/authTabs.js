import { ref } from "vue";


const authTabs = ref({
    Tab: 1,
    openTab(number)
    {
        this.Tab = number;
    },


});


export default authTabs.value;