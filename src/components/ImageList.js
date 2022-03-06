import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 800, height: "100%" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg',
    title: 'ALWAYS ASK A MAN: THE KEY TO FEMININITY',
    author: 'Arlene Dahl',
  },
  {
    img: 'https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg',
    title: 'ALWAYS ASK A MAN: THE KEY TO FEMININITY',
    author: 'Arlene Dahl',
  },
  {
    img: 'https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg',
    title: 'ALWAYS ASK A MAN: THE KEY TO FEMININITY',
    author: 'Arlene Dahl',
  },
  {
    img: 'https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg',
    title: 'ALWAYS ASK A MAN: THE KEY TO FEMININITY',
    author: 'Arlene Dahl',
  },
  {
    img: 'https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg',
    title: 'ALWAYS ASK A MAN: THE KEY TO FEMININITY',
    author: 'Arlene Dahl',
  },
  {
    img: 'https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg',
    title: 'ALWAYS ASK A MAN: THE KEY TO FEMININITY',
    author: 'Arlene Dahl',
  },
];