import { AppBar, Container, Toolbar} from "@mui/material";

import ButtonGroup from "./ButtonGroup";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/const";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { email, isAuth } = useAuth();

  return (
    <header>
      <AppBar color="inherit">
        <div
          style={{
            backgroundColor: "darkorange",
            height: "33px",
            color: "white",
            position: "relative",
          }}
        >
          {isAuth && (
            <div
              style={{
                right: "20px",
                position: "absolute",
                display: "flex",
                marginTop: "5px",
              }}
            >
              Здравствуйте,{" "}
              <AccountCircleOutlinedIcon sx={{ m: "0 3px 0 8px" }} />{" "}
              <div>{email}</div>
            </div>
          )}
        </div>
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: "10px",
            }}
          >
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
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
