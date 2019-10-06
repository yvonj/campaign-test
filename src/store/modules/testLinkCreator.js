import {
    router
}
from '../../router/index.js';
const state = {
    countryList : [
        {
            id: "US",
            handle: "ENU",
            img: "./assets/img/us_flag.png"
        },
        {
            id: "UK",
            handle: "ENG",
            img: "./assets/img/uk_flag.png"
        },
        {
            id: "France",
            handle: "FRA",
            img: "./assets/img/fr_flag.png"
        },
        {
            id: "Germany",
            handle: "DEU",
            img: "./assets/img/de_flag.png"
        },
        {
            id: "Spain",
            handle: "ESU",
            img: "./assets/img/es_flag.png"
        },
        {
            id: "Japan",
            handle: "JPN",
            img: "./assets/img/jp_flag.png"
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
    defaultCountrySet(state){
        state.selectedCountry = state.countryList[0];
    },
    defaultWeekSet(state) {
        state.selectedWeek = state.weekList[0];
    },
    getSelectedCountryHandle(state) {
        return state.selectedCountry.handle;
    },
    getSelectedWeekName(state) {
        return state.selectedWeek.name;
    },
    getSelectedWeekHandle(state) {
        return state.selectedWeek.handle;
    },
    getWeekList(state) {
        return state.weekList;
    },
    getActiveWeek(state) {
        return state.activeWeek;
    }
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