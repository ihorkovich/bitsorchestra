import { Button } from "@mui/material";
import { ReactNode } from "react";

interface CustomButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
}

const CustomButton = ({ children, icon }: CustomButtonProps) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "#122127",
        borderRadius: "0.5rem",
        "&:hover": {
          backgroundColor: "#F1F7F9",
        },
        "@media (min-width: 769px)": {
          fontSize: "1rem",
        },
      }}
    >
      {icon && <span className="aspect-square w-3 md:w-5">{icon}</span>}
      {children}
    </Button>
  );
};

export default CustomButton;
