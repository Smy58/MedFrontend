<template>
    <div class="product-view">
        <Header />
        <Product />
        <Footer />
    </div>
    
</template>

<script>
import Header from '@/components/Header.vue'
import Product from '@/components/Product.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'ProductView',
    components: {
        Header,
        Product,
        Footer
    }    
}
</script>

<style>


    .product-view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>