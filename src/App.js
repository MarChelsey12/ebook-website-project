import './App.css';
// Components imports
import Card from './components/Card';
import Chip from './components/Chip';
import NavBar from './components/NavBar';

// Theme imports
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes/mainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
    <NavBar/>  
      <Chip/>
      <hr/>
      <Card/>

    

    </ThemeProvider>
  );
}

export default App;
