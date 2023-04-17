<template>
  <div class="catalog-view">
    <Header />
    <Katalog />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Katalog from '@/components/Katalog.vue'

export default {
    name: 'CatalogView',
    components: {
      Header,
      Katalog
    }
}
</script>

<style>
  .header {
    background: #60603C;
    position: relative;
  }

  .catalog-view {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>