<template>
    <div class="order-view">

        <Preloader :isActive="preloaderStatus"/>

        <Header/>
        <Order :setPreloaderActive="setPreloaderActive" :setPreloaderUnActive="setPreloaderUnActive"/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Order from '@/components/Order.vue'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'


export default {
    name: 'OrderView',
    components: {
      Header,
      Order,
      Footer,
      Preloader
    },
    data() {
      return {
        preloaderStatus: false,
      }
    },
    methods: {
      setPreloaderActive() {
        this.preloaderStatus = true;
        console.log('preloaderStatus: ' + this.preloaderStatus)
      },
      setPreloaderUnActive() {
        this.preloaderStatus = false;
        console.log('preloaderStatus: ' + this.preloaderStatus)

      }
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