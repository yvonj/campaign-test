<template>
  <div class="wrap">
      <Header class="header_wrap"></Header>
      <SideBar class="sidebar_wrap"></SideBar>
      <div class="main_wrap">
        <span style="color:blue;">{{selectedCountry.handle}}</span>
        <span style="color:red;">{{activeWeek.name}}</span>
        <span style="color:red;">{{activeWeek.handle}}</span>
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
  }
  .sidebar_wrap {
    height: 100%;
    width: 30%;
    max-width: 250px;
    min-width: 100px;
    padding: 5px;
  }
  .main_wrap{
    width: 70%;
  }
</style>