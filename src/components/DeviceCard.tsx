import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Tooltip,
} from "@mui/material";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IDevice } from "../types";
import { PRODUCT_ROUTE } from "../utils/const";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { favouriteActions } from "../store/slices/favouritesSlice";
import { basketActions } from "./../store/slices/basketSlice";

interface IDeviceCard {
  device: IDevice;
}
const DeviceCard: FC<IDeviceCard> = ({ device }) => {
  const { favourites } = useAppSelector((state) => state.favourites);
  const { addFovourite, removeFavourite } = favouriteActions;
  const { addToBasket, deleteFromBasket } = basketActions;
  const [isFav, setIsFav] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  const dispatch = useAppDispatch();

  //!!const host = "http://localhost:3001/devices?image=";

  const addToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFav(true);

    console.log(favourites.includes(device));

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
    setIsBuy(true);
  };
  const removeFromBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteFromBasket(device));
    setIsBuy(false);
  };

  return (
    <Box sx={{ p: "10px", minWidth: "230px", position: "relative" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "auto",
        }}
      >
        <Link
          className="card__title"
          to={PRODUCT_ROUTE + device.id}
          state={device}
        >
          <CardHeader className="card__header" title={device.model} />
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={device.image}
            alt={device.model}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              objectFit: "cover",
              width: "auto",
            }}
          />
        </Box>
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
          {!isBuy && (
            <Tooltip title="Добавить в корзину">
              <Button onClick={addBasket} className="card__button">
                <ShoppingCartOutlinedIcon className="card__button-buy" />
              </Button>
            </Tooltip>
          )}
          {isBuy && (
            <Tooltip title="Убрать из корзины">
              <Button onClick={removeFromBasket} className="card__button">
                <ShoppingCartOutlinedIcon className="card__button-active" />
              </Button>
            </Tooltip>
          )}
        </div>
      </Card>
    </Box>
  );
};

export default DeviceCard;
