import './App.css';

// Components imports
import BookCards from './components/BookCards';
import NavBar from './components/NavBar';
import Button from './components/Button';
import InfoPopup from './components/InfoPopup';
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
// import RegisterEditForm from './forms/RegisterEditForm';


// Views imports
import BookBrowser from './views/BookBrowser';

const handleClick = async () => {
  const source = CancelToken.source();
  const response_object = await getBooks(source.token);
console.log(response_object)
}


function App() {
  return (
    <>
      <NavBar/>  
      <hr/>
      <BookCards/>
      <Button onClick={handleClick}>Do API Call</Button>
      <hr/>
    </>
  );
}

export default App;
