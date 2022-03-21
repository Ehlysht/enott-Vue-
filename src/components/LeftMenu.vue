<template>
    <div class="left-menu">   
        <p class="leftbar-title">
            Предназначение
        </p>
        <ul class="leftbar">
            <li 
                class="leftbar-item" 
                v-for="links in menu" 
                :key="links.id"
            >
                <router-link
                    tag="a"
                    href="#"
                    class="leftbar-link"
                    :to="`/${this.pageName}/${links.subcat}`"
                    @click="this.subcat = links.subcat"
                >
                    {{ links.subcat }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ['pageName'],
    computed: {
        menu(){
            return this.$store.getters.menu
        }        
    },
    mounted() {
        this.$store.dispatch('setMenu', this.pageName);
    },
}
</script>