import Auth from "./pages/Auth";
import {
  LOGIN_ROUTE,
  BASKET_ROUTE,
  FAVORITES_ROUTE,
  PRODUCT_ROUTE,
  LAYOUT_ROUTE,
} from "./utils/const";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import Favourites from "./pages/Favourites";
import Layout from "./components/Layout";

export const publicRoutes = [
  {
    path: LAYOUT_ROUTE,
    Element: Layout,
  },
  {
    path: LOGIN_ROUTE,
    Element: Auth,
  },

  {
    path: PRODUCT_ROUTE,
    Element: Product,
  },
  {
    path: FAVORITES_ROUTE,
    Element: Favourites,
  },
];

export const privateRoutes = [
  {
    path: BASKET_ROUTE,
    Element: Basket,
  },
];
