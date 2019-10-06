<template>
  <div  class="sidebar_wrap">
      <ul>
          <li v-for="(country,index) in this.countryList" v-bind:key="country.id" class="shadow">
              <span v-on:click="changeCountry({country,index})">{{country.id}}</span>
          </li>
      </ul>
      <v-select
        label="name"
        @input="changeWeek" 
        :options="weekList"
        :value="activeWeekObject" 
        placeholder="Choose a week to test"></v-select>
        {{activeWeek.handle}}
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
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            activeWeek: 'getActiveWeek'
            })

    },
    methods: {
        ...mapMutations({
            changeCountry: 'changeCountryFunc',
            changeWeek: 'changeWeekFunc'
        })
    }
}
</script>

<style scoped>
    .sidebar_wrap {
    height: 100%;
    width: 30%;
    max-width: 250px;
    min-width: 100px;
}
</style>