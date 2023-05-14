<template>
    <header :class="isHome ? 'header header_home' : 'header'">
        <div class="header__mobile">
            <router-link to="/" :class="isHome ? 'header__logo' : 'header__logo header__logo_wh'">
            </router-link>

            <router-link to="/busket" class="header-busket">
                <div class="header-busket__image"></div>
                <div class="header-busket__text">Корзина</div>
                <div class="header-busket__count" v-if=" BUSKET && BUSKET.length != 0">{{ BUSKET.length }}</div>
            </router-link>
        </div>
        <div class="header__desktop">
            <router-link to="/" :class="isHome ? 'header__logo header__logo_desktop' : 'header__logo header__logo_wh header__logo_desktop'">
            </router-link>

            <div class="header-katalog">
                <router-link to="/katalog" class="header-katalog__btn" v-on:click="handleKatalog">
                    <div class="header-katalog__image"></div>
                    <div class="header-katalog__text">Каталог</div>
                </router-link>
                <input type="text" v-model="searchInput" v-on:keyup.enter="handleEnter" name="katalogInput" id="katalogInput" class="header-katalog__input" placeholder="Поиск по каталогу">
            </div>

            <router-link to="/busket" class="header-busket header-busket_desktop">
                <div class="header-busket__image"></div>
                <div class="header-busket__text">Корзина</div>
                <div class="header-busket__count" v-if=" BUSKET && BUSKET.length != 0">{{ BUSKET.length }}</div>
            </router-link>
        </div>
        
    </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'Header',
    props: {
        isHome: Boolean
    },
    data() {
        return {
            searchInput: '',
        }
    },
    computed: {
        ...mapGetters(['BUSKET'])

    },
    methods: {
        ...mapActions([
            'GET_BUSKET_FROM_LOCALSTORAGE',
            'GET_SEARCH_PRODUCTS',
            'GET_PRODUCTS_FROM_API'
        ]),
        handleEnter(ev) {
            // console.log(this.searchInput)
            this.GET_SEARCH_PRODUCTS(this.searchInput);
            this.$router.push( {name: 'katalog', query: { 'search': this.searchInput }});
        }, 
        handleKatalog(ev) {
            this.GET_PRODUCTS_FROM_API();
        }
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

        display: flex;
        flex-direction: column;
        align-items: center;

        background: #004B81;
        position: relative;

        z-index: 10;
    }

    .header__desktop {
        height: 100px;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        position: relative;

        z-index: 10;
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

        text-decoration: none;

        background: url(@/assets/logo1.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        width: 60px;
        height: 60px;

    }

    .header__logo_wh {
        background: url(@/assets/logo2.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
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
        background-repeat: no-repeat;
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
        background-repeat: no-repeat;
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

    .header__mobile {
        display: none;
    }

    @media screen and (max-width: 1000px){
        .header {
            padding-top: 16px;
        }

        .header__mobile {
            display: flex;
            width: 80%;
            align-items: center;
            justify-content: space-between;
        }

        .header__desktop {
            width: 80%;
            height: 70px;

        }

        .header__logo_desktop {
            display: none;
        }

        .header-busket_desktop {
            display: none;
        }

        .header-busket {
            width: 120px;
            height: 40px;
        }

        .header-busket__image {
            width: 20px;
            height: 20px;
        }

        .header-busket__text {
            font-size: 15px;
            line-height: 17px;
        }

        .header-busket__count {
            width: 25px;
            height: 25px;
            font-size: 11px;
            line-height: 14px;
        }

        .header-katalog {
            width: 100%;
        }

        .header-katalog__btn {
            width: 140px;
        }

        .header-katalog__input {
            width: calc(100% - 140px);
        }
    }

    @media screen and (max-width: 500px){
        .header__mobile {
            width: 90%;
        }

        .header__desktop {
            width: 90%;

        }

        .header-katalog__btn {
            width: 90px;
            height: 40px;
        }

        .header-katalog__text {
            font-size: 12px;
            line-height: 14px;
            margin-right: 10px;
        }

        .header-katalog__image {
            width: 18px;
            height: 18px;
        }
        
        .header-katalog__input {
            width: calc(100% - 90px);
            height: 40px;

            font-size: 14px;

        }
    }
</style>