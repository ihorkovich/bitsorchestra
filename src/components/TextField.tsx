import { TextField } from "@mui/material";

const CustomInput = ({
  label,
  name,
  value,
}: {
  label: string;
  name: string;
  value: string;
}) => {
  return (
    <TextField
      value={value}
      name={name}
      sx={{
        width: "100%",
        "& .MuiInputBase-root": {
          backgroundColor: "#F1F7F9",
          borderRadius: "0.5rem",
        },
        "& .MuiInputLabel-root": {
          color: "#122127",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#122127",
          },
          "&:hover fieldset": {
            borderColor: "#3A7DFF",
          },
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#3A7DFF",
        },
      }}
      label={label}
      required
    />
  );
};

export default CustomInput;
