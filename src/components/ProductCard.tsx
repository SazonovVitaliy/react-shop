import { Button, Tooltip } from "@mui/material";
import React, { FC, useState, useEffect } from "react";
import { IDevice } from "../types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch } from "react-redux";
import { basketActions } from "../store/slices/basketSlice";
import {
  favouriteActions,
  LS_FAV_DEV,
} from "./../store/slices/favouritesSlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface IProduct {
  device: IDevice;
}
const ProductCard: FC<IProduct> = ({ device }) => {
  const dispatch = useDispatch();
  const { addToBasket } = basketActions;
  const { addFovourite, removeFavourite } = favouriteActions;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const devices = JSON.parse(localStorage.getItem(LS_FAV_DEV) || "");
    for (let dev of devices) {
      if (dev.id === device.id) {
        setIsFav(true);
      }
    }
  }, []);
  const addBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addToBasket(device));
  };
  const addToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFav(true);
    dispatch(addFovourite(device));
  };
  const removeFromFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removeFavourite(device));
    setIsFav(false);
  };

  return (
    <div className="product__card">
      <h2>{device.model}</h2>
      <div className="product__card-description">
        <img src={device.image} alt={device.model} />
        <div className="product__description">{device.description}</div>
      </div>
      <div className="product__card-block">
        <div className="product__card-price">{device.price} $</div>
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
  );
};

export default ProductCard;
