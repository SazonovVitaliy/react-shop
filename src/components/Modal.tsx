import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { basketActions } from "../store/slices/basketSlice";
interface IModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
const Modal: FC<IModalProps> = ({ visible, setVisible }) => {
  const { clearBasket } = basketActions;
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const rootClasses = ["modal"];
  if (visible) {
    rootClasses.push("active");
  }
  const handleCloseModal = () => {
    setVisible(false);
  };
  const handleConfirm = (e: any) => {
    alert(`${name} мы Вам перезвоним`);
    setVisible(false);
    setName("");
    setTel("");
    dispatch(clearBasket());
  };
  return (
    <div className={rootClasses.join(" ")} onClick={handleCloseModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="login__card-input"
          value={name}
          type="text"
          placeholder="Введите Ваше имя"
        />
        <input
          onChange={(e) => setTel(e.target.value)}
          className="login__card-input"
          value={tel}
          type="number"
          placeholder="Введите Ваш телефон"
        />
        <button className="buycard__btn" onClick={handleConfirm}>
          Подтвердить заказ
        </button>
      </div>
    </div>
  );
};

export default Modal;
