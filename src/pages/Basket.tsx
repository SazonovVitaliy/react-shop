import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { PRODUCT_ROUTE, SHOP_ROUTE } from "../utils/const";
import { Card, CardHeader, CardMedia, Tooltip } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IDevice } from "./../types";
import { basketActions } from "./../store/slices/basketSlice";
import { useDispatch } from "react-redux";
import BasketBuyCard from "../components/BasketBuyCard";

const Basket = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useDispatch();
  const { deleteFromBasket } = basketActions;

  console.log(basket);

  const handleBasketDelete = (device: IDevice) => {
    dispatch(deleteFromBasket(device));
  };
  return (
    <>
      <div className="basket">
        <h1>Корзина</h1>
        {!basket.length && (
          <div>
            <h2>В корзине пока нет товаров </h2>
            <Link className="card__title" to={SHOP_ROUTE}>
              Перейти на главную страницу
            </Link>
          </div>
        )}
        {!!basket.length && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2.5fr 1fr",
              gap: "2rem",
            }}
          >
            <div>
              {basket.map((device) => (
                <Card
                  key={device.id}
                  sx={{
                    px: "10px",
                    minHeight: "150px",
                    my: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="fav__card">
                    <CardMedia
                      component="img"
                      image={device.image}
                      alt={device.model}
                      sx={{
                        height: "auto",
                        width: "auto",
                        justifyContent: "center",
                      }}
                    />
                    <Link
                      className="fav__card-title"
                      to={PRODUCT_ROUTE + device.id}
                      state={ device }
                    >
                      <CardHeader
                        className="fav__card-header"
                        title={device.model}
                      />
                    </Link>
                  </div>
                  <div className="favourites__buttons">
                    <Tooltip title="Удалить из корзины">
                      <DeleteOutlinedIcon
                        className="card__button-fav"
                        onClick={() => handleBasketDelete(device)}
                      />
                    </Tooltip>
                  </div>
                </Card>
              ))}
            </div>
            <BasketBuyCard basket={basket} />
          </div>
        )}
      </div>
    </>
  );
};

export default Basket;
