import React from "react";
import { FC } from "react";
import { basketActions } from "../store/slices/basketSlice";
import { IDevice } from "../types";
import { useDispatch } from "react-redux";

interface ICounter {
  device: IDevice;
}
const Counter: FC<ICounter> = ({ device }) => {
  const dispatch = useDispatch();
  const { addToBasket, removeDevice } = basketActions;
  const addBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addToBasket(device));
  };
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    device.count > 1 && dispatch(removeDevice(device));
  };

  return (
    <div className="counter__wrapper">
      <div className="counter__content">
        <button onClick={handleRemove} className="counter__btn">
          -
        </button>
        {device.count}
        <button onClick={addBasket} className="counter__btn">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
