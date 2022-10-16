import { ref } from "vue";


const routerStore = ref({
    intendedPath: '/',
    setIntendedPath(path)
    {
        this.intendedPath = path;
    },
    setBackgroundColor(color)
    {

        document.body.style.backgroundColor = color ?? 'white';

    },
    setPageTitle(to)
    {
        let title = to.name == 'home' ? '' : ` - ${ to.params.title ?? to.name }`.toString().toUpperCase();
        document.title = import.meta.env.VITE_APP_NAME + title;
    },
});


export default routerStore.value;