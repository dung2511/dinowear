import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./assets/css/admin.css";
import "./assets/css/style.css";
import "./assets/css/main.css";
import "./index.css";
import "swiper/css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { privateRoutes, publicRoutes } from "./routes/routes";
import DefaultLayout from "./layout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import AdminRoutes from "./pages/Admin/AdminRoutes";
import AuthContextProvider from "./context/Auth";
export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Layout = DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path="admin/*" element={<AdminRoutes />} />
        </Routes>
        <ToastContainer />
      </AuthContextProvider>
    </Router>
  );
}
