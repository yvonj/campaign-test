<template>
  <div class="wrap">
    <Header class="header_wrap"></Header>
    <SideBar class="sidebar_wrap shadow"></SideBar>
    <div class="main_wrap">
      <div>
        <span>
          <img v-bind:src="'../assets/img/' + selectedCountry.img" alt="Riley" /> 
          <img :src="'../assets/img/' + selectedCountry.img">
          <img src="../assets/img/us_flag.png" alt="Riley" /> 
          <!-- ~some-npm-package/foo.png -->
        </span>
      </div>
      <ul class="section_list_wrap">
        <li class="section_list shadow">
          <p>AQ Part</p>
          <a href=""></a>
        </li>
        <li class="section_list shadow">
          <p>DQ Part</p>
        </li>
        <li class="section_list shadow">
          <p>EQ Part</p>
        </li>
        <li class="section_list shadow">
          <p>Cross Media Part</p>
        </li>
      </ul>
      <!-- <span style="color:blue;">{{selectedCountry.handle}}</span>
        <span style="color:red;">{{activeWeek.name}}</span>
        <span style="color:red;">{{activeWeek.handle}}</span> -->
    </div>
  </div>
</template>

<script>
import Header from './Header'
import SideBar from './SideBar'
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapGetters(['defaultCountrySet'],['defaultWeekSet']),
        ...mapGetters({
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            selectedCountry: 'getSelectedCountry',
            activeWeek: 'getActiveWeek'
            })
        
    },
    methods: {
        ...mapMutations({
            changeCountry: 'changeCountryFunc'
        })
    },
    components: {
    SideBar,
    Header
  }
}
</script>

<style scoped>
  .header_wrap{
    min-height: 50px;
    width: 100%;
    border-bottom: 1px solid #cbced0;
  }
  .sidebar_wrap {
    width: 250px;
    padding: 5px;
    box-sizing: border-box;
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
  }
  .main_wrap{
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 250px;
    right: 0;
  }
  .section_list_wrap {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
  }
  .section_list{
    width: 25%;
    display: inline-block;
    height: 100%;
    /* border-right: 1px solid #cbced0; */
    padding: 10px;
    box-sizing: border-box;
  }
</style>