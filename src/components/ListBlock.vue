<template>
    <div class="list-block">
        <BigList :dataList="PRODUCTS" :newfilterCostMin="newfilterCostMin" :newfilterCostMax="newfilterCostMax"/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

import BigList from '@/components/BigList.vue';


export default {
    name: 'ListBlock',
    props: {
        filterCostMin: Number,
        filterCostMax: Number
    },
    components: {
        BigList
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['PRODUCTS']),
        newfilterCostMin() {
            console.log(this.filterCostMin, ' !!!!')
            return this.filterCostMin
        },
        newfilterCostMax() {
            return this.filterCostMax
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style>
    .list-block {
        width: 80%;
        margin-top: 10px;
    }

    .list-block__title {
        text-align: left;
        font-size: 32px;
    }
</style>