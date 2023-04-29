<template>
    <div class="order">
        <p class="order__nav">
            <router-link to="/" class="order__link">Главная</router-link> <router-link to="/order" class="order__link">/ Корзина</router-link> <router-link to="/order" class="order__link order__link_active">/ Оформление</router-link>
        </p>
        <div class="order__title">Оформление</div>

        <form class="order__form" v-on:submit.prevent="handleSubmit">
            <div class="order__column">
                <div class="order__part">
                    <p class="order__pos">Контактные данные</p>
                    <input v-model="name" type="text" class="order__input" name="nameInput" placeholder="*Имя">
                    <span class="order__error" v-if="v$.name.required.$invalid">Поле не должно быть пустым</span>
                    <input v-model="phone" type="text" class="order__input" name="phoneInput" placeholder="*Номер телефона">
                    <span class="order__error" v-if="v$.phone.required.$invalid">Поле не должно быть пустым</span>

                </div>
                
                <div class="order__part">
                    <p class="order__pos">Адрес доставки</p>
                    <input v-model="city" type="text" class="order__input" name="cityInput" placeholder="*Город">
                    <span class="order__error" v-if="v$.city.required.$invalid">Поле не должно быть пустым</span>

                    <input v-model="street" type="text" class="order__input" name="streetInput" placeholder="*Улица">
                    <span class="order__error" v-if="v$.street.required.$invalid">Поле не должно быть пустым</span>

                    <div class="order__adress">
                        <input v-model="home" type="text" class="order__input order__input_sm" name="homeInput" placeholder="*Дом">
                        <input v-model="apartment" type="text" class="order__input order__input_med" name="apartmentInput" placeholder="Квартира">
                        <input v-model="floor" type="text" class="order__input order__input_sm" name="floorInput" placeholder="Этаж">
                        
                    </div>
                    <span class="order__error" v-if="v$.home.required.$invalid">Поле дом не должно быть пустым</span>

                    <textarea v-model="subinfo" class="order__area" name="infoInput" id="info-input" cols="30" rows="10" placeholder="Дополнительные сведения для упрощения доставки"></textarea>

                </div>

                <div class="order__part">
                    <p class="order__pos">Способ доставки</p>

                    <input v-model="delivery" value="Самовывоз - бесплатно" type="radio" name="deliveryInput" id="deliveryInput-1" class="order__radio">
                    <label class="order__radio-label" for="deliveryInput-1">
                        Самовывоз - бесплатно
                    </label>


                    <input v-model="delivery" value="В пределах стандартного квадрата - 1500 тг" type="radio" name="deliveryInput" id="deliveryInput-2" class="order__radio">
                    <label class="order__radio-label" for="deliveryInput-2">
                        В пределах стандартного квадрата - 1500 тг<br>
                        (пр. Достык - пр. Аль-Фараби - ул. Мамышулы - пр. Рыскулова)
                    </label>


                    <input v-model="delivery" value="Срочная доставка - 2500 тг" type="radio" name="deliveryInput" id="deliveryInput-3" class="order__radio">
                    <label class="order__radio-label" for="deliveryInput-3">
                        Срочная доставка - 2500 тг
                    </label>


                    <input v-model="delivery" value="Доставка почтой - от 2500 тг" type="radio" name="deliveryInput" id="deliveryInput-4" class="order__radio">
                    <label class="order__radio-label" for="deliveryInput-4">
                        Доставка почтой - от 2500 тг (Расчитывается индивидуально)
                    </label>
                    
                    <span class="order__error" v-if="v$.delivery.required.$invalid">Поле не должно быть пустым</span>


                </div>
                
            </div>

            <div class="order__column order__column_2">
                <div class="order__part">
                    <p class="order__pos">Выберете удобное время</p>
                    <input v-model="date" type="text" name="datiInput" id="datiInput" class="order__date" onfocus="(this.type='date')" placeholder="*Выберите дату">
                    <span class="order__error" v-if="v$.date.required.$invalid">Поле не должно быть пустым</span>


                    <div class="order__time">
                        <input v-model="time" value="14:00 - 17:00" type="radio" name="timeInput" id="timeInput-1" class="order__radio">
                        <label class="order__radio-label" for="timeInput-1">14:00 - 17:00</label>

                        <input v-model="time" value="17:00 - 20:00" type="radio" name="timeInput" id="timeInput-2" class="order__radio">
                        <label class="order__radio-label" for="timeInput-2">17:00 - 20:00</label>

                        <input v-model="time" value="20:00 - 23:00" type="radio" name="timeInput" id="timeInput-3" class="order__radio">
                        <label class="order__radio-label" for="timeInput-3">20:00 - 23:00</label>
                    </div>
                    <span class="order__error" v-if="v$.time.required.$invalid">Поле не должно быть пустым</span>

                    
                </div>

                <div class="order__part">
                    <p class="order__pos">Удобный способ оплаты</p>
                    <select v-model="payment" name="paymentInput" id="paymentInput" class="order__payment" >
                        <option value="" disabled selected class="order__payment-item">Выбрать</option>
                        <option value="Kaspi перевод" class="order__payment-item">Kaspi перевод</option>
                        <option value="Наличными" class="order__payment-item">Наличными</option>
                    </select>

                    <span class="order__error" v-if="v$.payment.required.$invalid">Поле не должно быть пустым</span>

                </div>

                <div class="order-submit">
                    <h4 class="order-submit__title">Ваша корзина:</h4>

                    <p class="order-submit__text">Внимание! Доставка осуществляется при наличии рецепта на рецептурные препараты!</p>

                    <div class="order-submit__item">
                        <p class="order-submit__opt">Всего товаров:</p>
                        <p class="order-submit__val">{{ totalCount }} шт</p>
                    </div>

                    <div class="order-submit__item">
                        <p class="order-submit__opt order-submit__opt_2">Сумма заказа:</p>
                        <p class="order-submit__val order-submit__val_2">{{ totalCost }} тг</p>
                    </div>

                    <button :class=" isValid ? 'order-submit__bt order-submit__bt_dis' : 'order-submit__bt' " type="submit" >Заказать</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    name: 'Order',
    props: {
        setPreloaderUnActive: Function,
        setPreloaderActive: Function
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            name: '',
            phone: '',
            city: '',
            street: '',
            home: '',
            apartment: '',
            floor: '',
            subinfo: '',
            delivery: '',
            date: '',
            time: '',
            payment: '',

        }
    },
    validations () {
        return {
            name: { required }, 
            phone: { required },
            city: { required },
            street: { required },
            home: { required },
            delivery: { required },
            date: { required },
            time: { required },
            payment: { required }
        }
    },
    methods: {
        ...mapActions([
            'GET_BUSKET_FROM_LOCALSTORAGE',
            'POST_ORDER'
        ]),
        handleSubmit() {
            if (this.v$.$invalid) {
                this.v$.$touch()
                return 0;
            }
            var val ='';
            this.BUSKET.forEach((item) => {
                // console.log(item);
                val += 'id: ' +item.id + ' ';
                val += item.name + ' ,cost: ';
                val += item.price + ' * ';
                val += item.count + ' = ';
                val += item.totalCost + '; ';
                

            })
            var res = {
                name: this.name,
                phone: this.phone,
                address: this.city + ' ' + this.street + ' дом ' + this.home + ', кв ' + this.apartment + ', этаж ' + this.floor,
                optional: this.subinfo,
                delivery: this.delivery,
                date: this.date,
                time: this.time,
                payment: this.payment,
                busket: val,
                totalcost: this.totalCost
            }
            // console.log(res);
            this.setPreloaderActive()
            this.POST_ORDER(res)
                .then((ind) => {
                    this.setPreloaderUnActive();

                    this.$router.push( {name: 'confirm', query: { 'orderID': ind }});
                })    

            

        }
    },
    computed: {
        ...mapGetters(['BUSKET']),
        isValid() {
            console.log(this.v$.$invalid);

            if(this.v$.$invalid) {
                return true;
            }

            return false;
        },
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
    mounted() {
        this.GET_BUSKET_FROM_LOCALSTORAGE()
        // console.log(this.BUSKET)
    }
}
</script>

