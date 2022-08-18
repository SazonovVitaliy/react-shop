import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import Shop from "../pages/Shop";
import Layout from "./Layout";
import { LAYOUT_ROUTE } from "../utils/const";
import { useAuth } from "./../hooks/useAuth";

const AppRoute = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path={LAYOUT_ROUTE} element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="*" element={<Shop />} />
        {publicRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        {isAuth &&
          privateRoutes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
      </Route>
    </Routes>
  );
};

export default AppRoute;
