<template>
    <div class="busket">
        <p class="busket__nav">
            <router-link to="/" class="busket__link">Главная</router-link> <router-link to="/busket" class="busket__link busket__link_active">/ Корзина</router-link>
        </p>
        <div class="busket__title">Корзина</div>

        <div class="busket__row">
            <div class="busket__list" v-if="BUSKET.length > 0" >
                <div class="list__item" v-for="item in BUSKET || []" :key="item.id">
                    <BusketItem :item="item"/>
                </div>
            </div>
            <div class="busket__empty" v-if="BUSKET.length <= 0">
                <div class="busket__empty-img"></div>
                <p class="busket__empty-text">В вашей корзине пусто</p>

            </div>

            <div class="busket-submit">
                <h4 class="busket-submit__title">Ваша корзина:</h4>

                <p class="busket-submit__text">Внимание! Доставка осуществляется при наличии рецепта на рецептурные препараты!</p>

                <div class="busket-submit__item">
                    <p class="busket-submit__opt">Всего товаров:</p>
                    <p class="busket-submit__val">{{ totalCount }} шт</p>
                </div>

                <div class="busket-submit__item">
                    <p class="busket-submit__opt busket-submit__opt_2">Сумма заказа:</p>
                    <p class="busket-submit__val busket-submit__val_2">{{ totalCost }} тг</p>
                </div>

                <div :class=" BUSKET.length == 0 ? 'busket-submit__bt busket-submit__bt_dis' : 'busket-submit__bt' " v-on:click="onSubmit" >Заказать</div>
            </div>
        </div>
            
    </div>
</template>

<script>
import BusketItem from '@/components/BusketItem.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'Busket',
    components: {
        BusketItem
    },
    props: {
        setPreloaderUnActive: Function,
        setPreloaderActive: Function
    },
    computed: {
        ...mapGetters(['BUSKET']),
        totalCost() {
            var sum = 0;
            this.BUSKET.forEach((item) => {
                var cos = parseInt(item.price.split(' ').join(''));

                if (typeof(cos) == 'number') {
                    sum += (cos * item.count);
                }
            });

            return sum;
            
        },
        totalCount() {
            var sumCount = 0;
            this.BUSKET.forEach((item) => {

                sumCount += item.count;

            });

            return sumCount;
        }
    },
    methods: {
        ...mapActions([
            'GET_BUSKET_FROM_LOCALSTORAGE'
        ]),
        onSubmit() {
            if( this.BUSKET.length > 0 ){
                this.$router.push( {name: 'order'});
            }
        }
    },
    mounted() {
        this.setPreloaderActive()
        this.GET_BUSKET_FROM_LOCALSTORAGE()
            .then((res) => {
                this.setPreloaderUnActive()
            })
        // console.log(this.BUSKET)
    }
}
</script>

<style>
    .busket {
        padding-top: 48px;
        width: 80%;

        margin-bottom: 48px;
    }

    .busket__nav {
        text-align: left;
        margin-bottom: 12px;
    }

    .busket__link {
        width: 100%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #60603C;

        text-decoration: none;
    }

    .busket__link_active {
        color: #000000;
    }

    .busket__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 85px;
        /* identical to box height */

        text-transform: uppercase;
        text-align: left;

        color: #004B81;

    }

    .busket__list {
        width: 67%;
    }

    .busket__empty {
        box-sizing: border-box;

        width: 67%;
        height: 360px;

        border: 1px solid #D9D9D9;
        border-radius: 24px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .busket__empty-img {
        width: 113px;
        height: 106px;

        background: url('@/assets/empty-cart.png');
    }

    .busket__empty-text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;

        color: #A3AB84;

        margin: 0;
        margin-top: 12px;
    }

    .busket__row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .busket-submit {
        width: 30%;

        box-sizing: border-box;

        border: 1px solid #D9D9D9;
        border-radius: 24px;
        padding: 32px 10px;

    }

    .busket-submit__title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        color: #004B81;
        padding: 0 11px 11px 11px;
        text-align: left;

        border-bottom: 1px solid #D9D9D9;
        
    }

    .busket-submit__text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #890000;
        text-align: left;
        margin: 0;
        padding: 12px 7px;
        margin-bottom: 12px;
    }

    .busket-submit__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding-left: 11px;
        padding-right: 11px;

        margin-bottom: 4px;
    }

    .busket-submit__opt {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #022741;
    }

    .busket-submit__val {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #01416e;

    }

    .busket-submit__opt_2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }

    .busket-submit__val_2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;

        color: #006cb8;
    }

    .busket-submit__bt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 14px;
        padding-bottom: 14px;

        width: 292px;
        height: 51px;

        background: #004B81;
        box-shadow: 0px 2px 10px rgba(216, 159, 76, 0.2);
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;

        color: #EEEEEB;

        box-sizing: border-box;

        margin: 28px auto 0 auto;

        cursor: pointer;
    }

    .busket-submit__bt_dis {
        opacity: 0.6;
        cursor: default;
    }

</style>