import './App.css';

// Theme imports
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes/mainTheme';

// Components imports
import Card from './components/Card';
import Chip from './components/Chip';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Dialogs from './components/Dialogs';
import ImageList from './components/ImageList';
import Rating from './components/HeartRating';

// API imports
import {CancelToken} from 'apisauce';
// import {getLogin} from './api/apiBasicAuth';
// import {postUser} from './api/apiUser';
// import {putUser} from './api/apiUser';
// import {deleteUser} from './api/apiUser';
import {getBooks} from './api/apiBook';

// Formik forms 
// import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';


/// lWv4FFLjByZQ8oicD-Gpid3GaHC0oFtiCXv6TOT9v18
const handleClick = async () => {
  const source = CancelToken.source();
//  const response_object = await getLogin('test@test.com','123', source.token);
//  const response_object = await postUser('test@test.com', 'chelsey', 'martinez', '123', source.token);
//  const response_object = await putUser('0wYEckF0U--JoSAJEvmuOFFMuaVRogE-e44N7cGZqj0', {password:'123123'}, source.token); 
//  const response_object = await deleteUser('0wYEckF0U--JoSAJEvmuOFFMuaVRogE-e44N7cGZqj0', source.token);
  const response_object = await getBooks(source.token);
console.log(response_object)
}

//token: "0wYEckF0U--JoSAJEvmuOFFMuaVRogE-e44N7cGZqj0"
//user_id: 22



function App() {
  return (
    <ThemeProvider theme={mainTheme}>
    <NavBar/>  
      <Chip/>
      <hr/>
      <Rating/>
      <Button onClick={handleClick}>Do API Call</Button>
      <hr/>
      <ImageList/>
      <hr/>
      <Dialogs/>

    

    </ThemeProvider>
  );
}

export default App;
