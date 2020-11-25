<template>
  <div>
    <h1 :style="colorContador">{{ titulo }} {{ contador }}</h1>
    <button @click="actionIncrementar">Incrementar Contador</button>
    <btn-disminuir />
    <hr>
    <btn-accion :estado="true" />
    <btn-accion :estado="false" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import BtnAccion from '../components/BtnAccion.vue';
import BtnDisminuir from '../components/BtnDisminuir.vue';

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BtnAccion
  },
  data() {
    return {
      titulo: 'Contador Vuex:'
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? { 'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['incrementarContador']),
    ...mapActions(['actionIncrementar'])
  },
}
</script>
