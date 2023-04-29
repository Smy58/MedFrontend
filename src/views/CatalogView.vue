<template>
  <div class="catalog-view">

    <Preloader :isActive="preloaderStatus"/>

    <Header />
    <Katalog :setPreloaderActive="setPreloaderActive" :setPreloaderUnActive="setPreloaderUnActive" />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Katalog from '@/components/Katalog.vue'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'


export default {
    name: 'CatalogView',
    components: {
      Header,
      Katalog,
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


  .catalog-view {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>