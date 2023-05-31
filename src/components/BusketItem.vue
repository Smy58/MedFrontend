<template>
    <div class="busket-item">
        <img src="@/assets/logo.png" class="busket-item__img" />
        <h5 class="busket-item__title">{{ item.name ? item.name : 'Title' }}</h5>
        <p class="busket-item__cost">{{ cost ? cost : "Уточнить в Аптеке" }}</p>
        <div class="busket-item__count">
            <div :class=" !isMinusActive ? 'busket-item__minus busket-item__minus_dis' : 'busket-item__minus' " v-on:click="onMinus">-</div>
            <div class="busket-item__number">{{ count }}</div>
            <div :class=" !isPlusActive ? 'busket-item__plus busket-item__plus_dis' : 'busket-item__plus' " v-on:click="onPlus">+</div>
        </div>
        <div class="busket__del" v-on:click="onDel"></div>
    </div>
</template>

<script>
import store from '../store/index'


export default {
    name: 'BusketItem',
    props: {
        item: Object
    },
    data() {
        return {
            count: this.item.count,
            isMinusActive: this.item.count != 1,
            isPlusActive: true
        }
    },
    computed: {
        cost() {
            var newPrice = parseInt(this.item.price.split(' ').join(''));

            if(typeof(newPrice) == 'number') {

                return newPrice * this.count;
            }

            return item.price;
        }
    },
    methods: {
        onDel() {
            var itemToRemove = this.item;
            console.log(itemToRemove);
            store.commit('REMOVE_PRODUCT_FROM_BUSKET', itemToRemove);
        },
        onMinus() {
            console.log('-');
            if(this.count !== 1) {
                this.count--;
            }

            var itemToAdd = this.item;
            var newPrice = parseInt(this.item.price.split(' ').join(''));
            itemToAdd.count = this.count;

            if(typeof(newPrice) == 'number') {
                itemToAdd.totalCost = newPrice * this.count;
                store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
            }else {
                itemToAdd.totalCost = item.price;
                store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
            }
            
            this.setButtonDis();
        },
        onPlus() {
            console.log('+');
            if(this.count !== 50) {
                this.count++;
            }

            var itemToAdd = this.item;
            var newPrice = parseInt(this.item.price.split(' ').join(''));
            itemToAdd.count = this.count;

            if(typeof(newPrice) == 'number') {
                itemToAdd.totalCost = newPrice * this.count;
                store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
            }else {
                itemToAdd.totalCost = item.price;
                store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
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
    }
}
</script>

<style>
    .busket-item {
        width: 100%;
        min-height: 124px;

        background: #FFFFFF;
        border-radius: 24px;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;

        box-sizing: border-box;

        margin-bottom: 12px;
    }

    .busket-item__img {
        width: 100px;
        height: 100px;
        border-radius: 16px;
    }
    
    .busket-item__title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        color: #007ad2;
        width: 165px;
        text-align: left;

        margin-left: 24px;
    }

    .busket-item__cost {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;

        color: #002e4f;

        width: 140px;
        text-align: center;

        margin-left: 10px;
    }

    .busket-item__count {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20px;

    }

    .busket-item__minus,
    .busket-item__plus {
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
        cursor: pointer;
    }

    .busket-item__minus_dis,
    .busket-item__plus_dis {
        opacity: 0.6;
        cursor: default;
    }

    .busket-item__number {
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 14px auto;

        width: 73.53px;
        height: 48px;

        border: 1px solid #004B81;
        border-radius: 12px;

        margin-left: 4px;
        margin-right: 4px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: #66AFE3;
    }

    .busket__del {
        background: url(@/assets/del.png);
        width: 44px;
        height: 44px;

        margin-left: 45px;

        cursor: pointer;
    }

    @media screen and (max-width: 1000px){

        .busket-item {
            width: 100%;
            flex-wrap: wrap;
            position: relative;

            justify-content: space-between;

            row-gap: 10px;
        }

        .busket__del {
            position: absolute;
            top: 16px;
            right: 16px;
            margin: 0;
            width: 7vw;
            height: 7vw;

            background-repeat: no-repeat;
            background-size: contain;
        }

        .busket-item__img {
            width: 25vw;
            height: 25vw;
        }

        .busket-item__title {
            font-size: 4.5vw;
            line-height: 5vw;
            width: 45vw;
            margin: 0;

            margin-right: 7vw;
        }

        .busket-item__cost {
            font-size: 4.5vw;
            line-height: 5vw;
            margin: 0;
        }

        .busket-item__minus, .busket-item__plus {
            width: 6vw;
            height: 6vw;
        }

        .busket-item__number {
            width: 9.21vw;
            height: 6vw;
            font-size: 3.5vw;
        }
    }
</style>