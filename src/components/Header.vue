<template>
    <header :class="isHome ? 'header header_home' : 'header'">
        <router-link to="/" class="header__logo">LOGO</router-link>

        <div class="header-katalog">
            <router-link to="/katalog" class="header-katalog__btn">
                <div class="header-katalog__image"></div>
                <div class="header-katalog__text">Каталог</div>
            </router-link>
            <input type="text" name="katalogInput" id="katalogInput" class="header-katalog__input" placeholder="Поиск по каталогу">
        </div>

        <router-link to="/busket" class="header-busket">
            <div class="header-busket__image"></div>
            <div class="header-busket__text">Корзина</div>
            <div class="header-busket__count" v-if=" BUSKET && BUSKET.length != 0">{{ BUSKET.length }}</div>
        </router-link>
    </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'Header',
    props: {
        isHome: Boolean
    },
    computed: {
        ...mapGetters(['BUSKET'])

    },
    methods: {
        ...mapActions([
            'GET_BUSKET_FROM_LOCALSTORAGE'
        ])
    },
    mounted() {
        this.GET_BUSKET_FROM_LOCALSTORAGE()
        // console.log(this.BUSKET)
    }
}
</script>

<style>
    .header {
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background: #004B81;
        position: relative;
    }

    .header_home {
        position: absolute;
        background: transparent;
    }

    .links {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 3%;
    }

    .links__item {
        margin-right: 20px;
    }

    .header__logo {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        color: #fff;

        margin-left: 116px;
        text-decoration: none;

    }

    .header-katalog {
        display: flex;
        flex-direction: row;
    }

    .header-katalog__btn {
        width: 140px;
        height: 48px;
        background: #D8F5FF;
        border-radius: 16px 0px 0px 16px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header-katalog__image {
        width: 32px;
        height: 32px;
        margin-left: 14px;

        background:  url('@/assets/Header/katalog-btn.png');

        background-size: contain;
    }

    .header-katalog__text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        margin-right: 21px;

        color: #004B81;
    }

    .header-katalog__input {
        width: 359px;
        height: 48px;

        background: #FFFFFF;
        border: none;
        box-sizing: border-box;
        border-radius: 0px 16px 16px 0px;

        padding-left: 24px;
    }

    .header-busket {
        width: 140px;
        height: 48px;

        background: #D8F5FF;
        border-radius: 12px;

        margin-right: 100px;
        padding-left: 18px;
        padding-right: 18px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        box-sizing: border-box;

        position: relative;
    }

    .header-busket__image {
        width: 24px;
        height: 24px;

        background: url('@/assets/Header/header-busket.png');

        background-size: contain;
    }

    .header-busket__text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-decoration: none;

        color: #004B81;
    }

    .header-busket__count {
        position: absolute;
        top: -11px;
        right: -11px;
        width: 30px;
        height: 30px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #434A54;

        background: #F2F8FC;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
    }

</style>