<template>
    <div class="confirm-view">
        <Header/>
        <Confirm/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Confirm from '@/components/Confirm.vue'
import Footer from '@/components/Footer.vue'


export default {
    name: 'ConfirmView',
    components: {
      Header,
      Confirm,
      Footer
    }
}
</script>

<style>


    .confirm-view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>