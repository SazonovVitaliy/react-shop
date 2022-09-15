import { Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import {
  BASKET_ROUTE,
  FAVORITES_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../../utils/const";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "./../../hooks/redux";
import { userSliceActions } from "../../store/slices/userSlice";
const ButtonGroup = () => {
  const { isAuth } = useAuth();
  const { removeUser } = userSliceActions;
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(removeUser());
    console.log(isAuth);
  };
  return isAuth ? (
    <div style={{ display: "flex" }}>
      <Link className="link" to={FAVORITES_ROUTE}>
        <FavoriteBorderOutlinedIcon />
        <Typography className="typography">Избранное</Typography>
      </Link>
      <Link className="link" to={BASKET_ROUTE}>
        <ShoppingCartOutlinedIcon />
        <Typography className="typography">Корзина</Typography>
      </Link>
      <Link className="link" to={SHOP_ROUTE} onClick={handleLogOut}>
        <AccountCircleOutlinedIcon />
        <Typography className="typography">Выход</Typography>
      </Link>
    </div>
  ) : (
    <div style={{ display: "flex" }}>
      <Link className="link" to={FAVORITES_ROUTE}>
        <FavoriteBorderOutlinedIcon />
        <Typography className="typography">Избранное</Typography>
      </Link>
      <Link className="link" to={LOGIN_ROUTE}>
        <ShoppingCartOutlinedIcon />
        <Typography className="typography">Корзина</Typography>
      </Link>
      <Link className="link" to={LOGIN_ROUTE}>
        <AccountCircleOutlinedIcon />
        <Typography className="typography">Вход</Typography>
      </Link>
    </div>
  );
};

export default ButtonGroup;
