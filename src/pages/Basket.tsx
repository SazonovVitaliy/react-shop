import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { PRODUCT_ROUTE, SHOP_ROUTE } from "../utils/const";
import { Card, CardHeader, CardMedia, Rating, Tooltip } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IDevice } from "./../types";
import { basketActions } from "./../store/slices/basketSlice";
import { useDispatch } from "react-redux";
import BasketBuyCard from "../components/BasketBuyCard";
import { FC } from "react";
import Counter from "../components/Counter";

const Basket: FC = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useDispatch();
  const { deleteFromBasket } = basketActions;
  const handleBasketDelete = (device: IDevice) => {
    dispatch(deleteFromBasket(device));
  };

  return (
    <>
      <div className="basket">
        <h1 className="title">Корзина</h1>
        {!basket.length && (
          <div>
            <h2>В корзине пока нет товаров </h2>
            <Link className="card__title" to={SHOP_ROUTE}>
              Перейти на главную страницу
            </Link>
          </div>
        )}
        {!!basket.length && (
          <div className="basket__content">
            <div>
              {basket.map((device) => (
                <Card
                  className="baket__card"
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
                      state={device}
                    >
                      <CardHeader
                        className="fav__card-header"
                        title={device.model}
                      />
                    </Link>
                  </div>
                  <Counter device={device} />
                  <div className="favourites__buttons">
                    <div className="card__block">
                      <Rating
                        className="card__raiting"
                        defaultValue={device.rating}
                        precision={0.5}
                        readOnly
                      />
                      <div className="card__price">
                        {device.price * device.count} $
                      </div>
                    </div>
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
