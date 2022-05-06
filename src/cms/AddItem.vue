<template>
    <div class="container">
        <div class="add">
            <h1 class="title add-title" v-if="this.access == 'yes'">
                Hello
            </h1>
            <div class="return" v-if="this.access != 'yes'">
                <router-link
                    tag="a"
                    to="access"
                >
                    Go to login page
                </router-link>
                <p>
                    or
                </p>
                <router-link
                    tag="a"
                    to="/"
                >
                    Home page
                </router-link>
            </div>
            <form action="#" class="addForm" @submit.prevent="addItem()" v-if="this.access == 'yes'" enctype="multipart/form-data">
                <p class="addForm-text">
                    Додати новий товар
                </p>
                <p class="complete" v-if="this.answer != ''">
                    Товар додано!
                </p>
                <label for="name" class="addForm-label">
                    Ім'я
                </label>
                <input type="text" name="name" class="addForm-input" v-model="this.name" required>
                <label for="price" class="addForm-label">
                    Ціна
                </label>
                <input type="number" name="price" class="addForm-input" v-model="this.price" required>
                <label for="descr" class="addForm-label">
                    Опис
                </label>
                <QuillEditor theme="snow" class="addForm-input" contentType="html" v-model:content="this.descr" required />
                <label for="structure" class="addForm-label">
                    Склад
                </label>
                <QuillEditor theme="snow" class="addForm-input" contentType="html" v-model:content="this.structure" required />
                <label for="used" class="addForm-label">
                    Як використовувати
                </label>
                <QuillEditor theme="snow" class="addForm-input" contentType="html" v-model:content="this.used" required />
                <label for="var" class="addForm-label">
                    В яку катигорію?
                </label>
                <select name="var" id="" class="addForm-input" @change="getMenuList" v-model="this.var" required>
                    <option value="chemical" selected>
                        Побутова хімія
                    </option>
                    <option value="oil">
                        Автомобільні присадки
                    </option>
                </select>
                <label for="subvar" class="addForm-label">
                    В яку під катигорію?
                </label>
                <select name="subvar" id="" class="addForm-input" v-model="this.subcat" required>
                    <option v-for="menu in menuList" :key="menu.subcat" :value="menu.subcat">
                        {{ menu.subcat }}
                    </option>
                </select>
                <label for="top" class="addForm-label">
                    Додати в топ?
                </label>
                <select name="top" id="" class="addForm-input" @change="getMenuList" v-model="this.top" required>
                    <option value="yes" selected>
                        Так
                    </option>
                    <option value="no">
                       Ні
                    </option>
                </select>
                <label for="file" class="addForm-label">
                    Фото товару
                </label>
                <input type="file" ref="file" name="filetoupload" @change="onFileChange()" accept="image/*" required>
                <button class="btn">
                    Додати
                </button>
            </form>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
    components: {
        QuillEditor
    },
    data(){
        return{
            access: '',
            menuList: [],
            name: '',
            price: '',
            descr: '',
            structure: '',
            used: '',
            link: '',
            var: '',
            subcat: '',
            top: '',
            answer: '',
            linkView: ''
        }
    },
    created(){
        this.access = document.cookie;
    },
    methods:{
        async getMenuList(){
            await axios.get('http://localhost:3500/products/menu?var=' + this.var)
            .then(response => {
                this.menuList = response.data.values;
            })
        },
        onFileChange(event) {
           this.link = this.$refs.file.files[0]
           this.linkView = URL.createObjectURL(this.link)
        },
        async addItem(){
            const fd = new FormData()
            fd.append('file', this.link)
            await axios.post('http://localhost:3500/admin/uploadFile', fd)
            .then(response => {
               this.link = response.data.file;
                axios.post('http://localhost:3500/admin/addItem?name=' + this.name + '&price=' + this.price + '&descr=' + this.descr + '&structure=' + this.structure + '&used=' + this.used + '&link=' + this.link + '&var=' + this.var + '&subcat=' + this.subcat + '&top=' + this.top)
                .then(response => {
                    this.answer = response.data;
                    console.log(this.answer)
                })
                this.name = '',
                this.price = '',
                this.descr = '',
                this.structure = '',
                this.used = '',
                this.link = '',
                this.var = '',
                this.subcat = '',
                this.top = ''
            })
            
        }
    }
}
</script>

<style scoped>
    .add{
        padding-bottom: 150px;
    }
    .add-title{
        margin: 30px 0;
    }
    .complete{
        font-weight: 500;
        color: green;
        text-align: center;
        margin-bottom: 10px;
    }
    .addForm{
        background: #fff;
        flex-direction: column;
        display: flex;
        padding: 10px 15px 15px;
        border-radius: 5px;
        filter: drop-shadow(0.726px 2.911px 5px rgba(0,0,0,0.15));
        width: 640px;
    }
    .addForm-text{
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 15px;
    }
    .addForm-input{
        margin-bottom: 19px;
        width: 570px;
        border: 2px solid #b8baf6;
        height: 47px;
    }
    .uploaded{
        position: relative;
    }
    .uploaded-img{
        width: 100%;
    }
    .uploaded-remove{
        position: absolute;
        right: 20px;
        top: 20px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fff;
        text-align: center;
    }
</style>