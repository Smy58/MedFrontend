<template>
    <div class="top-products">
        <h3 class="top-products__title">{{ titleTopProducts }}</h3>
        <BigList :dataList="dataF" :isPagination="false"/>

    </div>
</template>

<script>
import BigList from '@/components/BigList.vue';

export default {
    name: 'TopProducts',
    props: {
        titleTopProducts: String,
        dataF: Array,
    },
    components: {
        BigList
    },
    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this.dataF);
    }
}
</script>

<style>
    .top-products {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 80%;
        margin-bottom: 24px;
    }

    .top-products__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;

        margin-top: 48px;
        margin-bottom: 31px;

        color: #004B81;
    }
</style>