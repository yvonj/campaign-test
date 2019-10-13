<template>
  <div>
    <div class="header_box">
      <i class="fas fa-bars menu_but" @click="changeMenuStatus"></i>
      <p class="week_title">{{activeWeek.name}}</p>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';

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
        changeMenuStatus: 'changeMenuStatus'
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
  }
  .menu_but{
    float: left;
    font-size: 35px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
  }
  .header_box::after {
    content: "";
    clear: both;
  }
</style>