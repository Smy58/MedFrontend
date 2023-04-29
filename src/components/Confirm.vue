<template>
    <div class="confirm">
        <div class="confirm__img"></div>
        <h3 class="confirm__title">Ваш заказ #{{order}} принят</h3>
        <p class="confirm__text">Ожидайте звонка от курьера</p>
        <div class="confirm__line"></div>
        <router-link to="/" class="confirm__link">На главную</router-link>
    </div>
</template>

<script>
export default {
    name: 'Confirm',
    data() {
        return {

        }
    },
    computed: {
        order() {
            let vm = this;
            return vm.$route.query.orderID
        }
    }
}
</script>

<style>
    .confirm {
        box-sizing: border-box;

        width: 80%;
        height: 547px;

        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 24px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 48px;
        margin-bottom: 48px;
    }

    .confirm__img {
        width: 200px;
        height: 200px;

        background: url(@/assets/truck.png);

        margin-bottom: -35px;
    }

    .confirm__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 85px;

        color: #004B81;

        margin: 0;

        margin-bottom: 9px;
    }

    .confirm__text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;

        color: #62A4CB;

        margin-bottom: 32px;
    }

    .confirm__line {
        width: 355.98px;
        border-bottom: 1px solid #D9D9D9;

        margin-bottom: 12px;
    }

    .confirm__link {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: -0.03em;

        color: #62A4CB;

    }
</style>