<template>
  <div class="catalog-view">
    <Header />
    <Katalog />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Katalog from '@/components/Katalog.vue'
import Footer from '@/components/Footer.vue'


export default {
    name: 'CatalogView',
    components: {
      Header,
      Katalog,
      Footer
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