<template>
    <div class="product">
        <p class="product__nav">
            <router-link to="/" class="product__link">Главная</router-link> <router-link to="/katalog" class="product__link">/ Каталог </router-link><router-link to="/product" class="product__link product__link_active">/ Аспирин</router-link>
        </p>

        <div class="product__title">{{ product.name }}</div>

        <div class="product__block">
            <div class="product__column">
                <img src="@/assets/logo.png" class="product__image" />
                <div class="product__actions">
                    <div class="product__count">
                        <div :class=" !isMinusActive ? 'product__minus product__minus_dis' : 'product__minus' " v-on:click="onMinus">-</div>
                        <div class="product__number">{{ count }}</div>
                        <div :class=" !isPlusActive ? 'product__plus product__plus_dis' : 'product__plus' " v-on:click="onPlus">+</div>
                    </div>
                    <div class="product__cart-btn" v-on:click="addProduct">В корзину</div>
                </div>
            </div>

            <div class="product__info">
                <p class="product__name" v-if="product.category != null">Категория: <span class="product__desc">{{ product.category }}</span></p>
                <p class="product__name" v-if="product.apteka != null">Аптека: <span class="product__desc">{{ product.apteka }}</span></p>
                <p class="product__name" v-if="product.recepie != null">Форма отпуска: <span class="product__desc">{{ product.recepie }}</span></p>
                <p class="product__name">Цена: <span class="product__desc">{{ product.price ? product.price : "Уточнить в Аптеке" }}</span></p>
                <p class="product__name product__name_l" v-if="product.description">Описание: </p>
                <p class="product__desc" v-if="product.description">{{ product.description }}</p>
            </div>         
        </div>

    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

import store from '../store/index'

export default {
    name: 'Product',
    components: {

    },
    data() {
        return {
            count: 1,
            isMinusActive: false,
            isPlusActive: true
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'GET_POPPRODUCTS_FROM_API',
            'GET_LOWPRODUCTS_FROM_API'
        ]),
        onMinus() {
            console.log('-');
            if(this.count !== 1) {
                this.count--;
            }
            
            this.setButtonDis();
        },
        onPlus() {
            console.log('+');
            if(this.count !== 50) {
                this.count++;
            }

            this.setButtonDis();
            
        },
        setButtonDis() {
            if(this.count === 1) {
                this.isMinusActive = false;
            } else {
                this.isMinusActive = true;
            }
            if(this.count === 50) {
                this.isPlusActive = false;
            } else {
                this.isPlusActive = true;
            }

        },
        addProduct() {
            var itemToAdd = this.product;
            console.log(itemToAdd);
            store.commit('ADD_PRODUCT_TO_BUSKET', itemToAdd);

            this.$router.push( {name: 'katalog'});
        }
    },
    computed: {
        ...mapGetters(['PRODUCTS', 'POPPRODUCTS', 'LOWPRODUCTS']),
        product() {
            let result = {};
            let vm = this;
            // console.log(vm.$route.query.productID);
            // console.log(this.PRODUCTS);
            this.PRODUCTS.map(function (item) {
                // console.log(item.id);
                if (parseInt(item.id) === parseInt(vm.$route.query.productID)) {
                    result = item;
                }
            });
            this.POPPRODUCTS.map(function (item) {
                // console.log(item.id);
                if (parseInt(item.id) === parseInt(vm.$route.query.productID)) {
                    result = item;
                }
            });
            this.LOWPRODUCTS.map(function (item) {
                // console.log(item.id);
                if (parseInt(item.id) === parseInt(vm.$route.query.productID)) {
                    result = item;
                }
            })
            // console.log(result);
            // console.log(result.apteka != null);
            result.count = this.count;
            if (result.price && typeof(parseInt(result.price.split(' ').join(''))) == 'number') {
                result.totalCost = this.count * parseInt(result.price.split(' ').join(''));

            }else {
                result.totalCost = result.price;
            }

            console.log(result);
            
            return result;
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API();
        this.GET_POPPRODUCTS_FROM_API();
        this.GET_LOWPRODUCTS_FROM_API();
    }
}
</script>

<style>
    .product {
        padding-top: 48px;
        width: 80%;

        margin-bottom: 48px;
    }

    .product__nav {
        text-align: left;
        margin-bottom: 12px;
    }

    .product__link {
        width: 100%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #60603C;

        text-decoration: none;
    }

    .product__link_active {
        color: #000000;
    }

    .product__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 85px;
        /* identical to box height */

        text-transform: uppercase;
        text-align: left;

        margin-bottom: 25px;

        color: #004B81;

    }

    .product__block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .product__column {
        display: flex;
        flex-direction: column;
    }

    .product__image {
        box-sizing: border-box;
        width: 400px;
        height: 400px;

        background: #fff;

        padding: 50px;

        border-radius: 12px;

        margin-bottom: 24px;
    }

    .product__actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .product__count {
        display: flex;
        flex-direction: row;
        width: 178px;
        justify-content: space-between;
    }

    .product__minus, .product__plus {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 48px;
        height: 48px;

        background: #004B81;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: #EEEEEB;

        box-sizing: border-box;

        cursor: pointer;
    }

    .product__minus_dis, .product__plus_dis {
        background: #004b81a2;
        cursor: default;

    }

    .product__number {
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;

        width: 73.53px;
        height: 48px;

        border: 1px solid #004B81;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: #66AFE3;
    }

    .product__cart-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 210px;
        height: 48px;

        background: #004B81;
        box-shadow: 0px 2px 10px rgba(216, 159, 76, 0.2);
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        text-transform: uppercase;

        color: #EEEEEB;

        cursor: pointer;
    }

    .product__info {
        width: 694px;
        height: 100%;

        background: #FFFFFF;
        border-radius: 12px;

        padding: 24px 32px;
    }

    .product__name {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #256695;

        text-align: left;

        margin-bottom: 12px;
    }

    .product__name_l {
        margin-top: 24px;
    }

    .product__desc {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #8CA4B6;

        text-align: left;
    }
</style>