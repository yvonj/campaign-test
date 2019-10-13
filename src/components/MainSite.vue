<template>
  <div class="wrap">
    <Header class="header_wrap"></Header>
    <SideBar class="sidebar_wrap shadow" v-show="menuVal"></SideBar>
    <div class="main_wrap">
      <div class="country_heading_wrap">
        <div class="country_heading_box">
          <img :src="require('@/assets/img/'+ selectedCountry.img)" :alt="selectedCountry.id" class="country_Img" />
          <span class="country_Txt">{{selectedCountry.id}}</span>
        </div>
      </div>
      <ul class="section_list_wrap">
        <li class="section_list shadow">
          <p class="section_list_heading">From Start</p>
          <div class="link_wrap">
            <a class="link_addr"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug=5&lang'+selectedCountry.handle">
              From Begging
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">AQ Part</p>
          <div class="link_wrap">
            <a class="link_addr"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug=44&lang'+selectedCountry.handle">
              From AQ
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">DQ/EQ Part</p>
          <div class="link_wrap">
            <a class="link_addr"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug=22&lang'+selectedCountry.handle">
              From DQ
            </a>
            <a class="link_addr"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug=33&lang'+selectedCountry.handle">
              From EQ
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">CrossMedia Part</p>
          <div class="link_wrap">
            <a class="link_addr"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug=33&lang'+selectedCountry.handle">
              sdwd
            </a>
          </div>
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
  import {
    mapState,
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    data() {
      return {
        imgAddr: this.selectedCountry.img
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
        menuVal: 'getMenuStatus'
      })

    },
    methods: {
      ...mapMutations({
        changeCountry: 'changeCountryFunc',
      })
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

  .main_wrap {
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
    padding: 5px;
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
    border-bottom: 1px solid #ccd2d7;
    padding: 10px;
    border-top: 1px solid #ccd2d7;
  }

  .link_addr {
    display: inline-block;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 0.8rem;
    margin: 10px 5px;
  }

  .link_addr:hover {
    color:#2c9afe;
    text-decoration: none;
    border-bottom: 1px solid #2c9afe
  }
</style>