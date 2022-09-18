import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  Rating,
  Tooltip,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { basketActions } from "../store/slices/basketSlice";
import { favouriteActions } from "../store/slices/favouritesSlice";
import { PRODUCT_ROUTE, SHOP_ROUTE } from "../utils/const";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IDevice } from "./../types";

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.favourites);
  const { removeFavourite } = favouriteActions;
  const { addToBasket } = basketActions;
  const dispatch = useDispatch();

  const calculatePrice = favourites.reduce((acc, curr) => acc + curr.price, 0);

  const handleFavDelete = (f: IDevice) => {
    dispatch(removeFavourite(f));
  };
  const addBasket = (f: IDevice) => {
    dispatch(addToBasket(f));
  };

  return (
    <>
      <div className="fav">
        <h1 className="title">Избранное</h1>
        {!favourites.length ? (
          <div>
            <h2 className="subtitle">
              В списке пока нет ни одного избранного товара
            </h2>
            <Link className="card__title" to={SHOP_ROUTE}>
              Перейти на главную страницу
            </Link>
          </div>
        ) : (
          <>
            <div>
              <Card
                sx={{
                  px: "10px",
                  minHeight: "30px",
                  my: "20px",
                  borderRadius: "8px",
                }}
              >
                {favourites.length > 1 ? (
                  <h4>
                    {favourites.length} товарa на сумму: {calculatePrice} $
                  </h4>
                ) : (
                  <h4>
                    {favourites.length} товар на сумму: {calculatePrice} $
                  </h4>
                )}
              </Card>
            </div>
            {favourites.map((f) => (
              <Card
                key={f.id}
                sx={{
                  minHeight: "auto",
                  p: "15px",
                  my: "15px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                }}
              >
                <div className="fav__card">
                  <CardMedia
                    component="img"
                    image={f.image}
                    alt={f.model}
                    sx={{
                      padding: "15px",
                      display: "flex",
                      maxHeight: "150px",
                      width: "auto",
                    }}
                  />
                  <Link
                    className="fav__card-title"
                    to={PRODUCT_ROUTE + f.id}
                    state={f}
                  >
                    <CardHeader className="fav__card-header" title={f.model} />
                  </Link>
                </div>
                <div>
                  <div className="card__block">
                    <Rating
                      className="card__raiting"
                      defaultValue={f.rating}
                      precision={0.5}
                      readOnly
                    />
                    <div className="card__price">{f.price} $</div>
                  </div>
                  <div className="favourites__buttons">
                    <Tooltip title="Убрать из избранного">
                      <DeleteOutlinedIcon
                        className="card__button-fav"
                        onClick={() => handleFavDelete(f)}
                      />
                    </Tooltip>
                    <Tooltip title="Добавить в корзину">
                      <Button
                        onClick={() => addBasket(f)}
                        className="card__button"
                      >
                        <ShoppingCartOutlinedIcon className="card__button-buy" />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </Card>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Favourites;
