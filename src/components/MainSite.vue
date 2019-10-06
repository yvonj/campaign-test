<template>
  <div class="wrap">
      <SideBar></SideBar>
      <div class="main_wrap">
        <span style="color:blue;">{{selectedCountryHandle}}</span>
        <span style="color:red;">{{selectedWeekName}}</span>
        <span style="color:red;">{{selectedWeekHandle}}</span>
      </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapState (['activeWeek']),
        ...mapGetters(['defaultCountrySet'],['defaultWeekSet']),
        ...mapGetters({
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            selectedCountryHandle: 'getSelectedCountryHandle',
            selectedWeekName:'getSelectedWeekName',
            selectedWeekHandle: 'getSelectedWeekHandle'
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