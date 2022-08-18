import { Box, List, ListItem } from "@mui/material";
import React, { FC } from "react";
import { IType } from "../types";

interface ITypeBarProps {
  types: IType[];
  setTypeFilter: (type: string) => void;
}
const TypeBar: FC<ITypeBarProps> = ({ types, setTypeFilter }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "150px",
        bgcolor: "white",
        borderRadius: 3,
        mt: "50px",
        //display: "inline-block",
        height: "fit-content",
        mx: "24px",
        cursor: "pointer",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {types.map((type) => (
            <ListItem
              onClick={() => setTypeFilter(type.type)}
              className="menu__list-item"
              key={type.id}
            >
              {type.type}
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default TypeBar;
