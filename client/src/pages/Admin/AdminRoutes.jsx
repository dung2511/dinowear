import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp.jsx";
import Blank from "./pages/Blank";
import Calendar from "./pages/Calendar";
import Ecommerce from "./pages/Dashboard/ECommerce";
import FormElements from "./pages/Forms/FormElements";
import NotFound from "./pages/OtherPage/NotFound";
import Alerts from "./pages/UiElements/Alerts.jsx";
import Avatars from "./pages/UiElements/Avatars";
import Badges from "./pages/UiElements/Badges";
import Buttons from "./pages/UiElements/Buttons";
import Images from "./pages/UiElements/Images";
import Videos from "./pages/UiElements/Videos";
import UserProfiles from "./pages/UserProfiles";
import AppLayout from "./layout/AppLayout";
import UpdateProduct from "./components/tables/UpdateProduct.jsx";
import Product from "./pages/Products/Products.jsx";
import News from "./pages/News/News.jsx";
import UpdateNews from "./pages/News/UpdateNews.jsx";
import CreateNews from "./pages/News/CreateNews.jsx";
import CreateProduct from "./pages/Products/CreateProduct.jsx";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Ecommerce />} />
        <Route path="/profile" element={<UserProfiles />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/blank" element={<Blank />} />

        <Route path="/form-elements" element={<FormElements />} />

        {/* Product */}
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<UpdateProduct />} />
        <Route path="/product/create" element={<CreateProduct />} />
        {/* News */}
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/news/:id" element={<UpdateNews />} />
        <Route path="/news/create" element={<CreateNews />} />

        {/* Ui Elements */}
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/avatars" element={<Avatars />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
      </Route>

      {/* Auth Layout */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AdminRoutes;
