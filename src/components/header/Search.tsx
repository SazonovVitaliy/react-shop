import { SearchOutlined } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { FC } from "react";

interface ISearch {
  setQuery: (query: string) => void;
}
const Search: FC<ISearch> = ({ setQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search">
      <TextField
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
