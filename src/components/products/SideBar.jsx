import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProduct();
  useEffect(() => {
    getCategories();
  }, []);
  //! search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  return (
    <Paper sx={{ p: 2, margin: "25px" }}>
      <TextField
        fullWidth
        label="search..."
        variant="standard"
        onChange={(e) => setSearch(e.target.value)}
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("category", e.target.value)}
        >
          <FormControlLabel value={"all"} control={<Radio />} label="ALL" />
          {categories.map((elem) => (
            <FormControlLabel
              key={elem.id}
              value={elem.name}
              label={elem.name}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
