import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface MyComponentProps  {
    choices: {
        label: string
    }[],
}

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 350,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1400
      },
    },
  });
  

const ButtonGroup = ({choices}: MyComponentProps) => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="buttonGroup-container">
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{flexWrap: 'wrap'}}
        >
            {choices.map((choice, index) => {
            return (
                <ToggleButton key={index} value={choice.label} sx={{marginRight: '0', border:"1px solid #ccc !important", borderRadius:'4px !important', fontSize:{xs:'0.7rem', sm:'0.8rem', md:'0.9rem', lg:'1rem', xl:'1rem'}  }}>{choice.label}</ToggleButton>
            );
            })}
            
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
};

export default ButtonGroup;
