<template>
    <div class="katalog">
        <p class="katalog__nav">
            <router-link to="/" class="katalog__link">Главная</router-link> <router-link to="/katalog" class="katalog__link katalog__link_active">/ Каталог</router-link>
        </p>
        <div class="katalog__title">Каталог</div>
        
        <div class="katalog__filters">
            <div class="katalog__filter katalog__filter_grey">
                Форма отпуска <div class="katalog__arrow"></div>
            </div>
            <div class="katalog__filter katalog__filter_orange">
                По алфавиту <div class="katalog__arrow"></div>
            </div>
        </div>

        <div class="katalog__main">
            <div class="katalog__column">
                <Category />
                <PriceBlock :onChange="onChange"/>

            </div>
            <ListBlock :filterCostMin="filterCostMin" :filterCostMax="filterCostMax"/>

        </div>
    </div>
</template>

<script>
import Category from '@/components/Category.vue'
import ListBlock from '@/components/ListBlock.vue'
import PriceBlock from '@/components/PriceBlock.vue'

export default {
    name: 'Katalog',
    props: {

    },
    components: {
        Category,
        ListBlock,
        PriceBlock
    },
    data() {
        return {
            filterCostMin: 200,
            filterCostMax: 200000,
        }
    },
    methods: {
        onChange(var1, var2) {
            this.filterCostMin = var1;
            this.filterCostMax = var2;
        }
    }
}
</script>

<style>
    .katalog {
        padding-top: 48px;
        width: 80%;
    }

    .katalog__nav {
        text-align: left;
        margin-bottom: 12px;
    }

    .katalog__link {
        width: 100%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #60603C;

        text-decoration: none;
    }

    .katalog__link_active {
        color: #000000;
    }

    .katalog__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 85px;
        /* identical to box height */

        text-transform: uppercase;
        text-align: left;

        color: #D89F4C;

    }

    .katalog__filters {
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 20px;

        margin-bottom: 72px;
    }

    .katalog__filter {
        box-sizing: border-box;
        height: 40px;
        width: 100px;
        border-radius: 12px;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        gap: 12px;


        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #F5F5F5;
    }

    .katalog__filter_grey {
        width: 211px;
        background: #A3AB84;

    }

    .katalog__filter_orange {
        width: 189px;
        background: #D89F4C;
    }

    .katalog__arrow {
        width: 24px;
        height: 24px;

        background: url('@/assets/Katalog/filter-arrow.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .katalog__main {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        justify-content: space-between;

    }

    .katalog__column {
        display: flex;
        flex-direction: column;
    }
</style>