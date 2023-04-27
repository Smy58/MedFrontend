<template>
    <div class="busket-view">
        <Header/>
        <Busket/>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Busket from '@/components/Busket.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'BusketView',
    components: {
      Header,
      Busket,
      Footer
    }
}
</script>

<style>


    .busket-view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>