import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const CustomAutoComplete = styled(Autocomplete)`
  input {
    color: #fff616;
  }
  outline: none;

  label {
    color: #2de9ff;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #fff616;
  }

  .notchedOutline {
    
  }

  height: max-content;

  &:hover,
  &:active {
    * {
      outline: none;
      border-color: white;
      outline-color: white;
    }
  }
`;

export const CustomInput = styled(TextField)`
  input {
    color: #fff616;
  }
  outline: none;

  label {
    color: #2de9ff;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #fff616;
  }

  height: max-content;

  &:hover,
  &:active {
    * {
      outline: none;
      border-color: white;
      outline-color: white;
    }
  }
`;
