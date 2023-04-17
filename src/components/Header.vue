<template>
    <header class="header">
        <router-link to="/" class="header__logo">LOGO</router-link>

        <div class="header-katalog">
            <router-link to="/katalog" class="header-katalog__btn">
                <div class="header-katalog__image"></div>
                <div class="header-katalog__text">Каталог</div>
            </router-link>
            <input type="text" name="katalogInput" id="katalogInput" class="header-katalog__input" placeholder="Поиск по каталогу">
        </div>

        <div class="header-busket">
            <div class="header-busket__image"></div>
            <div class="header-busket__text">Корзина</div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {

    }
}
</script>

<style>
    .header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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

        color: #A3AB84;

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
        background: #DDE2C9;
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

        color: #60603C;
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

        background: #DDE2C9;
        border-radius: 12px;

        margin-right: 100px;
        padding-left: 18px;
        padding-right: 18px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        box-sizing: border-box;
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

        color: #60603C;
    }
</style>