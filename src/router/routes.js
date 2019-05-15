import Msite from '../pages/Msite/msite.vue'
import Classify from '../pages/Classify/classify.vue'
import Identify from '../pages/Indentify/identify.vue'
import ShopCart from '../pages/ShopCart/shopCart.vue'
import Profile from '../pages/Profile/profile.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
export default [
  {
    path: '/msite',
    component: Msite,
    meta: { isShow: true }
  },
  {
    path: '/classify',
    component: Classify,
    meta: { isShow: true }
  },
  {
    path: '/identify',
    component: Identify,
    meta: { isShow: true }
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta: { isShow: true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { isShow: false }
  },
  {
    path: '/login',
    component: Login,
    meta: { isShow: false }
  },
  {
    path: '/search',
    component: Search,
    meta: {isShow: false}
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
