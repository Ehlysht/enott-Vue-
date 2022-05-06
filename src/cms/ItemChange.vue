<template>
<div class="wrapper-content">
    <div class="container">
        <div class="changeItem" v-if="this.access == 'yes'">
            <form v-for="item in items" :key="item.name" action="#" class="addForm" @submit.prevent="addItem()" enctype="multipart/form-data">
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
                <label for="top" class="addForm-label">
                    Додати в топ?
                </label>
                <select name="top" id="" class="addForm-input" @change="getMenuList" v-model="this.top" required>
                    <option value="no" selected>
                        Ні
                    </option>
                    <option value="yes">
                        Так
                    </option>
                </select>
                <label for="file" class="addForm-label">
                    Фото товару
                </label>
                <div class="change-img" v-if='!this.changeImg'>
                    <img :src="this.link" :alt="this.name" class="uploaded-img">
                    <button class="btn" @click.prevent="this.changeImg = true">
                        Змінити Фото?
                    </button>
                </div>
                <input type="file" ref="file" name="filetoupload" v-if='this.changeImg' @change.prevent="onFileChange()" accept="image/*" required>

                <button class="btn">
                    Змінити
                </button>
            </form>
        </div>
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
    data() {
        return{
            id: this.$route.params['id'],
            items: [],
            menuList: [],
            access: document.cookie,
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
            changeImg: false,
            itemImg: ''
        }
    },
    mounted(){
        this.axios.get('http://localhost:3500/products/item?id=' + this.id)
        .then(response => {
            this.items = response.data.values;
            this.name = this.items[0].name;
            this.price = this.items[0].price;
            this.descr = this.items[0].descr;
            this.structure = this.items[0].structure;
            this.used = this.items[0].used;
            this.link = require('@/assets/img/' + this.items[0].link)
            this.top = this.items[0].top;
            this.itemImg = this.items[0].link;
        })
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

        },
        async addItem(){
            if(this.changeImg){
                await axios.post('http://localhost:3500/admin/delete?image=' + this.itemImg)
                const fd = new FormData()
                fd.append('file', this.link)
                await axios.post('http://localhost:3500/admin/uploadFile', fd)
                .then(response => {
                    this.itemImg = response.data.file;
                })
            }
            axios.post('http://localhost:3500/admin/changeItem?name=' + this.name + '&price=' + this.price + '&descr=' + this.descr + '&structure=' + this.structure + '&used=' + this.used + '&link=' + this.itemImg + '&top=' + this.top + '&id=' + this.id)
            .then(response => {
                this.answer = response.data;
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
        width: 100%;
    }
    .addForm-text{
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 15px;
    }
    .addForm-input{
        margin-bottom: 19px;
        border: 2px solid #b8baf6;
        height: 47px;
    }
    .uploaded{
        position: relative;
    }
    .uploaded-img{
        width: 200px;
    }
    .change-img{
        display: flex;
        align-items: center;
    }
</style>