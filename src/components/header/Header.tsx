import ButtonGroup from "./ButtonGroup";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/const";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { email, isAuth } = useAuth();

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__container">
          {isAuth && (
            <div className="header__greetings">
              Здравствуйте,{" "}
              <AccountCircleOutlinedIcon sx={{ m: "0 3px 0 8px" }} />{" "}
              <div>{email}</div>
            </div>
          )}
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-content">
            <Link
              to={SHOP_ROUTE}
              style={{
                color: "darkorange",
                fontSize: "2.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              SHOP
            </Link>
            <ButtonGroup />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
