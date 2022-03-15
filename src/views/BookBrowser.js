import {useState} from 'react';
import BookCards from '../components/BookCards';
import Popup from '../components/Popup';


export default function BookBrowser() {

    const[books, getBooks] = useState()

  return (
    <>
        {/* <Popup handelClick={(book)=>{getBooks(book)}} /> */}
        <BookCards/>
    </>
  )
}
