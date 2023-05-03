<template>
    <div class="contacts-bg">
        <form class="contacts" v-on:submit.prevent="handleSubmit">
            <h3 class="contacts__title">Связаться с нами</h3>
            <p class="contacts__describe">Если у вас есть вопросы по качеству обслуживания или доставки товаров, то заполите форму ниже и наши менеджеры напишут вам в ближайшее время </p>

            <input class="contacts__input" v-model="name" name="name-input" id="name-input" placeholder="*Имя"/>
            <input class="contacts__input" v-model="phone" name="phone-input" id="phone-input" placeholder="*Номер телефона"/>
            <textarea class="contacts__area" v-model="info" name="message-input" id="message-input" cols="30" rows="10" placeholder="Введите сюда ваш вопрос"></textarea>

            <button class="contacts__submit" type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'Contacts',
    data() {
        return {
            name: '',
            phone: '',
            info: ''
        }
    },
    props: {
        setPreloaderUnActive: Function,
        setPreloaderActive: Function
    },
    methods: {
        ...mapActions([
            'POST_INFO'
        ]),
        handleSubmit() {
            var res = {name: this.name, phone: this.phone, info: this.info};
            console.log(this)
            this.setPreloaderActive()
            this.POST_INFO(res)
                .then((val) => {
                    this.setPreloaderUnActive();
                })
        }
    }
}
</script>

<style>
    .contacts-bg {
        width: 100%;
        height: 736px;

        background: url('@/assets/Contacts/contacts-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        position: relative;

    }

    .contacts {
        box-sizing: border-box;

        position: absolute;
        width: 51%;
        left: 50%;
        top: 50%;

        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-radius: 24px;

        padding: 32px 56px 36px 56px;

        transform: translate(-15%, -50%);

        display: flex;
        flex-direction: column;

    }

    .contacts__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;

        color: #004B81;
        margin: 0;

        text-align: left;

        margin-bottom: 10px;
    }

    .contacts__describe {
        max-width: 574px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.03em;

        color: #66AFE3;

        text-align: left;

        margin-bottom: 20px;
    }

    .contacts__input {
        box-sizing: border-box;

        padding: 16px 24px;

        width: 100%;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */


        color: #6A6A6A;

        margin-bottom: 10px;
    }

    .contacts__area {
        box-sizing: border-box;

        padding: 16px 24px;


        width: 100%;
        height: 150px;

        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */


        color: #6A6A6A;

        margin-bottom: 12px;

        resize: none;

    }

    .contacts__submit {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 14px 96px;

        width: 46%;
        height: 47px;

        background: #004B81;
        box-shadow: 0px 2px 10px rgba(216, 159, 76, 0.2);
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        text-transform: uppercase;

        color: #EEEEEB;

        border: none;

    }

    @media screen and (max-width: 1000px){
        .contacts {
            width: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .contacts__area {
            height: 120px;
        }
        
    }

    @media screen and (max-width: 500px){
        .contacts {
            padding: 10px;
            
        }
        .contacts__title {
            font-size: 30px;
            line-height: 42px;
        }

        .contacts__describe {
            font-size: 14px;
            line-height: 16px;

        }
    }


</style>