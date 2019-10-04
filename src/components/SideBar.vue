<template>
  <div  class="sidebar_wrap">
      <ul>
          <li v-for="(country,index) in this.getCountryList" v-bind:key="country.id" class="shadow">
              <span>{{country.id}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
    ...mapGetters(['getCountryList'])
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