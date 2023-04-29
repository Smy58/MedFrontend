<template>
  <Header :isHome='true'/>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Preloader :isActive="preloaderStatus"/>
    <Info />
    <TopProducts :dataF="POPPRODUCTS" titleTopProducts="Популярные товары" />
    <TopProducts :dataF="LOWPRODUCTS" titleTopProducts="Товары с наибольшей выгодой" />
    <QuestionList :setPreloaderActive="setPreloaderActive" :setPreloaderUnActive="setPreloaderUnActive"/>
    <Contacts :setPreloaderActive="setPreloaderActive" :setPreloaderUnActive="setPreloaderUnActive"/>
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
import Preloader from '@/components/Preloader.vue'

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
    Footer,
    Preloader
  },
  computed: {
      ...mapGetters(['POPPRODUCTS', 'LOWPRODUCTS']),

  },
  data() {
    return {
      preloaderStatus: false,
    }
  },
  methods: {
      ...mapActions([
          'GET_POPPRODUCTS_FROM_API',
          'GET_LOWPRODUCTS_FROM_API'
      ]),
      setPreloaderActive() {
        this.preloaderStatus = true;
      },
      setPreloaderUnActive() {
        this.preloaderStatus = false;
      }
  },
  mounted() {
      this.setPreloaderActive()
      this.GET_POPPRODUCTS_FROM_API()
        .then((res) => {
          this.setPreloaderUnActive()
        })

      this.setPreloaderActive()
      this.GET_LOWPRODUCTS_FROM_API()
        .then((res) => {
          this.setPreloaderUnActive()
        })
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