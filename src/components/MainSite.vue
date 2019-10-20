<template>
  <div class="wrap">
    <Header class="header_wrap"></Header>
    <!-- <transition name="list">
      <SideBar class="sidebar_wrap shadow" v-show="menuVal"></SideBar>
    </transition> -->
    <SideBar class="sidebar_wrap shadow" :class="{sidebar_wrap_hd:!menuVal}"></SideBar>
    <div class="main_wrap" :class="{main_wrap_full:!menuVal}">
      <div class="country_heading_wrap">
        <div class="country_heading_box">
          <!-- <img :src="require('@/assets/img/'+ selectedCountry.img)" :alt="selectedCountry.id" class="country_Img" /> -->
          <img :src="gettingImg(selectedCountry.id)" :alt="selectedCountry.id" class="country_Img" />
          <span class="country_Txt">{{selectedCountry.id}}</span>
        </div>
      </div>
      <ul class="section_list_wrap">
        <li class="section_list shadow">
          <p class="section_list_heading">Beginning/AQ</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.startAQList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">BQ/CQ Part</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.bQCQList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">DQ/EQ Part</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.dQEQList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">CrossMedia Part</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.crossMediaList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
      </ul>
      <!-- <div class="debug_wrap"> -->
      <transition name="list">
        <div class="debug_wrap" v-show="storageStatus">
          <div v-for="btn in ftpBtnList" :key="btn.id" class="debug_box">
            <p v-clipboard="btn.value + activeWeek.handle">{{btn.name}}</p>
          </div>
          <div v-for="btn in debugBtnList" :key="btn.id" class="debug_box">
            <p v-clipboard="btn.value + activeWeek.handle">{{btn.name}}</p>
          </div>
          <div v-for="btn in extratorBtnList" :key="btn.id" class="debug_box">
            <p target="_blank" :href="btn.value + activeWeek.handle">{{btn.name}}</p>
            <!-- <button v-clipboard="">{{btn.name}}</button> -->
          </div>
        </div>
      </transition>
      <!-- <span style="color:blue;">{{selectedCountry.handle}}</span>
        <span style="color:red;">{{activeWeek.name}}</span>
        <span style="color:red;">{{activeWeek.handle}}</span> -->
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import SideBar from './SideBar'
  import usImg from '@/assets/img/us_flag.png';
  import ukImg from '@/assets/img/uk_flag.png';
  import frImg from '@/assets/img/fr_flag.png';
  import deImg from '@/assets/img/de_flag.png';
  import esImg from '@/assets/img/es_flag.png';
  import jpImg from '@/assets/img/jp_flag.png';
  import {
    // mapState,
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    data() {
      return {
        usImg,
        ukImg,
        frImg,
        deImg,
        esImg,
        jpImg
      }
    },
    computed: {
      ...mapGetters(['defaultCountrySet'], ['defaultWeekSet']),
      ...mapGetters({
        countryList: 'getCountryList',
        weekList: 'getWeekList',
        selectedCountry: 'getSelectedCountry',
        activeWeek: 'getActiveWeek',
        selectedCountryImg: 'getSelectedCountryImg',
        menuVal: 'getMenuStatus',
        startAQList: 'getstartAQList',
        bQCQList: 'getbQCQList',
        dQEQList: 'getDQEQList',
        crossMediaList: 'getCrossMediaList',
        ftpBtnList: 'getFTPBtnList',
        debugBtnList: 'getDebugBtnList',
        extratorBtnList: 'getExtratorList',
        storageStatus: 'getStorageURLStatus',
      })
    },
    methods: {
      ...mapMutations({
        changeCountry: 'changeCountryFunc',
      }),
      gettingImg: function (country) {
        if (country === 'US') {
          return this.usImg
        } else if (country === 'UK') {
          return this.ukImg
        } else if (country === 'France') {
          return this.frImg
        } else if (country === 'Germany') {
          return this.deImg
        } else if (country === 'Spain') {
          return this.esImg
        } else if (country === 'Japan') {
          return this.jpImg
        }
      },
    },
    components: {
      SideBar,
      Header
    }
  }
</script>

<style scoped>
  .header_wrap {
    min-height: 50px;
    width: 100%;
    border-bottom: 1px solid #cbced0;
    position: fixed;
    z-index: 99;
    background-color: #fff;
  }

  .sidebar_wrap {
    width: 250px;
    padding: 5px;
    box-sizing: border-box;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    visibility: visible;
    opacity: 1;
    transition: visibility 1s, opacity 0.5s linear;
  }

  .main_wrap {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 250px;
    right: 0;
    transition: all 1s ease;
    min-width: 700px;
  }

  .section_list_wrap {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    height: calc(100% - 50px);
  }

  .section_list_wrap::after {
    content: "";
    clear: both;
  }

  .section_list {
    float: left;
    width: 25%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .country_heading_wrap {
    text-align: center;
  }

  .country_heading_box {
    padding: 10px 5px 0;
    height: 40px;
    display: inline-block;
  }

  .country_Txt {
    line-height: 40px;
    font-size: 1.4rem;
    margin-left: 10px;
    color: #0d3593;
  }

  .country_Img {
    height: 40px;
    float: left;
  }

  .country_heading_box::after {
    content: "";
    clear: both;
  }

  .link_wrap {
    margin-top: 20px;
  }

  .section_list_heading {
    text-align: center;
    font-size: 1rem;
    border-bottom: 2px solid #0d3593;
    padding: 10px;
    border-top: 2px solid #0d3593;
  }

  .link_addr {
    display: inline-block;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 0.9rem;
    margin: 10px 5px;
  }

  .link_addr:hover {
    color:#2c9afe;
    text-decoration: none;
    border-bottom: 1px solid #2c9afe;
  }

  /* list item transition effect */

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-30px);
  }
  .debug_wrap {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 250px;
    padding-bottom: 10px;
    background-color: #fff;
  }
  .debug_box{
    display: inline-block;
    width: 50%;
    height: 40px;
  }
  .debug_box>p{
    display: inline-block;
    width: 100%;
    height: 40px;
    cursor: pointer;
    line-height: 40px;
    text-align: center
  }
  .debug_box>p:hover{
    color:#027104;
    border-bottom: 1px solid #027104;
  }

  @media only screen and (max-width: 700px) {
    .sidebar_wrap{
      width: 70%;
      background-color: #fff;
      z-index: 99;
    }
    .main_wrap {
      left: 0;
      min-width: 0;
    }
    .section_list{
      width: 100%;
      height: auto;
    }
    .country_heading_wrap{
      text-align: left;
      padding-left: 20px;
      padding-top: 10px;
    }
    .sidebar_wrap_hd{
      visibility: hidden;
      opacity: 0;
    }
    .main_wrap_full{
      left: 0;
    }
    .debug_wrap{
      left: 0;
    }
  }
</style>