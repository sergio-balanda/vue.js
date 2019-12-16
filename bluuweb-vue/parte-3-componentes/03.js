Vue.component('saludo', {
    template: `
    <div>
    <h1>{{ saludo }}</h1>
    <h3>aaaaaaaaaaaaaaaa</h3>
    </div>`,
    data(){
        return{
            saludo:'hola soy un componente'
        }
    }
});

Vue.component('padre', require('./components/padre.js')); 
Vue.component('hijo', require('./components/hijo.js')); 

const app = new Vue({
    el: '#app',
    data:{

    },//data
    methods: {
        
    },//methods
    components: {
        padre: padre,
        hijo:hijo
       },
    
});
