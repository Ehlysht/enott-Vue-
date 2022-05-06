<template>
  <router-link :to="`/cms/${this.itemId}`" v-if="this.access == 'yes'" class="changeItem admItem"><img src="@/assets/img/pen.svg" alt="Close"></router-link>
</template>
                             
<script>
import axios from 'axios';
import { mapMutations } from 'vuex'
export default {
    props: ['itemId', 'itemImg'],
    data(){
        return{
            access: '',
        }
    },
    created(){
        this.access = document.cookie;
    },
    methods: {
        
    }
}
</script>

<style>

</style>