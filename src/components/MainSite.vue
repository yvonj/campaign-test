<template>
  <div class="wrap">
      <SideBar></SideBar>
      <div class="main_wrap">
        <span style="color:blue;">{{selectedCountryHandle}}</span>
        <span style="color:red;">{{activeWeek.name}}</span>
        <span style="color:red;">{{activeWeek.handle}}</span>
      </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapGetters(['defaultCountrySet'],['defaultWeekSet']),
        ...mapGetters({
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            selectedCountryHandle: 'getSelectedCountryHandle',
            selectedWeekName:'getSelectedWeekName',
            selectedWeekHandle: 'getSelectedWeekHandle',
            activeWeek: 'getActiveWeek'
            })
        
    },
    methods: {
        ...mapMutations({
            changeCountry: 'changeCountryFunc'
        })
    },
    components: {
    SideBar
  }
}
</script>

<style>

</style>