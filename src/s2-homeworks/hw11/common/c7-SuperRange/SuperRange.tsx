import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: "156px",
        borderRadius: "10px",
        color: "#00CC22",
        "& .MuiSlider-thumb": {
          height: 18,
          width: 18,
          backgroundColor: "#fff",
          border: "1px solid currentColor",

          "&:before": {
            contain: "",
            width: 6,
            height: 6,
            backgroundColor: "currentColor",
          },
        },
        "& .MuiSlider-rail": {
          opacity: 0.5,
          boxShadow: "inset 0px 0px 4px -2px #000",
          backgroundColor: "#8B8B8B",
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
