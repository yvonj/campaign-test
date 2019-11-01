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
                class="select_box"
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
        background-color:#000;
        content: '';
        /* opacity: 0.7; */
        background-image: url("../assets/img/black_earth.png");
        background-repeat: no-repeat;
        background-position: 600px center;
        background-size: 1000px;
    }
    .week_select_box {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100px;
        margin: auto;
        width: 400px;
        height: 550px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background: #eee;
        opacity: 0.7;
        /* background: url("../assets/img/woodPatern.png"); */
    }
    .header_text{
        margin-bottom: 40px;
        font-size: 1.5rem;
        color: #000148;
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
        background-color: #fafdff;
    }
    .select_box input{
        line-height: 2;
    }
    .vs__search::placeholder{
        color: #000;
    }
    
  /* .select_box .vs__search::placeholder,
  .select_box .vs__dropdown-toggle,
  .select_box .vs__dropdown-menu {
    background: #dfe5fb;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .select_box .vs__clear,
  .select_box .vs__open-indicator {
    fill: #394066;
  } */

    @media only screen and (max-width: 700px) {
        .week_select_box{
            width: 320px;
            
        }
    }

    @media only screen and (max-width: 500px) {
        .week_select_box{
            left: 0;
            right: 0;
        }
        .week_select_wrap::before{
           background-position: center;
           background-size: 400px;
        }
    }

    @media only screen and (max-width: 1000px) {
        .week_select_wrap::before{
           background-position: center;
           background-size: 600px;
        }
    }
</style>