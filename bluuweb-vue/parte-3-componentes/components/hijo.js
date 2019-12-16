Vue.component('hijo',{
    template:`
    <div class="bg-white p-2">
    <h1>hijo</h1>
    <p class="text-dark">{{ numero }}</p>
    <h4>NOMBRE: {{ nombre }}</h4>
    </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre:'Ignacio'
        }
    },
    mounted() {
        this.$emit('nombreHijo',this.nombre);
    },
});