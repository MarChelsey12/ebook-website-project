import { createTheme } from '@mui/material/styles';

const themeOptions = 
{
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#86889a',
    },
    secondary: {
      main: '#74adb5',
    },
    error: {
      main: '#f44336',
    },
  },
};

const theme = createTheme(themeOptions);
  
export default theme