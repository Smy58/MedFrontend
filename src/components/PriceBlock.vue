<template>
    <div class="price-block">
        <h4 class="price-block__title">Категории</h4>

        <div class="price-block__values">
            <div class="price-block__value">
                <p class="price-block__text">от</p>
                <div class="price-block__cost price-block__cost_1">{{ v1 < v2 ? v1 : v2 }} тг</div>
            </div>

            <div class="price-block__value">
                <p class="price-block__text">до</p>
                <div class="price-block__cost price-block__cost_2">{{ v1 < v2 ? v2 : v1 }} тг</div>
            </div>
        </div>

        <section class="price-block__slider">
            <input class="price-block__range" :value="v1" :min="minR" :max="maxR" step="1000" type="range" @input="onChangeRange1">
            <input class="price-block__range" :value="v2" :min="minR" :max="maxR" step="1000" type="range" @input="onChangeRange2">
        </section>

        <div class="price-block__reset" v-on:click="onResetBlock">Сбросить</div>
    </div>
</template>

<script>

export default {
    name: 'PriceBlock',
    props: {
        onChange: Function,
        onReset: Function,
    },
    data() {
        return {
            minR: 0,
            maxR: 20000,
            v1: 200,
            v2: 20000
        }
    },
    methods: {
        onChangeRange1(ev) {
            // console.log(ev.target.value);
            this.v1 = parseInt(ev.target.value);
            console.log(this.v1, ' ! ', this.v2);
            this.onChange(this.v1, this.v2);
            
        },
        onChangeRange2(ev) {
            // console.log(ev.target.value);
            this.v2 = parseInt(ev.target.value);
            console.log(this.v1, ' ! ', this.v2);
            this.onChange(this.v1, this.v2);

        },
        onResetBlock(ev) {
            this.onReset();
            this.v1 = 200;
            this.v2 = 20000;
        }
    }
}
</script>

<style>
    .price-block {
        box-sizing: border-box;

        width: 100%;

        border: 1px solid #D9D9D9;
        border-radius: 18px;

        padding: 24px 12px;

        display: flex;
        flex-direction: column;
        align-items: center;

        background: #F2F8FC;

    }

    .price-block__title {
        width: 95%;
        padding-left: 11px;
        padding-bottom: 10px;
        border-bottom: 0.75px solid #D9D9D9;

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.03em;

        text-align: left;

        color: #004B81;

        margin-bottom: 24px;
    }

    .price-block__reset {
        width: 95%;
        border-top: 0.75px solid #D9D9D9;
        padding-top: 8px;

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height */

        letter-spacing: -0.03em;

        color: #004B81;

        cursor: pointer;
    }

    .price-block__values {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 95%;
    }

    .price-block__value {
        box-sizing: border-box;

        width: 48%;
        height: 48px;

        border: 0.75px solid #66AFE3;
        border-radius: 7.5px;

        position: relative;

        padding-top: 21px;
        padding-left: 19.5px;
    }

    .price-block__text {
        position: absolute;
        width: 11px;
        height: 13px;
        left: 9px;
        top: 8.25px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 9.75px;
        line-height: 130%;

        color: #004B81;
    }

    .price-block__cost {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;

        letter-spacing: 0.45px;

        color: #66AFE3;

        mix-blend-mode: normal;
        opacity: 0.84;

        text-align: left;
    }


    .price-block__slider {
        position: relative;
        width: 95%;
        height: 35px;
        text-align: center;
    }

    .price-block__slider input {
        position: absolute;
        left: 0;
        top: 15px;
        width: 100%;
        outline: none;
        margin: 0;
        padding: 0;
    }

    .price-block__slider input::-webkit-slider-thumb {
        pointer-events: all;
        position: relative;
        z-index: 1;
        outline: 0;
    }

    .price-block__slider input::-moz-range-thumb {
        pointer-events: all;
        position: relative;
        z-index: 10;
        -moz-appearance: none;
        width: 9px;
    }

    .price-block__range {
        -webkit-appearance: none;
        width: calc(100% - (73px));
        height: 3px;
        border-radius: 5px;
        background: #d7dcdf;
        outline: none;
        padding: 0;
        margin: 0;
        background: #004B81;
    }

    .price-block__range::-webkit-slider-thumb {
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #004B81;
        cursor: pointer;

    }
</style>