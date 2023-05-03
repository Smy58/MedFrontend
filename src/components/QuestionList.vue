<template>
    <div class="questions">
        <h3 class="questions__title">Часто задаваемые вопросы</h3>

        <div class="questions__list">
            <div v-for="item in QUESTIONS || []" :key="item.ID">
                <Question :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

import Question from '@/components/Question.vue';


export default {
    name: 'QuestionList',
    components: {
        Question
    },
    props: {
        setPreloaderUnActive: Function,
        setPreloaderActive: Function
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['QUESTIONS']),

    },
    methods: {
        ...mapActions([
            'GET_QUESTIONS_FROM_API'
        ]),
    },
    mounted() {
        this.setPreloaderActive()
        this.GET_QUESTIONS_FROM_API()
            .then((res) => {
                this.setPreloaderUnActive();
            })
    }
}
</script>

<style>
    .questions {
        width: 100%;
        min-height: 553px;
        background: #FFFFFF;
        border-radius: 24px;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 38px;

        margin-bottom: 34px;

        padding-bottom: 34px;
    }

    .questions__title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;

        display: flex;
        align-items: center;
        text-align: center;

        margin-top: 35px;
        margin-bottom: 28px;

        color: #004B81;
    }

    

    .questions__list {
        width: 843px;
    }

    @media screen and (max-width: 950px){
        .questions__list {
            width: 80%;
        }
    }

    
</style>