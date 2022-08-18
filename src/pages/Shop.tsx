import BrandsBar from "../components/BrandsBar";
import TypeBar from "../components/TypeBar";
import DevicesList from "../components/DevicesList";
import { useEffect, useState } from "react";
import { brands, types } from "../data/product";
import {
  useFetchAllDevicesQuery,
  useFetchByBrandDevicesQuery,
  useFetchByHandleSearchQuery,
  useFetchByTypeDevicesQuery,
} from "../services/devicesService";
import { IDevice } from "./../types";
import { CircularProgress } from "@mui/material";
import Search from "./../components/header/Search";

const Shop = () => {
  const [query, setQuery] = useState("");
  const [brandsFilter, setBrandsFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const { isLoading, data: devices = [] } = useFetchAllDevicesQuery(15);
  const [products = [], setProducts] = useState<IDevice[]>(devices);

  const { data: filteredByBrand = [] } =
    useFetchByBrandDevicesQuery(brandsFilter);
  const { data: filteredByType = [] } = useFetchByTypeDevicesQuery(typeFilter);
  const { data: filteredBySearchQuery } = useFetchByHandleSearchQuery(query);

  useEffect(() => {
    products.length !== 0 || setProducts(devices);
  }, [devices, products]);

  useEffect(() => {
    setProducts(filteredByBrand);
  }, [filteredByBrand]);
  useEffect(() => {
    setProducts(filteredByType);
  }, [filteredByType]);

  useEffect(() => {
    if (filteredBySearchQuery?.length) {
      setProducts(filteredBySearchQuery);
    }
  }, [filteredBySearchQuery]);

  return (
    <>
      <Search setQuery={setQuery} />
      <BrandsBar setBrandsFilter={setBrandsFilter} brands={brands} />
      <div className="list">
        <TypeBar setTypeFilter={setTypeFilter} types={types} />
        {isLoading ? (
          <CircularProgress
            sx={{ color: "darkorange", mx: "350px", my: "50px" }}
          />
        ) : (
          <DevicesList devices={products} />
        )}
      </div>
    </>
  );
};

export default Shop;
