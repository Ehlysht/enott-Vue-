<template>
  <div class="container">
      <div class="order">
        <h2 class="order-title title">
            Адрес доставки
        </h2>
        <form action="#" class="order-form">
            <label for="lastname" class="order-text">
                Ім'я
            </label>
            <input type="text" name="lastname" class="order-input">
            <label for="firstname" class="order-text">
                Прізвище
            </label>
            <input type="text" name="firstname" class="order-input">
            <label for="delAdress" class="order-text">
                Номер відділення Нової пошти або Адреса доставки
            </label>
            <input type="text" name="delAdress" class="order-input">
            <label for="city" class="order-text">
                Місто
            </label>
            <input type="text" name="city" class="order-input">
            <label for="tel" class="order-text">
                Номер телефону
            </label>
            <input type="tel:" name="tel" class="order-input">
            <label for="option1" class="order-radio">
                <input type="radio" name="option1" class="order-radio-input">
                <img src="@/assets/img/option1.png" alt="option1" class="order-radio-img">
                <p class="order-radio-text">
                    Накладений платіж
                </p>
            </label>
            <label for="option2" class="order-radio">
                <input type="radio" name="option2" class="order-radio-input">
                <img src="@/assets/img/option2.png" alt="option2" class="order-radio-img">
                <p class="order-radio-text">
                    Відправити на карту на карту
                </p>
            </label>
            <div class="order-buttons">
                <router-link tag="button" to="/cart" class="cart-btn order-buttons-back">
                    Назад
                </router-link>
                <button type="submit" class="cart-btn order-buttons-submit">
                    Оформити замовлення
                </button>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>