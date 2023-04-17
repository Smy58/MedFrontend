<template>
    <footer class="footer">
        <div class="footer__left">
            <div class="footer__logo">LOGO</div>
            <div class="footer__contacts">
                <p class="footer__contact">+7-777-111-22-33</p>
                <p class="footer__contact">mail@gmail.com</p>
            </div>
            <div class="footer__nav">
                <div class="footer__link">Главная</div>
                <div class="footer__link">Каталог</div>
                <div class="footer__link">Политика конфиденциальности</div>
            </div>
        </div>
        <div class="footer__right">
            <div class="footer__social">
                <div class="footer__insta"></div>
                <div class="footer__wa"></div>
            </div>
            <div class="footer__copyright">
                <div class="footer__text">Все права защищены</div>
                <div class="footer__text">2023</div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {

    }
}
</script>

<style>
    .footer {
        width: 100%;
        height: 200px;

        padding: 46px 117px 0 117px;

        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        background: #343423;
        box-shadow: 0px 4px 10px rgba(213, 119, 79, 0.25);
    }

    .footer__left {
        width: 40%;
    }

    .footer__logo {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        text-align: left;

        color: #FFFFFF;

        margin-bottom: 13px;
    }

    .footer__contacts {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        letter-spacing: 0.02em;

        color: #FFFFFF;

        display: flex;
        flex-direction: row;

        text-align: left;

        margin-bottom: 15.5px;
    }

    .footer__contact {
        margin: 0;
        margin-right: 33px;

    }

    .footer__nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 12px;
        column-gap: 24px;
        width: 75%;
    }

    .footer__link {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: #FFFFFF;
    }

    .font__right {
        width: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .footer__social {
        display: flex;
        flex-direction: row;
        gap: 16px;
        margin-top: 36px;
        margin-bottom: 14px;

        justify-content: end;
    }

    .footer__insta {
        background: url('@/assets/Footer/insta-logo.png');
        background-repeat: no-repeat;
        background-size: contain;

        width: 32px;
        height: 32px;
    }

    .footer__wa {
        background: url('@/assets/Footer/wa-logo.png');
        background-repeat: no-repeat;
        background-size: contain;

        width: 32px;
        height: 32px;
    }

    .footer__copyright {
        display: flex;
        flex-direction: column;

        gap: 14px;

    }

    .footer__text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: #FFFFFF;

        text-align: right;
    }
    
</style>