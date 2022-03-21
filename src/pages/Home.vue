<template>
    <div class="wrapper-content">
        <section class="banners">
            <div class="container">
                <carousel :items-to-show="1" class="banners">
                    <slide v-for="i in 3" :key="i" class="banner">
                        <img src="@/assets/img/banner.png" alt="Banner">
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
                <top-items/>
            </div>
        </section>
        <section class="astonish">
            <img src="@/assets/img/astonish.png" alt="astonish" class="astonish-img">
            <img src="@/assets/img/spanch.png" alt="spanch" class="astonish-spanch">
            <img src="@/assets/img/bottle.png" alt="bottle" class="astonish-bottle">
            <div class="container">
                <div class="astonish-texts">
                    <h3 class="astonish-title subtitle">
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
                <p class="megaforse-text">
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
            <div class="car">
                <img src="@/assets/img/car.png" alt="" class="car-img">
                <div class="car-endpoint1">*</div>
                <div class="line1"></div>
                <div class="car-item">
                    <img src="@/assets/img/asdf.png" alt="Item" class="car-item-img">
                    <div class="car-item-title">
                        <p class="car-item-icon">
                            /
                        </p>
                        <h4 class="car-item-name">
                            Трансмисия
                        </h4>
                    </div>
                    <p class="car-item-decs">
                        Способствует устранению шумов/вибрации Уменьшает коэффициент трения до 5% Облегчает переключение передач Для обработки механических КПП, редукторов, рулевых механизмов
                    </p>
                    <button class="car-item-btn btn">
                        К товару
                    </button>
                     <div class="car-startpoint1">*</div>
                </div>
            </div>
        </section>
        <section class="feedback">
            <div class="container">
                <carousel :items-to-show="1" class="comments">
                    <slide class="comments-slide">
                        <div class="comments-info">
                            <div class="comments-name">
                                Сергей
                            </div>
                            <div class="comments-goods">
                                Mega Force
                            </div>
                        </div>
                        <div class="comments-desc">
                            Относился скептично. Но решил испробовать и средство действительно помогло. Залил в маслянную систему двигателя мотоцикла BMB r1150r. После присадки мотор перестал вообще брать масло, и компрессия в левом цилиндре выровнялась с правым. После обработки двигатель заводиться стал легче, стал экономичней и грееться теперь не так как раньше. Так что, всем советую.
                        </div>
                        <div class="comments-info">
                            <div class="comments-rate">
                                <img src="@/assets/img/star.svg" alt="Star" v-for="i in 5" :key="i">
                            </div>
                            <div class="comments-data">

                            </div>
                        </div>
                    </slide>
                    <slide class="comments-slide">
                        <div class="comments-info">
                            <div class="comments-name">
                                Сергей
                            </div>
                            <div class="comments-goods">
                                Mega Force
                            </div>
                        </div>
                        <div class="comments-desc">
                            Относился скептично. Но решил испробовать и средство действительно помогло. Залил в маслянную систему двигателя мотоцикла BMB r1150r. После присадки мотор перестал вообще брать масло, и компрессия в левом цилиндре выровнялась с правым. После обработки двигатель заводиться стал легче, стал экономичней и грееться теперь не так как раньше. Так что, всем советую.
                        </div>
                        <div class="comments-info">
                            <div class="comments-rate">
                                <img src="@/assets/img/star.svg" alt="Star" v-for="i in 5" :key="i">
                            </div>
                            <div class="comments-data">

                            </div>
                        </div>
                    </slide>
                    <slide class="comments-slide">
                        <div class="comments-info">
                            <div class="comments-name">
                                Сергей
                            </div>
                            <div class="comments-goods">
                                Mega Force
                            </div>
                        </div>
                        <div class="comments-desc">
                            Относился скептично. Но решил испробовать и средство действительно помогло. Залил в маслянную систему двигателя мотоцикла BMB r1150r. После присадки мотор перестал вообще брать масло, и компрессия в левом цилиндре выровнялась с правым. После обработки двигатель заводиться стал легче, стал экономичней и грееться теперь не так как раньше. Так что, всем советую.
                        </div>
                        <div class="comments-info">
                            <div class="comments-rate">
                                <img src="@/assets/img/star.svg" alt="Star" v-for="i in 5" :key="i">
                            </div>
                            <div class="comments-data">

                            </div>
                        </div>
                    </slide>
                    <slide class="comments-slide">
                        <div class="comments-info">
                            <div class="comments-name">
                                Сергей
                            </div>
                            <div class="comments-goods">
                                Mega Force
                            </div>
                        </div>
                        <div class="comments-desc">
                            Относился скептично. Но решил испробовать и средство действительно помогло. Залил в маслянную систему двигателя мотоцикла BMB r1150r. После присадки мотор перестал вообще брать масло, и компрессия в левом цилиндре выровнялась с правым. После обработки двигатель заводиться стал легче, стал экономичней и грееться теперь не так как раньше. Так что, всем советую.
                        </div>
                        <div class="comments-info">
                            <div class="comments-rate">
                                <img src="@/assets/img/star.svg" alt="Star" v-for="i in 5" :key="i">
                            </div>
                            <div class="comments-data">

                            </div>
                        </div>
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
import TopItems from '@/pages/Top-Items.vue'
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