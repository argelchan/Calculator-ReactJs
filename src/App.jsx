import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import { Container, Box, Typography} from '@mui/material';
import Navbar from './components/Navbar/NavBar';
import './App.css'
import Calculator from './components/Calculator/Calculator'
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <>
      <Box sx={{background: '#101118'}}>
        <NavBar/>
        <Calculator/>
      </Box>
    </>
  )
}

export default App