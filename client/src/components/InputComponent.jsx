import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputComponent = ({ value, name, type, label, disabled, onChange }) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };
  return (
    <Box sx={{ width: 1 }} autoComplete="off">
      <TextField
        type={type ? type : "text"}
        disabled={disabled == true ? true : false}
        fullWidth
        onChange={handleChange}
        id={`outlined-${name}`}
        label={label}
        name={name}
        defaultValue={value}
        variant="outlined"
        autoComplete="off"
        InputLabelProps={{ shrink: value == "" ? false : true }}
      />
    </Box>
  );
};

export default InputComponent;
