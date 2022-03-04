import { createTheme } from '@mui/material/styles';


const themeOptions = 
{
    palette: {
      type: 'light',
      primary: {
        main: '#434762',
      },
      secondary: {
        main: '#5299a3',
      },
      error: {
        main: '#f44336',
      },
    },
  };

  const theme = createTheme(themeOptions);
  
  export default theme