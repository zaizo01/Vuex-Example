<template>
  <button @click="actionDisminuir(200)">Disminuir</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        
    },
    methods: {
        ...mapActions(['actionDisminuir'])
    },
}
</script>
