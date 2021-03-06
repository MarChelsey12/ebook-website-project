import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useBooks from '../hooks/useBooks';

//const genres = [{id:1,genre:'Fantasy'},{id:2,genre:'Mystery'},{id:3,genre:'Drama'},{id:4,genre:'Romance'},{id:5,genre:'Adventure'},{id:6,genre:'Comedy'},{id:7,genre:'Thriller'}]
//use subjects as genre categories
export default function BookGenres({handleClick=()=>{}}) {
    const {error, books} = useBooks();
    const [actGen, setActGen]= useState({})
    
    const handleActGen=(gen)=>{
        if (actGen === gen){
            setActGen({})
        }else{
            setActGen(gen)
        }
    }

  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        {books?.map(
          (gen)=>(
            gen === actGen
            ? 
            <Chip key={gen.id} label={gen.subject} color="primary" onClick={()=>{handleActGen(gen); handleClick(gen);}}/>
            :
            <Chip key={gen.id} label={gen.subject} color="primary" variant="outlined" onClick={()=>{handleActGen(gen); handleClick(gen);}}/>
            )
        )}
    </Stack>
  </Stack> 
  );
}