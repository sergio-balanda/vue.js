Vue.component('padre',{
    template:`
        <div class="p-5 bg-dark">
        <h1 class="text-white">padre {{ num }}</h1>
        <hijo :numero="num" @nombreHijo="nombrePadre=$event"></hijo>
        </div>
        `,
        data(){
            return{
                num:0,
                nombrePadre:''
            }
        }
});