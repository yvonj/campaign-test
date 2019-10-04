
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
            week: "Week33",
            handle: "ADMSMPW27V3"
        },
        {
            week: "Week34",
            handle: "ADMSMPW25V3"
        }
    ]
};

const getters = {
    getCountryList(state) {
        return state.countryList;
    },
    getWeekList(state) {
        return state.weekList;
    }
};

const mutations = {

};

export default {
    state,
    getters,
    mutations
};