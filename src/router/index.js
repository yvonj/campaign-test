import Vue from 'vue'
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import WeekView1 from '../views/WeekView1.vue';
import WeekView2 from '../views/WeekView2.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            //path: URL 주소
            path: '/',
            //component: URL 주소로 갔을 때 표시 될 컴포넌트
            component: MainView,
        },
        {
            path: '/Week1',
            component: WeekView1,
        },
        {
            path: '/Week2',
            component: WeekView2,
        }
    ]
});

