import React, { FC } from "react";
import { IBrand } from "../types";
import { List, ListItem } from "@mui/material";

interface IBrandsProps {
  brands: IBrand[];
  setBrandsFilter: (brand: string) => void;
}
const BrandsBar: FC<IBrandsProps> = ({ brands, setBrandsFilter }) => {
  return (
    <List className="brands-bar">
      {brands.map((brand) => (
        <ListItem
          sx={{
            margin: "-8px 0px",
            justifyContent: "center",
            maxWidth: "fit-content",
            cursor: "pointer",
          }}
          onClick={() => setBrandsFilter(brand.brand)}
          className="menu__list-item"
          key={brand.id}
        >
          {brand.brand}
        </ListItem>
      ))}
    </List>
  );
};

export default BrandsBar;
