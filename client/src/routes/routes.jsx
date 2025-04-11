import Home from "../pages/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import AllNews from "../pages/News/AllNews";
import NewsDetail from "../pages/News/NewsDetail";
import Services from "../pages/Services/Services";
import ProfileUser from "../pages/Users/ProfileUser";
import Contact from "../pages/Contact/Contact";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ProductDetail from "../pages/Products/ProductDetail";
import ProductCategory from "../pages/Products/ProductCategory";
import ProductAll from "../pages/Products/ProductAll";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Success from "../pages/Success/Success";
import OrderManagement from "../pages/Users/OrderManagement";
import DetailOrder from "../pages/Users/DetailOrder";
import ShippingAddress from "../pages/Users/ShippingAddress";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/tin-tuc",
    component: AllNews,
  },
  {
    path: "/tin-tuc/:slug",
    component: NewsDetail,
  },
  {
    path: "/dich-vu",
    component: Services,
  },
  {
    path: "/lien-he",
    component: Contact,
  },
  {
    path: "/dang-nhap",
    component: SignIn,
  },
  {
    path: "/dang-ky",
    component: SignUp,
  },
  {
    path: "*",
    component: PageNotFound,
  },
  {
    path: "/san-pham/:slug",
    component: ProductDetail,
  },
  {
    path: "/collections/:slug",
    component: ProductCategory,
  },
  {
    path: "/san-pham",
    component: ProductAll,
  },
  {
    path: "/gio-hang",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/success",
    component: Success,
  },
];

const privateRoutes = [
  {
    path: "/thong-tin-tai-khoan",
    component: ProfileUser,
  },
  {
    path: "/quan-ly-don-hang",
    component: OrderManagement,
  },
  {
    path: "/quan-ly-don-hang/:id",
    component: DetailOrder,
  },
  {
    path: "/dia-chi-giao-hang",
    component: ShippingAddress,
  },
];
export { publicRoutes, privateRoutes };
