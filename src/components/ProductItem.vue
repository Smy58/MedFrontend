<template>
    <div class="product-item" >
        <img src="@/assets/logo.png" class="product-item__img" />
        <h5 class="product-item__title">{{ item.name ? item.name : 'Title' }}</h5>

        <p class="product-item__cost">{{ item.price ? item.price : "Уточнить в Аптеке" }}</p>

        <button class="product-item__btn" v-on:click="productClick">В корзину</button>
    </div>    
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: 'ProductItem',
    props: {
        item: Object
    },
    methods: {
        productClick() {
            console.log(this.item);
            this.$router.push( {name: 'product', query: { 'productID': this.item.id }});
        }
    },
    mounted() {
        // console.log(this.item)
    }
}
</script>

<style>
    .product-item {
        background: #FFFFFF;
        border-radius: 12px;

        width: 295px;

        padding: 12px 19px 24px 19px;
        box-sizing: border-box;

        filter: drop-shadow(0px 2px 10px #D3D6CB);
        position: relative;
    }

    .product-item__img {
        width: 200px;
        height: 200px;
    }

    .product-item__title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-transform: capitalize;

        color: #D89F4C;
        text-align: left;

        margin: 4px 0 12px 5px;
    }

    .product-item__cost {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: left;

        margin: 0 0 17px 5px;
        color: #9E7937;
    }

    .product-item__btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 14px 76px;

        width: 256px;
        height: 47px;

        background: #60603C;
        border: none;
        box-sizing: border-box;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        text-transform: uppercase;

        color: #EEEEEB;

    }
</style>