<template>
  <button @click="actionBtn({estado: estado, numero: 10})">{{textoBtn}}</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        estado: Boolean
    },
    computed: {
        textoBtn(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },
    methods: {
        ...mapActions(['actionBtn'])
    },
}
</script>

<style>

</style>