<style>
    .order {
        padding-top: 48px;
        width: 80%;
        margin-bottom: 48px;
    }

    .order__nav {
        text-align: left;
        margin-bottom: 12px;
    }

    .order__link {
        width: 100%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #60603C;

        text-decoration: none;
    }

    .order__link_active {
        color: #000000;
    }

    .order__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 85px;
        /* identical to box height */

        text-transform: uppercase;
        text-align: left;

        color: #004B81;

        margin-bottom: 25px;

    }

    .order__form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .order__column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .order__column_2 {
        width: 35%;
    }

    .order__part {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 24px;

        position: relative;
    }

    .order__pos {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        color: #004B81;
        margin-bottom: 16px;
    }

    .order__input {
        width: 544px;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-radius: 12px;

        padding: 16px 24px;

        box-sizing: border-box;

        margin-bottom: 8px;
    }

    .order__error {
        color: red;
        font-size: 12px;
        margin-top: -5px;
        margin-bottom: 10px;
        margin-left: 25px;
    }

    .order__adress {
        display: flex;
        flex-direction: row;
    }

    .order__adress .order__input {
        margin-right: 8px;
    }

    .order__input_sm {
        width: 89px;
    }

    .order__input_med {
        width: 138px;
    }

    .order__area {
        box-sizing: border-box;

        padding: 16px 24px;

        width: 544px;
        height: 120px;

        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #6A6A6A;

        resize: none;

        margin-bottom: 8px;
    }

    .order__radio-label {
        box-sizing: border-box;

        padding: 11px 12px;

        width: 496px;

        border: 1px solid #004B81;
        border-radius: 10px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;

        color: #6A6A6A;

        position: relative;
        cursor: pointer;

        text-align: left;
        margin-bottom: 12px;
    }

    .order__radio {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
    }

    .order__radio:checked + .order__radio-label {
        background: #004B81;
        color: #FFFFFF;
    }

    .order__date {
        width: 284px;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-radius: 12px;

        padding: 16px 24px;
        box-sizing: border-box;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #6A6A6A;

        margin-bottom: 12px;
        position: relative;
    }

    .order__date::-webkit-calendar-picker-indicator {
        opacity: 1;
        display: block;
        background: url(@/assets/calendar.png) no-repeat;
        width: 36px;
        height: 36px;

        position: absolute;
        right: 0;
        top: 7px;
    }

    .order__time {
        display: flex;
        flex-direction: row;
    }

    .order__time .order__radio-label {
        width: 120px;
        margin-right: 4px;

    }

    .order__payment {
        box-sizing: border-box;

        padding: 8px 16px;

        width: 222px;
        height: 50px;

        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-radius: 12px;

        -webkit-appearance: none;
        -moz-appearance: none;

        margin-bottom: 8px;
    }

    .order-submit {
        width: 100%;

        box-sizing: border-box;

        border: 1px solid #D9D9D9;
        border-radius: 24px;
        padding: 32px 10px;

    }

    .order-submit__title {
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

    .order-submit__text {
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

    .order-submit__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding-left: 11px;
        padding-right: 11px;

        margin-bottom: 4px;
    }

    .order-submit__opt {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #022741;
    }

    .order-submit__val {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #01416e;

    }

    .order-submit__opt_2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }

    .order-submit__val_2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;

        color: #006cb8;
    }

    .order-submit__bt {
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

        border: none;

    }

    .order-submit__bt_dis {
        opacity: 0.6;
        cursor: default;
    }

</style>