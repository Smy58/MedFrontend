<template>
    <div class="order-view">
        <Header/>
        <Order/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Order from '@/components/Order.vue'
import Footer from '@/components/Footer.vue'


export default {
    name: 'OrderView',
    components: {
      Header,
      Order,
      Footer
    }
}
</script>

<style>


    .order-view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>