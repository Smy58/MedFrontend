<template>
    <div class="category">
        <h4 class="category__title">Категории</h4>

        <p class="category__item" v-for="item in dataC || []" :key="item.ID">
            {{ item.category }}
        </p>

        <div class="category__reset">Сбросить</div>
    </div>
</template>

<script>
import dataC from '@/assets/category'

export default {
    name: 'Category',
    props: {

    },
    data() {
        return {
            dataC: dataC
        }
    }
}
</script>

<style>
    .category {
        box-sizing: border-box;

        width: 295px;

        border: 1px solid #D9D9D9;
        border-radius: 18px;

        padding: 24px 12px;
    }

    .category__title {
        width: 270px;
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

        color: #60603C;

        margin-bottom: 24px;
    }

    .category__item {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: -0.03em;

        color: #A3AB84;

        text-align: left;

        margin-bottom: 16px;
        margin-left: 12px;

        cursor: pointer;

    }

    .category__reset {
        width: 270px;
        border-top: 0.75px solid #D9D9D9;
        padding-top: 8px;

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height */

        letter-spacing: -0.03em;

        color: #D89F4C;

        cursor: pointer;

    }
</style>