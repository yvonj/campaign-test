<template>
  <div>
    <div class="header_box">
      <i class="fas fa-bars menu_btn" @click="changeMenuStatus"></i>
      <p class="week_title">{{activeWeek.name}} <span>{{activeWeek.handle}}</span></p>
      <i class="fas fa-home back_btn" @click="backToMenu"></i>
      <!-- <i class="fas fa-arrow-circle-left back_btn"></i> -->
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            activeWeek: 'getActiveWeek',
            menuVal: 'getMenuStatus'
            })
    },
    methods: {
      ...mapMutations({
        changeMenuStatus: 'changeMenuStatus',
        backToMenu: 'backToMenu'
      })
    },
}
</script>

<style scoped>
  
  .week_title{
    line-height: 50px;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 2px;
    color: #0d3593;
  }
  .week_title>span{
    font-size:0.9rem;
    letter-spacing: 0;
    color: #002377;
  }
  .menu_btn{
    position: absolute;
    font-size: 35px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: visibility 1s, opacity 0.5s linear;
  }
  .back_btn{
    position: absolute;
    font-size: 30px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    right: 5px;
  }
  .header_box::after {
    content: "";
    clear: both;
  }
  @media only screen and (max-width: 700px) {
    .menu_btn{
      opacity: 1;
      visibility: visible;
    }
  }
</style>