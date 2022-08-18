import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const location = useLocation();
  const device: any = location.state;

  return (
    <div>
      <ProductCard key={device.id} device={device} />
    </div>
  );
};

export default Product;
