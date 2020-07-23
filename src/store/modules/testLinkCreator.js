import {
    router
}
from '../../router/index.js';
const state = {
    countryList : [
        {
            id: "US",
            handle: "ENU",
            img: "us_flag.png"
        },
        {
            id: "UK",
            handle: "ENG",
            img: "uk_flag.png"
        },
        {
            id: "France",
            handle: "FRA",
            img: "fr_flag.png"
        },
        {
            id: "Germany",
            handle: "DEU",
            img: "de_flag.png"
        },
        {
            id: "Italy",
            handle: "ITA",
            img: "it_flag.png"
        },
        {
            id: "Spain",
            handle: "ESU",
            img: "es_flag.png"
        },
        {
            id: "Japan",
            handle: "JPN",
            img: "jp_flag.png"
        }

    ],
    weekList : [
        {
            name: "Week23",
            addr: "Week1",
            handle: "SSC2020W1"
        },
        {
            name: "Week24",
            addr: "Week2",
            handle: "SSC2020W2"
        },
        {
            name: "Week25",
            addr: "Week1",
            handle: "SSC2020W1"
        },
        {
            name: "Week26",
            addr: "Week2",
            handle: "SSC2020W2"
        },
        {
            name: "Week27",
            addr: "Week1",
            handle: "SSC2020W1"
        },
        {
            name: "Week28",
            addr: "Week2",
            handle: "SSC2020W2"
        },
        {
            name: "Week29",
            addr: "Week1",
            handle: "SSC2020W1"
        },
        {
            name: "Week30",
            addr: "Week2",
            handle: "SSC2020W2"
        },

    ],
    startAQList: [
        {
            id: "5",
            name: "Beginning"
        },
        {
            id: "44",
            name: "AQ Part"
        },
        {
            id: "15",
            name: "191129 Quick Test"
        },
    ],
    bQCQList: [
        {
            id: "55",
            name: "BQ Part"
        },
        {
            id: "66",
            name: "CQ Part"
        },
    ],
    dQEQList: [
        {
            id: "22",
            name: "DQ Part"
        },
        {
            id: "33",
            name: "EQ Part"
        },
        {
            id: "23",
            name: "HQ/Functionality Part"
        },
    ],
    crossMediaList: [
        {
            id: "83",
            name: "Covid Part"
        },
        {
            id: "11",
            name: "CrossMedia Beginning"
        },
        {
            id: "82",
            name: "Battery(2020.04.06)"
        },
        {
            id: "71",
            name: "Television"
        },
        {
            id: "81",
            name: "Event"
        },
        {
            id: "72",
            name: "Radio"
        },
        {
            id: "73",
            name: "Megazine"
        },
        {
            id: "74",
            name: "News"
        },
        {
            id: "75",
            name: "Cinema"
        },
        {
            id: "76",
            name: "Outdoor"
        },
        {
            id: "77",
            name: "Online Mobile"
        },
        {
            id: "78",
            name: "Airport"
        },
        {
            id: "79",
            name: "Point Of Purchase"
        }
    ],
    fTPBtns: [
        {
            id: 1,
            value: 'ftp://125.141.196.111/243412976',
            name: 'Image FTP',
        },
        {
            id: 2,
            value: '\\\\amznfsxsvtdpvph.kt.group.local\\share\\CDN_Media\\Multimedia\\KO\\243412976',
            name: 'Video FTP',
        }
    ],
    debugBtns: [
        {
            id: 1,
            value: '\\\\WIN-CPEQHJJ1I36\\mrint\\src\\',
            name: 'Ouput Location',
        },
        {
            id: 2,
            value: '\\\\WIN-CPEQHJJ1I36\\mrint\\AutoActivate.bat ',
            name: 'Activation',
        }
    ],
    extractorBtn: [
        {
            id: 1,
            value: '\\\\EC2AMAZ-16ITHK3\\DPAT_Output_NA\\',
            name: 'Extrator File',
        },
    ],
    // selectedCountry: {
    //     id: "US",
    //     handle: "ENU",
    //     img: "./assets/img/us_flag.png"
    // }
    selectedCountry: {
        id: "",
        handle: "",
        img: ""
    },
    selectedWeek: {
        name: "",
        addr: "",
        handle: ""
    },
    activeWeek: {
        name: "",
        addr: "",
        handle: ""
    },
    menuStatus: true,
    storageURLStatus: false
};

const getters = {
    getCountryList(state) {
        return state.countryList;
    },
    getWeekList(state) {
        return state.weekList;
    },
    getSelectedCountry(state) {
        return state.selectedCountry;
    },
    getSelectedCountryImg(state) {
        return state.selectedCountry.img;
    },
    getActiveWeek(state) {
        return state.activeWeek;
    },
    defaultCountrySet(state){
        state.selectedCountry = state.countryList[0];
    },
    defaultWeekSet(state) {
        state.selectedWeek = state.weekList[0];
    },
    getMenuStatus(state){
        return state.menuStatus;
    },
    getstartAQList(state){
        return state.startAQList;
    },
    getbQCQList(state){
        return state.bQCQList;
    },
    getDQEQList(state){
        return state.dQEQList;
    },
    getCrossMediaList(state){
        return state.crossMediaList;
    },
    getFTPBtnList(state) {
        return state.fTPBtns;
    },
    getDebugBtnList(state) {
        return state.debugBtns;
    },
    getExtratorList(state) {
        return state.extractorBtn;
    },
    getStorageURLStatus(state){
        return state.storageURLStatus;
    }
};

const mutations = {
    changeCountryFunc(state, payload) {
        state.selectedCountry = payload.country;
        state.menuStatus = !state.menuStatus;
    },
    changeWeekFunc(state, payload) {
        state.activeWeek = payload;
        router.push({
            path: state.activeWeek.addr
        });
        // router.push('/week1');
        // state.selectedWeek = payload.week;
    },
    changeMenuStatus(state){
        state.menuStatus = !state.menuStatus;
    },
    backToMenu(){
        router.push({
            path: '/'
        });
    },
    changeStorageURLStatus(state) {
        state.storageURLStatus = !state.storageURLStatus;
    },
};

export default {
    state,
    getters,
    mutations
};