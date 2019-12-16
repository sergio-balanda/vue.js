const app = new Vue({
    el: '#app',
    data:{
        titulo: 'hola mundo',
        frutas:[
            {nombre: 'Pera', cantidad:10},
            {nombre: 'Manzana', cantidad:9},
            {nombre: 'Frutilla', cantidad:0},
        ],
        nuevaFruta:'',
        cantidad:'',
        total:0
    },//data
    methods: {
        agregarFruta(){
            if(this.nuevaFruta!=''){
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad:0
                });  
                this.nuevaFruta=''
            }          
        }
    },//methods
    computed: {
        sumarFrutas(){
            this.total=0;
            for (fruta of this.frutas) {
                this.total = this.total+fruta.cantidad;
                
            }
            return this.total;
        }
    },//computed
});