import { SearchOutlined } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { FC } from "react";
import { IFilter } from "../../types";

interface ISearchProps {
  setFilter: (filter: IFilter) => void;
  filter: IFilter;
}
const Search: FC<ISearchProps> = ({ setFilter, filter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.target.value });
  };
  return (
    <div className="search">
      <TextField
        value={filter.query}
        onChange={handleChange}
        type="search"
        label="Поиск по сайту"
        className="search__field"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default Search;
