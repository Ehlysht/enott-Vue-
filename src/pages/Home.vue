<template>
    <div class="wrapper-content-home">
        <section class="banners">
            <div class="container">
                <carousel :items-to-show="1" class="banners">
                    <slide v-for="i in 3" :key="i" class="banner">
                        <img src="@/assets/img/banner.png" alt="Banner" class="banner-img">
                    </slide>
                    <template #addons>
                        <pagination />
                        <navigation />
                    </template>
                </carousel>
            </div>
        </section>
        <section class="popular">
            <div class="container">
                <h2 class="popular-title title">
                    Топ продажів
                </h2>
                <top-items/>
            </div>
        </section>
        <section class="astonish">
            <img src="@/assets/img/astonish.png" alt="astonish" class="astonish-img">
            <img src="@/assets/img/spanch.png" alt="spanch" class="astonish-spanch">
            <img src="@/assets/img/bottle.png" alt="bottle" class="astonish-bottle">
            <div class="container">
                <div class="astonish-texts">
                    <h3 class="astonish-title">
                        ASTONISH — один из лучших производителей бытовой химии в Европе!
                    </h3>
                    <p class="astonish-text">
                        Предлагаем высокачественую бытовую химию британского производства, предоставляем сертификаты. Компания производит суперэффективную бытовую химию, результаты использования которой по-настоящему удивляют. Все продукты — концентрированные и многофункциональные.
                    </p>
                    <p class="astonish-text">
                        Ассортимент продукции позволяет выбрать свою концепцию уборки дома: использовать специализированный набор средств для разных задач или пользоваться несколькими мульти-задачными средствами для всех типов поверхностей.
                    </p>
                </div>
                <div class="astonish-benefits">
                    <h3 class="benefits-title subtitle">
                        О преимуществах
                    </h3>
                    <div class="benefits-icons">
                        <div class="benefits-icon">
                            <img src="@/assets/img/icon1.svg" alt="icon1" class="benefits-icon-img">
                            <p class="benefits-icon-text">
                                Экологически чистая
                            </p>
                        </div>
                        <div class="benefits-icon">
                            <img src="@/assets/img/icon2.svg" alt="icon1" class="benefits-icon-img">
                            <p class="benefits-icon-text">
                                После нанесения средств, поверхности остаются безопасными для людей
                            </p>
                        </div>
                        <div class="benefits-icon">
                            <img src="@/assets/img/icon3.svg" alt="icon1" class="benefits-icon-img">
                            <p class="benefits-icon-text">
                                Не требует использования резиновых перчаток
                            </p>
                        </div>
                        <div class="benefits-icon">
                            <img src="@/assets/img/icon4.svg" alt="icon1" class="benefits-icon-img">
                            <p class="benefits-icon-text">
                                Образует защитный слой на обрабатываемой поверхности
                            </p>
                        </div>
                        <div class="benefits-icon">
                            <img src="@/assets/img/icon5.svg" alt="icon1" class="benefits-icon-img">
                            <p class="benefits-icon-text">
                                Антиаллергенная
                            </p>
                        </div>
                        <div class="benefits-icon">
                            <img src="@/assets/img/icon6.svg" alt="icon1" class="benefits-icon-img">
                            <p class="benefits-icon-text">
                                Большинство средств не требуют смывания, а это – экономия времени и воды
                            </p>
                        </div>
                        <div class="benefits-icon">
                            <img src="@/assets/img/icon7.svg" alt="icon1" class="benefits-icon-img">
                            <p class="benefits-icon-text">
                                Реанимирует обрабатываемые поверхности
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="megaforse">
            <div class="container">
                <h2 class="megaforse-title title">
                    Mega Force
                </h2>
                <p class="megaforse-text megaforse-text-top">
                    Мегафорс — присадки для масел, предназначеные для предотвращения износа трущихся поверхностей сопрягающихся пар деталей, а также безразборного восстановления (ремонта) этих деталей, если их рабочие поверхности уже изношены.
                </p>
                <p class="megaforse-text">
                    Среди ресурсных характеристик важнейшее значение имеет износостойкость деталей - сохранение ими размеров, формы и прочностных свойств в ходе эксплуатации. Уникальные российские разработки в области триботехники, не имеющие мировых аналогов, позволяют увеличить ресурс деталей автомобиля и восстановить изношенные в ходе эксплуатации трущиеся поверхности.
                </p>
                <h3 class="megaforse-subtitle subtitle">
                    Присадки MEGA FORCE:
                </h3>
                <div class="megaforse-icons">
                    <div class="megaforse-icon">
                        <img src="@/assets/img/mega-icon1.svg" alt="Icon" class="megaforse-icon-img">
                        <p class="megaforse-icon-text">
                            Снижают трение деталей
                        </p>
                    </div>
                    <div class="megaforse-icon">
                        <img src="@/assets/img/mega-icon2.svg" alt="Icon" class="megaforse-icon-img">
                        <p class="megaforse-icon-text">
                            Снижают потребление топлива на 15%
                        </p>
                    </div>
                    <div class="megaforse-icon">
                        <img src="@/assets/img/mega-icon3.svg" alt="Icon" class="megaforse-icon-img">
                        <p class="megaforse-icon-text">
                            Имеют широкую область применения
                        </p>
                    </div>
                    <div class="megaforse-icon">
                        <img src="@/assets/img/mega-icon4.svg" alt="Icon" class="megaforse-icon-img">
                        <p class="megaforse-icon-text">
                            Средства являются 5-кратными рекордсменами Украины по увеличению производительности личных и промышленых автомобилей
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="range">
            <div class="container">
                <h2 class="range-title title">
                    Різновиди присадок
                </h2>
                <div class="car">
                    <img src="@/assets/img/car.png" alt="" class="car-img">
                    <div class="car-item car-item1">
                        <img src="@/assets/img/carimg1.png" alt="Item" class="car-item-img">
                        <div class="car-item-title">
                            <span class="car-item-icon">
                                /
                            </span>
                            <h4 class="car-item-name">
                                Трансмісія
                            </h4>
                        </div>
                        <p class="car-item-decs">
                            Сприяє усуненню шумів/вібрації Зменшує коефіцієнт тертя до <strong>5%</strong> Полегшує перемикання передач Для обробки механічних КПП, редукторів, кермових механізмів
                        </p>
                        <button class="car-item-btn btn">
                            До товару
                        </button>
                        <div class="line line1">
                            <span class="line-point point-start"></span>
                            <span class="line-point point-end"></span>
                        </div>
                    </div>
                    <div class="car-item car-item2">
                        <img src="@/assets/img/carimg2.png" alt="Item" class="car-item-img">
                        <div class="car-item-title">
                            <span class="car-item-icon">
                                /
                            </span>
                            <h4 class="car-item-name">
                                Паливний насос
                            </h4>
                        </div>
                        <p class="car-item-decs">
                            Подовження терміну експлуатації в <strong> 2-3 рази</strong> на зниження споживання палива до <strong> 5% </strong>скорочення токсичності вихлопів "легкий старт" при температурах нижче <strong>0</strong>
                        </p>
                        <button class="car-item-btn btn">
                            До товару
                        </button>
                        <div class="line line2">
                            <span class="line-point point-start"></span>
                            <span class="line-point point-end"></span>
                        </div>
                    </div>
                    <div class="car-item car-item3">
                        <img src="@/assets/img/carimg3.png" alt="Item" class="car-item-img">
                        <div class="car-item-title">
                            <span class="car-item-icon">
                                /
                            </span>
                            <h4 class="car-item-name">
                                Двигун
                            </h4>
                        </div>
                        <p class="car-item-decs">
                            Усунення зносу під час холодного пуску Регенерація зношених деталей Зниження токсичності вихлопів Економія палива — <strong>8-10%</strong>
                        </p>
                        <button class="car-item-btn btn">
                            До товару
                        </button>
                        <div class="line line3">
                            <span class="line-point point-start"></span>
                            <span class="line-point point-end"></span>
                        </div>
                    </div>
                    <div class="car-item car-item4">
                        <img src="@/assets/img/carimg4.png" alt="Item" class="car-item-img">
                        <div class="car-item-title">
                            <span class="car-item-icon">
                                /
                            </span>
                            <h4 class="car-item-name">
                                Розкоксувач
                            </h4>
                        </div>
                        <p class="car-item-decs">
                            Ефективно справляється із забрудненнями клапанів Підходить для бензинових та дизельних моторів. Відмінно справляється з нагаром та коксом. Помітно покращує роботу каталізатора допалу вихлопних газів.
                        </p>
                        <button class="car-item-btn btn">
                            До товару
                        </button>
                        <div class="line line4">
                            <span class="line-point point-start"></span>
                            <span class="line-point point-end"></span>
                        </div>
                    </div>
                    <div class="car-item car-item5">
                        <img src="@/assets/img/carimg5.png" alt="Item" class="car-item-img">
                        <div class="car-item-title">
                            <span class="car-item-icon">
                                /
                            </span>
                            <h4 class="car-item-name">
                                Гідропідсилювач керма
                            </h4>
                        </div>
                        <p class="car-item-decs">
                           Збільшується термін служби гідравлічної рідини до <strong>2-х</strong> разів Збільшується термін служби ГУР автомобіля в <strong>2-3</strong> рази Відновлює керованість автомобіля Знижує шум та вібрацію
                        </p>
                        <button class="car-item-btn btn">
                            До товару
                        </button>
                        <div class="line line5">
                            <span class="line-point point-start"></span>
                            <span class="line-point point-end"></span>
                        </div>
                    </div>
                    <div class="car-item car-item6">
                        <img src="@/assets/img/carimg6.png" alt="Item" class="car-item-img">
                        <div class="car-item-title">
                            <span class="car-item-icon">
                                /
                            </span>
                            <h4 class="car-item-name">
                                Активатор бензину
                            </h4>
                        </div>
                        <p class="car-item-decs">
                            Цілком сумісний з іншими присадками Здатний очистити всю паливну систему Дозволяє швидко очистити паливну систему від продуктів горіння
                        </p>
                        <button class="car-item-btn btn">
                            До товару
                        </button>
                        <div class="line line6">
                            <span class="line-point point-start"></span>
                            <span class="line-point point-end"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="feedback">
            <div class="container">
                <h2 class="feedback-title title">
                    Відгуки
                </h2>
                <carousel :items-to-show="2.8" class="comments">
                    <slide class="comments-slide">
                        <div class="comments-info">
                            <p class="comments-name">
                                Сергій
                            </p>
                            <p class="comments-goods">
                                Mega Force
                            </p>
                        </div>
                        <p class="comments-desc">
                            Ставився скептично. Але вирішив випробувати і засіб справді допоміг. Залив у масляну систему двигуна мотоцикла BMB r1150r. Після присадки мотор перестав узагалі брати масло, і компресія у лівому циліндрі вирівнялася з правим. Після обробки двигун заводитися став легше, став економічнішим і гріється тепер не так, як раніше. Тож усім раджу.
                        </p>
                        <div class="comments-info">
                            <div class="comments-rate">
                                <img src="@/assets/img/star.svg" alt="Star" v-for="i in 5" :key="i">
                            </div>
                            <div class="comments-data">
                                14-08-2020
                            </div>
                        </div>
                        <img src="@/assets/img/comments__mega.png" alt="Mega Forse" class="comments-img">
                    </slide>
                    <slide class="comments-slide">
                        <div class="comments-info">
                            <p class="comments-name">
                                Катя
                            </p>
                            <p class="comments-goods">
                                Astonish
                            </p>
                        </div>
                        <p class="comments-desc">
                            Я дуже люблю цей засіб. Обробляю їм усі – від підлоги до стільниць. У нього взагалі немає запаху, тому при роботі з ним не задихнешся. Витрачається цілком собі економічно завдяки гарному розпилювачу-він дуже економить засіб. Ціна, звичайно, висока, але у цього засобу вона завжди була така, зате схвалено ес. Я працюю з ним без рукавичок, руки не їсть і не щипає, але може сушити.
                        </p>
                        <div class="comments-info">
                            <div class="comments-rate">
                                <img src="@/assets/img/star.svg" alt="Star" v-for="i in 5" :key="i">
                            </div>
                            <div class="comments-data">
                                23-02-2020
                            </div>
                        </div>
                         <img src="@/assets/img/comments__ast.png" alt="astonish" class="comments-img">
                    </slide>
                    <slide class="comments-slide">
                        <div class="comments-info">
                            <p class="comments-name">
                                Дмитро
                            </p>
                            <p class="comments-goods">
                                Mega Force
                            </p>
                        </div>
                        <p class="comments-desc">
                            Коробка працює набагато тихіше. Робитиму повторну обробку.
                        </p>
                        <div class="comments-info">
                            <div class="comments-rate">
                                <img src="@/assets/img/star.svg" alt="Star" v-for="i in 5" :key="i">
                            </div>
                            <div class="comments-data">
                                23-02-2020
                            </div>
                        </div>
                        <img src="@/assets/img/comments__mega.png" alt="Mega Forse" class="comments-img">
                    </slide>
                    <template #addons>
                        <pagination />
                        <navigation />
                    </template>
                </carousel>
            </div>
        </section>
    </div>    
</template>

<script>
import TopItems from '@/components/Top-Items.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default{
    name: "Home",
    components:{
        TopItems,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
}
</script>

<style scoped>
    
</style>