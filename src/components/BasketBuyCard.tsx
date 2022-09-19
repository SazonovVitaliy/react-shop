import React, { FC, useState } from "react";
import { Card } from "@mui/material";
import { IDevice } from "../types";
import Modal from "./Modal";

interface BuyCardProps {
  basket: IDevice[];
}

const BasketBuyCard: FC<BuyCardProps> = ({ basket }) => {
  const [visible, setVisible] = useState(false);
  const handleModal = () => {
    setVisible(true);
  };

  const goods = basket.reduce((acc, curr) => acc + curr.count, 0);
  console.log(goods);

  const calculatePrice = basket.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );
  return (
    <Card className="buycard">
      <h3 className="buycard__title">Условия заказа</h3>
      <hr />
      <div className="buycard__content">
        <h5 className="subtitle">Итого:</h5>
        <h4>
          {goods > 1 ? (
            <>
              {goods} товара на сумму: {calculatePrice} $
            </>
          ) : (
            <>
              {goods} товар на сумму: {calculatePrice} $
            </>
          )}
        </h4>
      </div>
      <div className="buycard__button">
        <button className="buycard__btn" onClick={handleModal}>
          Перейти к оформлению
        </button>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
    </Card>
  );
};

export default BasketBuyCard;
