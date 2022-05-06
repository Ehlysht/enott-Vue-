<template>
  <div class="wrapper-content">
    <div class="container">
      <div class="delivery">
        <h3 class="delivery-title">
          Оплата
        </h3>
        <div class="delivery-infos">
          <div class="delivery-info">
            <h4 class="delivery-info-title">
              Оплата банківською карткою Visa або MasterCard.
            </h4>
            <p class="delivery-info-text">
              Переказ коштів на картковий рахунок
            </p>
          </div>
          <div class="delivery-info">
            <h4 class="delivery-info-title">
              Оплата готівкою «Нова пошта»
            </h4>
            <p class="delivery-info-text">
              Оплата готівкою при отриманні товару післяплатою в сервісі доставки «Нова пошта»
            </p>
            <p class="delivery-info-text">
              Оплата готівкою при отриманні товару післяплатою в сервісі доставки «Делівері»
            </p>
          </div>
        </div>
        <h3 class="delivery-title">
          Доставка
        </h3>
        <div class="delivery-infos">
          <div class="delivery-info">
            <h4 class="delivery-info-title">
              До відділення «Нова пошта» або «Делівері»
            </h4>
            <p class="delivery-info-text">
             Терміни доставки до відділення «Нова пошта» 1 - 3 дні
            </p>
            <p class="delivery-info-text">
              Вартість доставки в будь-яке відділення майже за тарифами перевізника
            </p>
            <p class="delivery-info-text">
              Після надсилання замовлення ви отримаєте SMS-повідомлення з номером експрес-накладної
            </p>
            <p class="delivery-info-text">
              Уточнити конкретну дату отримання вашого замовлення ви можете на сайті компанії «Нова пошта» або «Делівері»
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
  components: {
    QuillEditor
  },
  data(){
    return{
      textArea: ''
    }
  },
  mounted(){
    if (localStorage.cart){
        this.cartList = JSON.parse(localStorage.cart);
    }
  }
}
</script>
<style>

</style>