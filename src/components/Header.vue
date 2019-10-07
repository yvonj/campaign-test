<template>
  <div>
      <p class="week_title">{{activeWeek.name}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            activeWeek: 'getActiveWeek'
            })
    }
}
</script>

<style scoped>
  .week_title{
    line-height: 50px;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
</style>