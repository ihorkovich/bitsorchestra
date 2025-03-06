import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface DropdownProps {
  status: string;
  setStatus: (value: string) => void;
}

export default function Dropdown({ status, setStatus }: DropdownProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel id="dropdown">Status</InputLabel>
        <Select
          value={status}
          label={"Status"}
          onChange={handleChange}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          }}
          sx={{
            color: "#122127",
            borderRadius: "0.5rem",
          }}
        >
          <MenuItem value={"active"}>Active</MenuItem>
          <MenuItem value={"inactive"}>Deactivated</MenuItem>
          <MenuItem value={"all"}>All</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
