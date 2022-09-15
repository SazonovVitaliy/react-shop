import { List, ListItem } from "@mui/material";
import React, { FC } from "react";
import { IFilter, IType } from "../types";

interface ITypeBarProps {
  types: IType[];
  setFilter: (filter: IFilter) => void;
  filter: IFilter;
}
const TypeBar: FC<ITypeBarProps> = ({ types, setFilter, filter }) => {
  return (
    <aside className="typebar">
      <nav className="typebar__nav" aria-label="main mailbox folders">
        <List className="typebar__list">
          {types.map((type) => (
            <ListItem
              onClick={() => setFilter({ ...filter, type: type.type })}
              className="menu__list-item"
              key={type.id}
            >
              <img src={type.url} alt="icon" style={{ paddingRight: "10px" }} />{" "}
              {type.type}
            </ListItem>
          ))}
        </List>
      </nav>
    </aside>
  );
};

export default TypeBar;
