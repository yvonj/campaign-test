<template>
  <div class="week_select_wrap">
      <div class="week_select_box">
          <div class="header_wrap">
            <p class="header_text">Samsung Campaign<br>Test Page</p>
            <!-- <p class="header_text"></p> -->
            <p class="week_select_header">Select Week</p>
          </div>
          <div class="select_wrap">
            <v-select
                label="name"
                @input="changeWeek" 
                :options="weekList"
                :value="activeWeekObject" 
                placeholder="Choose a week to test"></v-select>
          </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';


export default {
    computed: {
        ...mapState ({
            activeWeekObject: 'activeWeek'
            }),
        ...mapGetters({
            weekList: 'getWeekList',
            activeWeek: 'getActiveWeek'
            })

    },
    methods: {
        ...mapMutations({
            changeWeek: 'changeWeekFunc'
        })
    }
}
</script>

<style scoped>
    .week_select_wrap::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:#f9f9fa;
        content: '';
        /* opacity: 0.7; */
        /* background: url("../assets/img/woodPatern.png"); */
    }
    .week_select_box {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 450px;
        height: 580px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background: #cde3dd;
        opacity: 0.7;
        /* background: url("../assets/img/woodPatern.png"); */
    }
    .header_text{
        margin-bottom: 20px;
        font-size: 1.5rem;
    }
    .header_wrap {
        padding: 30px;
    }
    .week_select_header {
        font-size: 1.3rem;
    }
    .select_wrap{
        padding: 20px;
    }
    .v-select{
        background-color: #eefffb;
    }
    .vs__search{
        line-height: 2;
    }
    .vs__search::placeholder{
        color: #000;
    }
    @media only screen and (max-width: 700px) {
        .week_select_box{
            width: 320px;
        }
    }
</style>