<template>
    <div class="big-list">
        <div class="list">
            <div class="list__item" v-for="item in pageData || []" :key="item.id">
                <ProductItem :item="item" />
            </div>
        </div>
        <div class="list__empty" v-if="filtredData.length == 0">
            <div class="list__empty-img"></div>
            <p class="list__empty-text">По вашему запросу не найдено товаров</p>
        </div>
        <div class="pagination" v-if="isPagination && filtredData.length != 0">
            <div v-on:click="onPageOne" class="pagination__btn" v-if="currentPage != 1 && currentPage != 2">1</div>
            <div class="pagination__block" v-if="currentPage != 1 && currentPage != 2 && currentPage != 3">...</div>
            <div v-on:click="onPageMinusOne" class="pagination__btn" v-if="currentPage != 1">{{currentPage - 1}}</div>
            <div class="pagination__btn pagination__btn_active">{{currentPage}}</div>
            <div v-on:click="onPagePlusOne" class="pagination__btn" v-if="currentPage != lastPage">{{currentPage + 1}}</div>
            <div v-on:click="onPagePlusTwo" class="pagination__btn" v-if="currentPage != (lastPage - 1) && currentPage != lastPage">{{currentPage + 2}}</div>
            <div class="pagination__block" v-if="currentPage != (lastPage - 3) && currentPage != (lastPage - 2) && currentPage != (lastPage - 1) && currentPage != lastPage">...</div>
            <div v-on:click="onPageLast" class="pagination__btn" v-if="currentPage != (lastPage - 2) && currentPage != (lastPage - 1) && currentPage != lastPage">{{lastPage}}</div>

        </div>
    </div>
    
</template>

<script>

import ProductItem from '@/components/ProductItem.vue';

export default {
    name: 'BigList',
    data() {
        return {
            currentPage: 1
        }
    },
    props: {
        dataList: Array,
        newfilterCostMin: Number,
        newfilterCostMax: Number,
        newfilterCategory: String,
        isPagination: Boolean
    },
    computed: {
        filterCostMin() {
            return this.newfilterCostMin
        },
        filterCostMax() {
            return this.newfilterCostMax
        },
        filterCategory() {
            return this.newfilterCategory
        },
        filtredData() {
            var newArray = [];
            this.currentPage = 1;

            if(this.isPagination) {
                var lowP = this.filterCostMin < this.filterCostMax ? this.filterCostMin : this.filterCostMax;
                var uppP = this.filterCostMin > this.filterCostMax ? this.filterCostMin : this.filterCostMax;

                var isFilterCategory = false;
                var str = this.filterCategory;

                if (this.filterCategory.length > 0) {
                    isFilterCategory = true;
                }

                this.dataList.forEach((item) => {
                    // console.log(item);
                    if (item.price &&
                        typeof(parseInt(item.price.split(' ').join(''))) == 'number' &&
                        parseInt(item.price.split(' ').join('')) >= lowP &&
                        parseInt(item.price.split(' ').join('')) <= uppP) {
                            if (isFilterCategory && item.category && item.category.includes(str)){
                                newArray.push(item);
                            } else if(!isFilterCategory) {
                                newArray.push(item);
                            }
                    }
                });
            } else {
                newArray = this.dataList;
            }
            
            return newArray;
        },
        pageData() {
            var data = []
            var cur = this.currentPage;
            // console.log(this.dataList)
            this.filtredData.forEach((item, index) => {
                if (index < 18) {
                    // console.log(cur);
                    if(index + (18 * (cur - 1)) < this.filtredData.length){
                        data.push(this.filtredData[index * cur]);
                    }
                    
                }
            })

            // console.log(this.dataList);
            // console.log(data);
            return data;
        },
        lastPage() {
            var ls = parseInt(this.filtredData.length / 18);
            if (this.filtredData.length % 18 > 0) {
                ls++;
            }
            // console.log(ls)

            return ls;
        }
    },
    components: {
        ProductItem
    },
    methods: {
        filteredArr(arr) {
            // console.log(arr)  
        },
        onPageOne() {
            this.currentPage = 1;
        },
        onPageMinusOne() {
            this.currentPage = this.currentPage - 1;
        },
        onPagePlusOne() {
            this.currentPage = this.currentPage + 1;
        },
        onPagePlusTwo() {
            this.currentPage = this.currentPage + 2;
        },
        onPageLast() {
            this.currentPage = this.lastPage;
        }
    }
}
</script>

<style>
    .big-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .list {
        width: 100%;
        min-height: 100px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        align-items: center;
        justify-content: flex-end;

        box-sizing: border-box;

        column-gap: 20px;
        row-gap: 20px;
    }

    .pagination {
        display: flex;
        flex-direction: row;
        align-self: flex-end;

        margin-top: 24px;
    }

    .pagination__btn,
    .pagination__block {
        margin-left: 8px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;

        border: 1px solid #004B81;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;

        color: #004B81;
    }

    .pagination__btn {
        cursor: pointer;
    }

    .pagination__btn_active {
        background: #004B81;
        color: #EEEEEB;
    }

    .list__empty {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }

    .list__empty-img {
        background: url(@/assets/emptyCatalog.png);
        width: 100px;
        height: 100px;
        margin-bottom: 16px;
    }

    .list__empty-text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;

        color: #D3D6CB;
    }
</style>