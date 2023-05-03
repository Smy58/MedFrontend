<template>
    <div class="info-bg">
        <div class="info">
            <h3 class="info__title">Онлайн-аптека</h3>
            <p class="info__describe">Мы предоставляем широкий ассортимент продукции, включая  витамины, диетические добавки, медицинские изделия, косметику и другие товары, связанные с здоровьем.</p>
            <router-link to="/katalog" class="info__btn">К покупкам</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    props: {

    }
}
</script>

<style>
    .info-bg {
        width: 100%;
        height: 767px;

        background: url('@/assets/Info/Drag-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

    }

    .info {
        position: absolute;
        top: 233px;
        left: 50%;
        transform: translate(-65%, 0);
    }

    .info__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 85px;

        text-transform: uppercase;

        color: #FFFFFF;

        margin: 0;
        margin-bottom: 25px;

        text-align: left;
    }

    .info__describe {
        width: 672px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        color: #EEEEEB;
        margin-bottom: 32px;

        text-align: left;
    }

    .info__btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        width: 296px;
        height: 47px;

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

        border: none;

        cursor: pointer;
    }

    @media screen and (max-width: 1000px){
        .info {
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
            position: relative;

            width: 75%;
        }

        .info__title {
            font-size: 40px;
            line-height: 45px;
            margin-bottom: 17px;
        }

        .info__describe {
            width: 100%;
            font-size: 18px;
            line-height: 23px;
            margin-bottom: 30px;
        }

        .info__btn {
            width: 40%;
            font-size: 14px;
            line-height: 16px;
            min-width: 180px;
        }
    }
</style>