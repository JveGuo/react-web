import Home from '../pages/home';
import AddOrder from '../pages/addOrder';
import About from '../pages/about';
import Service from '../pages/service';

/**
 * 属性noLogIn: 页面显示不需要登录
 */
export default {
  menus: [
    { key: '/app/home', title: '测试', component: Home, noLogIn: true},
    { key: '/app/order', title: '在线下单', component: AddOrder},
    { key: '/app/about', title: '关于我们', component: About},
    { key: '/app/service', title: '客服', component: Service},
    // {
    //   // key: '/app/test1', title: '测试1',
    //   subs: [
    //     { key: '/app/test3', title: '测试2-1', component: Test1 }
    //   ]
    // }
  ]
}