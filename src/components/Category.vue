<template>
    <div class="category">
        <h4 class="category__title">Категории</h4>

        <p class="category__item" v-for="item in dataC || []" :key="item.ID" v-on:click="onClick">
            {{ item.category }}
        </p>

        <div class="category__reset" v-on:click="onClickReset">Сбросить</div>
    </div>
</template>

<script>
import dataC from '@/assets/category'

export default {
    name: 'Category',
    props: {
        onChange: Function,
        onReset: Function,
    },
    data() {
        return {
            dataC: dataC
        }
    },
    methods: {
        onClick(ev) {
            // console.log(this)
            this.onChange(ev.target.textContent);
        },
        onClickReset(ev){
            this.onReset();
        }
    }
}
</script>

<style>
    .category {
        box-sizing: border-box;

        width: 100%;

        border: 1px solid #D9D9D9;
        border-radius: 18px;

        padding: 24px 12px;

        margin-bottom: 12px;

        background: #F2F8FC;
    }

    .category__title {
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

    .category__item {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: -0.03em;

        color: #66AFE3;

        text-align: left;

        margin-bottom: 16px;
        margin-left: 12px;

        cursor: pointer;

    }

    .category__reset {
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
</style>