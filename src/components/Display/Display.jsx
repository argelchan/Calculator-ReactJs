import {useState} from "react";
import {Box, Typography, Button} from "@mui/material";
export default Display;

function Display(props) {

  const {onClick, children} = props

  return (
      <Box sx={{ mb: 2, p: 1, backgroundColor: '#292939', borderRadius: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ color: '#FFF' }}>{children || '0'}</Typography>
      <Button onClick={() => onClick('C')} sx={{ color: '#FFF' }}>C</Button>
    </Box>
  );
}