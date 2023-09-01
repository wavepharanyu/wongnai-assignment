import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './ButtonGroup.scss'
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

interface MyComponentProps  {
    choices: {
        label: string
    }[],
}

interface choiceType {
  label: string
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
  

const ButtonGroup = ({choices}: any) => {
  const [alignment, setAlignment] = React.useState("");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const renderChoice = (title: string, choices:choiceType[]) => {
    return(
      <div className="choice-container">
        <p className="choice-title">{title}</p>
      
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{flexWrap: 'wrap'}}
        >
          {choices.map((choice:{label:string}, index: number) => {
          return (
              <ToggleButton key={index} value={choice.label} sx={{marginRight: '0', border:"1px solid #ccc !important", borderRadius:'4px !important', fontSize:{xs:'0.7rem', sm:'0.8rem', md:'0.8rem', lg:'0.8rem', xl:'0.8rem'}  }}>{choice.label}</ToggleButton>
          );
          })}
            
        </ToggleButtonGroup>
  
      </div>
    )
  }

  return (
    <div className="buttonGroup-container">
       <ThemeProvider theme={theme}>
          {choices.egg && renderChoice('ชนิดไข่', choices.egg)}
          {choices.spicy && renderChoice('ระดับความเผ็ด', choices.spicy)}
          {choices.rice && renderChoice('ข้าว', choices.rice)}
          {choices.ice && renderChoice('เครื่องดื่ม', choices.ice)}
          {choices.sweet && renderChoice('ระดับความหวาน', choices.sweet)}
          {choices.other && renderChoice('อื่นๆ', choices.other)}
      </ThemeProvider>
 
      
    </div>
  );
};

export default ButtonGroup;
