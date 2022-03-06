import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InfoIcon from '@mui/icons-material/Info';

let books = [{title:"Harry Potter", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam optio eligendi commodi."},{title:"Hunger Games", desc:"Esse aspernatur recusandae, quam rem ex cumque odit sed sequi maiores incidunt in ea ducimus quae totam sunt."},{title:"Lord of the Rings", desc:"Cumque necessitatibus laudantium incidunt eaque maxime optio eligendi quae, ipsa consectetur. Porro veniam temporibus a perferendis, consequuntur cum, asperiores provident quisquam esse cupiditate natus architecto!"}]

export default function MultiActionAreaCard() {
  
  return (
    <ImageList cols={4}>
    {books?.map((book) => ( 
      <ImageListItem key={books.title}>
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="275"
              image="https://placehold.co/400"
              alt="dummy"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap="true">
              {book.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="large" label="Add Bookmark" color="primary">
            <BookmarkAddIcon/>
            </IconButton>
            <IconButton size="large" lable="Mark as Read" color="primary">
              <AutoStoriesIcon/>
            </IconButton>
            <IconButton size="large" lable="Mor Info" color="primary">
              <InfoIcon/>
            </IconButton>
          </CardActions>
        </Card>
      </ImageListItem>
    ))}
    </ImageList>
  );
}
