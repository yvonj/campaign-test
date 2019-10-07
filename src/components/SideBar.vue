<template>
  <div>
    <div>
        <p class="country_list_header">Select Country</p>
        <ul class="country_list">
            <li v-for="(country,index) in this.countryList" v-bind:key="country.id" class="list_item shadow">
                <p v-on:click="changeCountry({country,index})" class="list_item_text">{{country.id}}</p>
            </li>
        </ul>
    </div>
    <div>
         <v-select
        label="name"
        @input="changeWeek" 
        :options="weekList"
        :value="activeWeekObject" 
        placeholder="Choose a week to test"></v-select>
    </div>
     
        <!-- {{activeWeek.handle}} -->
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
    .country_list{
        padding: 5px;
    }
    .country_list_header{
        text-align: center;
        padding: 10px;
    }
    .list_item{
        height: 50px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .list_item:hover{
        border-bottom: 3px solid #048e74;
        color: #048e74;
    }
    .list_item_text{
        line-height: 50px;
        text-align: center;
        width: 100%;
        background-color: #fff;
        height: 100%;
        font-size:1.1rem;
    }
</style>