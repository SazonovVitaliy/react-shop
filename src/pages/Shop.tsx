import TypeBar from "../components/TypeBar";
import DevicesList from "../components/DevicesList";
import { useState } from "react";
import { types, devices } from "../data/product";
import Search from "./../components/header/Search";
import { useFilterDevices } from "./../hooks/useFilterDevices";
import Slider from "./../components/Slider";

const Shop = () => {
  const [filter, setFilter] = useState({ type: "", query: "" });
  const sortedAndSearchedDevices = useFilterDevices(devices, filter);

  return (
    <>
      <Search setFilter={setFilter} filter={filter} />
      <Slider />
      <div className="content">
        <TypeBar setFilter={setFilter} filter={filter} types={types} />
        <DevicesList devices={sortedAndSearchedDevices} />
      </div>
    </>
  );
};

export default Shop;
