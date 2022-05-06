<template>
  <button v-if="this.access == 'yes'" class="deleteItem admItem" @click.prevent="deleteItem"><img src="@/assets/img/close.svg" alt="Close"></button>
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
        async deleteItem(){
            await axios.post('http://localhost:3500/admin/delete?image=' + this.itemImg)
            .then(response => {
                axios.post('http://localhost:3500/admin/deleteItem?id=' + this.itemId)
            })
            this.$router.go()
            
        },
    }
}
</script>

<style>

</style>