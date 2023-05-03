<template>
    <div class="katalog">
        <div :class="mobileFilter ? 'katalog__dark-bg katalog__dark-bg_active' : 'katalog__dark-bg'" v-on:click="onMobile"></div>

        <p class="katalog__nav">
            <router-link to="/" class="katalog__link">Главная</router-link> <router-link to="/katalog" class="katalog__link katalog__link_active">/ Каталог</router-link>
        </p>
        <div class="katalog__title">Каталог</div>
        
        <div class="katalog__filters">
            <div class="katalog__filter katalog__filter_blue">
                Форма отпуска <div class="katalog__arrow"></div>
            </div>
            <div class="katalog__filter katalog__filter_darkblue">
                По алфавиту <div class="katalog__arrow"></div>
            </div>
            <div class="katalog__filter katalog__filter_darkblue katalog__filter_mobile" v-on:click="onMobile">
                <div class="katalog__filter__img"></div>
            </div>
        </div>

        <div class="katalog__main">
            <div :class="mobileFilter ? 'katalog__column katalog__column_active' : 'katalog__column'">
                <Category :onChange="onChangeCategory" :onReset="onResetCategory"/>
                <PriceBlock :onChange="onChange" :onReset="onReset"/>

            </div>
            <ListBlock :filterCostMin="filterCostMin" :filterCostMax="filterCostMax" :filterCategory="filterCategory" :setPreloaderActive="setPreloaderActive" :setPreloaderUnActive="setPreloaderUnActive"/>

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
        setPreloaderUnActive: Function,
        setPreloaderActive: Function
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
            filterCategory: '',
            mobileFilter: false
        }
    },
    methods: {
        onMobile() {
            this.mobileFilter = !this.mobileFilter;
        },
        onChange(var1, var2) {
            this.filterCostMin = var1;
            this.filterCostMax = var2;
        },
        onChangeCategory(val) {
            console.log(val);
            this.filterCategory = val;
        },
        onReset() {
            this.filterCostMin = 200;
            this.filterCostMax = 200000;
        },
        onResetCategory() {
            this.filterCategory = '';
        }
    }
}
</script>

<style>
    .katalog {
        padding-top: 48px;
        width: 80%;

        margin-bottom: 48px;
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

        color: #004B81;

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

    .katalog__filter_blue {
        width: 211px;
        background: #66AFE3;

    }

    .katalog__filter_darkblue {
        width: 189px;
        background: #004B81;
    }

    .katalog__arrow {
        width: 24px;
        height: 24px;

        background: url('@/assets/Katalog/filter-arrow.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
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
        width: 23%;
        min-width: 280px;
    }

    .katalog__dark-bg {
        position: absolute;
        display: none;
    }

    .katalog__filter_mobile {
        display: none;
        position: absolute;
    }

    @media screen and (max-width: 1200px){
        .katalog {
            width: 90%;
        }
    }

    @media screen and (max-width: 1000px){
        .katalog__column {
            position: absolute;
            left: -300px;
            transform: translateX(-50%);

            z-index: 10;
            transition: left 1s ease;


        }

        .katalog__column_active {
            left: 50%;
        }
        
        .list-block {
            width: 100%;
        }

        .katalog__dark-bg {
            width: 0;
            height: 0;
            opacity: 0;
            transition: opacity 1s ease;
        }

        .katalog__dark-bg_active {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            background: #000;
            opacity: 0.3;
            z-index: 8;
        }

        .katalog__filter_mobile {
            display: flex;
            position: relative;
            width: 40px;
            align-items: center;
            justify-content: center;
            padding: 0;
            cursor: pointer;
        }

        .katalog__filter__img {
            background: url(@/assets/filter-button.png);
            width: 28px;
            height: 28px;

            background-size: contain;
            background-repeat: no-repeat;
        }
    }

    @media screen and (max-width: 600px){
        .katalog__title {
            font-size: 45px;
        }

        .katalog__filters {
            gap: 0;
            justify-content: space-between;
        }
        .katalog__filter {
            font-size: 15px;
            line-height: 19px;
            justify-content: space-around;
            width: 40%;
            padding: 3px 2px;
            gap: 0;
        }

        .katalog__filter_mobile {
            justify-content: center;
            width: 40px;
        }

        .pagination__btn, .pagination__block {
            width: 28px;
            height: 28px;
            border-radius: 9px;

            font-size: 11px;
            line-height: 13px;
        }
    }
</style>