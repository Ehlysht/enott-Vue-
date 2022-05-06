<template>
  <div class="container">
      <div class="cms">
          <p v-if="this.answer == 'No'">
              You not Admin
          </p>
          <p v-if="this.answer == ''">
              Вхід в адміністраторську панель
          </p>
          <p v-if="this.answer == 'yes'">
              Привіт! Що сьогодні зробимо?
          </p>
            <form action="#" @submit.prevent="checkAccess()" v-if="this.answer == ''">
                <input type="name" name="name" placeholder="Логін" v-model='name'>
                <input type="password" name="password" placeholder="Пароль" v-model='pass'>
                <button class="btn">
                    Увійти
                </button>
            </form>  
            <ul class="admMenu" v-if="this.answer == 'yes'">
                <router-link
                    tag="li"
                    to="addItem"    
                >
                    Cтворити новий товар
                </router-link>
            </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            name: '',
            pass: '',
            answer: ''
        }
    },
    created(){ 
        this.answer = document.cookie
    },
    methods:{
        async checkAccess(){
    
            await axios.get('http://localhost:3500/admin?name=' + this.name + '&pass=' + this.pass)
            .then(response => {
                this.answer = response.data.values;
            })
            if(this.answer.length != 0){
                this.answer = 'yes';
                document.cookie = 'yes';
            } else {
                this.answer = 'No';
            }
        },
    }
}
</script>

<style scoped>
    .cms{
        padding: 20px 0 150px;
    }
    p{
        font-size: 30px;
        font-weight: 500;
        text-align: center;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 40px auto;
    }
    input{
        margin-bottom: 19px;
        width: 100%;
        border: 2px solid #b8baf6;
        height: 47px;
    }
</style>