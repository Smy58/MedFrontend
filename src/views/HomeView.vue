<template>
  <Header :isHome='true'/>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Info />
    <TopProducts :dataF="POPPRODUCTS" titleTopProducts="Популярные товары" />
    <TopProducts :dataF="LOWPRODUCTS" titleTopProducts="Товары с наибольшей выгодой" />
    <QuestionList />
    <Contacts />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Info from '@/components/Info.vue'
import TopProducts from '@/components/TopProducts.vue'
import ListBlock from '@/components/ListBlock.vue'
import QuestionList from '@/components/QuestionList.vue'
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'

import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Header,
    Info,
    ListBlock,
    TopProducts,
    QuestionList,
    Contacts,
    Footer
  },
  computed: {
      ...mapGetters(['POPPRODUCTS', 'LOWPRODUCTS']),

  },
  methods: {
      ...mapActions([
          'GET_POPPRODUCTS_FROM_API',
          'GET_LOWPRODUCTS_FROM_API'
      ]),
  },
  mounted() {
      this.GET_POPPRODUCTS_FROM_API();
      this.GET_LOWPRODUCTS_FROM_API();
      // console.log(this.POPPRODUCTS)
  }
}
</script>

<style>
  .home {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>