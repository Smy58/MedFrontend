<template>
    <div class="list">
        <div class="list__item" v-for="item in dataList || []" :key="item.id">
            <ProductItem :item="item" />
        </div>
    </div>
</template>

<script>

import ProductItem from '@/components/ProductItem.vue';

export default {
    name: 'BigList',
    props: {
        dataList: Array,
        newfilterCostMin: Number,
        newfilterCostMax: Number
    },
    computed: {
        filterCostMin() {
            return this.newfilterCostMin
        },
        filterCostMax() {
            return this.newfilterCostMax
        }
    },
    components: {
        ProductItem
    },
    methods: {
        
        filteredArr(arr) {
            // console.log(arr)
            
        }
    }
}
</script>

<style>
    .list {
        width: 100%;
        min-height: 100px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        column-gap: 20px;
        row-gap: 20px;
    }
</style>