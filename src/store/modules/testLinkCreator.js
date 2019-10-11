import {
    router
}
from '../../router/index.js';
const state = {
    countryList : [
        {
            id: "US",
            handle: "ENU",
            img: "us_flag"
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
            name: "Week33",
            addr: "Week1",
            handle: "ADMSMPW27V3"
        },
        {
            name: "Week34",
            addr: "Week2",
            handle: "ADMSMPW25V3"
        },
        {
            name: "Week35",
            addr: "Week1",
            handle: "ADMSMPW27V3"
        },
        {
            name: "Week36",
            addr: "Week2",
            handle: "ADMSMPW25V3"
        }
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
    }
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
    getActiveWeek(state) {
        return state.activeWeek;
    },
    defaultCountrySet(state){
        state.selectedCountry = state.countryList[0];
    },
    defaultWeekSet(state) {
        state.selectedWeek = state.weekList[0];
    },
};

const mutations = {
    changeCountryFunc(state, payload) {
        state.selectedCountry = payload.country;
    },
    changeWeekFunc(state, payload) {
        state.activeWeek = payload;
        router.push({
            path: state.activeWeek.addr
        });
        // router.push('/week1');
        // state.selectedWeek = payload.week;
    }
};

export default {
    state,
    getters,
    mutations
};