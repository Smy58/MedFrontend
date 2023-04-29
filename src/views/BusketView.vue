<template>
    <div class="busket-view">
        <Preloader :isActive="preloaderStatus"/>

        <Header/>
        <Busket :setPreloaderActive="setPreloaderActive" :setPreloaderUnActive="setPreloaderUnActive" />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Busket from '@/components/Busket.vue'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'


export default {
    name: 'BusketView',
    components: {
      Header,
      Busket,
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
      },
      setPreloaderUnActive() {
        this.preloaderStatus = false;
      }
  },
}
</script>

<style>


    .busket-view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>