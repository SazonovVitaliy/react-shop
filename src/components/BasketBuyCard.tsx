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
  console.log(visible);

  const calculatePrice = basket.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <Card className="buycard">
      <h3 className="buycard__title">Условия заказа</h3>
      <hr />
      <div className="buycard__content">
        <h5>Итого:</h5>
        <h4>
          {basket.length > 1 ? (
            <>
              {basket.length} товара на сумму: {calculatePrice} $
            </>
          ) : (
            <>
              {basket.length} товар на сумму: {calculatePrice} $
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
