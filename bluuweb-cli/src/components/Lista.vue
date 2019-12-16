<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of arrayOrdena" :key="item.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center">
        {{ index }} - {{ item.nombre }}
        <span class="badge badge-primary badge-pill">{{ item.cantidad }}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>
import {mapState, stateMutations, mapMutations} from 'vuex';

export default {
  name: "Lista",
  computed: {
    ...mapState(['frutas']),
    arrayOrdena(){
      return this.frutas.sort( (a, b)=> b.cantidad-a.cantidad )
    }
  },
  methods: {
    ...mapMutations(['aumentar']),
    ...mapMutations(['reiniciar'])
  },

};
</script>