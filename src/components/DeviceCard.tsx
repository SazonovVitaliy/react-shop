import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Rating,
  Tooltip,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IDevice } from "../types";
import { PRODUCT_ROUTE } from "../utils/const";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch } from "../hooks/redux";
import { favouriteActions } from "../store/slices/favouritesSlice";
import { basketActions } from "./../store/slices/basketSlice";
import { LS_FAV_DEV } from "./../store/slices/favouritesSlice";

interface IDeviceCard {
  device: IDevice;
}
const DeviceCard: FC<IDeviceCard> = ({ device }) => {
  const { addFovourite, removeFavourite } = favouriteActions;
  const { addToBasket } = basketActions;
  const [isFav, setIsFav] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favDevices = JSON.parse(localStorage.getItem(LS_FAV_DEV) || "[]");
    for (let dev of favDevices) {
      if (dev.id === device.id) {
        setIsFav(true);
      }
    }
  }, []);

  const addToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFav(true);
    dispatch(addFovourite(device));
  };

  const removeFromFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFav(false);
    dispatch(removeFavourite(device));
  };

  const addBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addToBasket(device));
  };

  return (
    <Box sx={{ mb: "15px" }}>
      <Card
        className="devicecard__content"
        sx={{
          display: "flex",
          minHeight: "auto",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <CardMedia
          className="devicecard__image"
          component="img"
          image={device.image}
          alt={device.model}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
            objectFit: "cover",
            width: "auto",
            padding: "15px",
          }}
        />
        <div className="card__content">
          <Link
            className="card__title"
            to={PRODUCT_ROUTE + device.id}
            state={device}
          >
            <CardHeader className="card__header" title={device.model} />
            <div className="card__block">
              <Rating
                className="card__raiting"
                defaultValue={device.rating}
                precision={0.5}
                readOnly
              />
              <div className="card__price">{device.price} $</div>
            </div>
          </Link>
          <div>
            <div className="card__buttons">
              {!isFav && (
                <Tooltip title="Добавить в избранное">
                  <Button onClick={addToFav} className="card__button">
                    <FavoriteBorderOutlinedIcon className="card__button-fav" />
                  </Button>
                </Tooltip>
              )}
              {isFav && (
                <Tooltip title="Убрать из избранного">
                  <Button onClick={removeFromFav} className="card__button">
                    <FavoriteBorderOutlinedIcon className="card__button-active" />
                  </Button>
                </Tooltip>
              )}
              <Tooltip title="Добавить в корзину">
                <Button onClick={addBasket} className="card__button">
                  <ShoppingCartOutlinedIcon className="card__button-buy" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default DeviceCard;
