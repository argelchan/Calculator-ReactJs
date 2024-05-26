import { TextField, Grid, Box, Typography } from "@mui/material";
export default Calculator;
import { useEffect, useState } from "react";
import Display from "../Display/Display";
import ButtonCalculator from "../Buttons/ButtonCalculator";

function Calculator () {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const buttonValues = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];


  return (
    <Box sx={{
      p:2, 
      backgroundColor: '#101118', 
      borderRadius: 2, 
      width: '300px', 
      margin: '0 auto', 
      height: 'auto', 
      minHeight: '400px'}}>

      <Display onClick = {handleButtonClick}>
        {display}
      </Display>
      <Grid container spacing={0.5}>
        {buttonValues.flat().map((value, index) => (
          <Grid item xs={3} key={index}>
            <ButtonCalculator
              onClick={() => handleButtonClick(value)}>
              {value}
            </ButtonCalculator>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};