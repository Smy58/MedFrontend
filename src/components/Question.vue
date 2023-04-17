<template>
    <div :class="isActive ? 'question active' : 'question'" v-on:click='toogleActive' >
        <div class="question__text">
            <h4>{{ item.question }}</h4>
            <div class="question__arrow"></div>
        </div>

        <div class="question__paragraph">
            <p >{{ item.answer }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        item: Object
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toogleActive() {
            // console.log(!this.isActive)
            this.isActive = !this.isActive
        }
    }
}
</script>

<style>
    .question {
        width: 843px;
        padding: 20px 15px ;
        box-sizing: border-box;

        border-bottom: 1px solid rgba(128, 128, 128, 0.6);

        cursor: pointer;
    }

    .question__text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        text-align: left;

        display: flex;
        align-items: center;
        justify-content: space-between;

        flex-direction: row;

        color: #343423;
        
        margin-bottom: 24px;
    }

    .question__arrow {
        background: url(@/assets/QuestionList/arrow.png);
        width: 24px;
        height: 24px;
        background-size: contain;
        background-repeat: no-repeat;

        transform: rotate(0);
        transition: transform 1s ease;
    }

    .question__paragraph {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: left;

        display: flex;
        align-items: center;

        color: #9E7937;

        transition: max-height 1s ease;
        max-height: 0;
        overflow: hidden;

        

    }

    .question.active .question__paragraph {
        max-height: 120px;
    }

    .question.active .question__arrow {
        transform: rotate(-90deg);
    }


    h4, p {
        margin: 0;
    }
</style>