<template>
  <div>
    <div class="week_select_wrap">
        <p class="week_select_header">Select Week</p>
         <v-select
        label="name"
        @input="changeWeek" 
        :options="weekList"
        :value="activeWeekObject" 
        placeholder="Choose a week to test"></v-select>
    </div>
    <div class="country_list_wrap">
        <p class="country_list_header">Select Country</p>
        <ul class="country_list">
            <li v-for="(country,index) in this.countryList" v-bind:key="country.id" class="list_item">
                <p v-on:click="changeCountry({country,index})" class="list_item_text">{{country.id}}</p>
            </li>
        </ul>
    </div>
    <div class="storage_URL_wrap">
        <p class="storage_URL_but" @click="changeStorageURLStatus">Show File URL</p>
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
            changeWeek: 'changeWeekFunc',
            changeStorageURLStatus: 'changeStorageURLStatus'
        })
    }
}
</script>

<style scoped>
    .country_list{
        padding: 5px;
    }
    .country_list_header, .week_select_header{
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #ccd2d7;
        color: #0d3593;
        font-size: 1.3rem;
    }
    .week_select_header{
        margin-bottom: 20px;
    }
    .list_item{
        height: 50px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .list_item:hover{
        border-bottom: 2px solid #2d9bff;
        color: #2d9bff;
    }
    .list_item_text{
        line-height: 50px;
        text-align: center;
        width: 100%;
        background-color: #fff;
        height: 100%;
        font-size:1.1rem;
    }
    .week_select_wrap{
        margin-bottom: 35px;
    }
    .storage_URL_wrap{
        /* margin-top: 20px; */
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
    }
    .storage_URL_but{
        width: 100%;
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        font-size: 1rem;
        box-sizing: border-box;
        text-align: center;
    }
    .storage_URL_but:hover{
        border: 2px solid #027104;
        color: #027104;
    }
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: #dfe5fb;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }

</style>