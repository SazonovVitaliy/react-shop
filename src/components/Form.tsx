import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";

interface IFormProps {
  handleRegistration: (email: string, password: string) => void;
  handleLogin: (email: string, password: string) => void;
}

const Form: FC<IFormProps> = ({ handleRegistration, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "поле Email не должно быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "поле пароль не должно быть пустым"
  );
  const [signIn, setsignIn] = useState(false);
  const { isAuth } = useAuth();
  const setLoginEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный Email");
    } else {
      setEmailError("");
    }
  };
  const setLoginPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен содержать не менее 6 символов");
    } else {
      setPasswordError("");
    }
  };
  const setRegistrationEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный Email");
    } else {
      setEmailError("");
    }
  };
  const setRegistrationPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен содержать не менее 6 символов");
    } else {
      setPasswordError("");
    }
  };
  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  return signIn ? (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2>
        Зарегистрируйтесь или{" "}
        <Link
          onClick={() => setsignIn(false)}
          className="login__card-link"
          to={LOGIN_ROUTE}
        >
          выполните вход
        </Link>
      </h2>
      <div className="login__card">
        {emailDirty && emailError && (
          <div style={{ color: "darkorange" }}>{emailError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          className="login__card-input"
          name="email"
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={setRegistrationEmail}
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "darkorange" }}>{passwordError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          className="login__card-input"
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={setRegistrationPassword}
        />
        <Link
          className="login__card-button"
          to={isAuth ? SHOP_ROUTE : LOGIN_ROUTE}
          onClick={() => handleRegistration(email, password)}
        >
          Зарегистрироваться
        </Link>
      </div>
    </div>
  ) : (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2>
        Выполните вход или{" "}
        <Link
          onClick={() => setsignIn(true)}
          className="login__card-link"
          to={LOGIN_ROUTE}
        >
          зарегистрируйтесь
        </Link>
      </h2>
      <div className="login__card">
        {emailDirty && emailError && (
          <div style={{ color: "darkorange" }}>{emailError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          className="login__card-input"
          name="email"
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={setLoginEmail}
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "darkorange" }}>{passwordError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          className="login__card-input"
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={setLoginPassword}
        />
        {!isAuth ? (
          <Link
            className="login__card-button"
            onClick={() => handleLogin(email, password)}
            to={isAuth ? SHOP_ROUTE : LOGIN_ROUTE}
          >
            Войти
          </Link>
        ) : (
          <Link
            className="login__card-button"
            onClick={() => handleLogin(email, password)}
            to={isAuth ? SHOP_ROUTE : LOGIN_ROUTE}
          >
            Вернуться к покупкам
          </Link>
        )}
      </div>
    </div>
  );
};

export default Form;
