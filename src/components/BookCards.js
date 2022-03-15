import React, {useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useBooks from '../hooks/useBooks';
import Error from './Error';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard() {
  const {error, books} = useBooks();
  const {addToReadingList, markAsRead} = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);

  const handleAddToReadingList =(books)=>{
    addToReadingList(books)
  };
  const handleMarkAsRead =(books)=>{
    markAsRead(books)
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Title"
        subheader="Auth"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
                aria-label="add to reading list"
                onClick={()=>{handleAddToReadingList(books)}}>
          <PlaylistAddIcon />
        </IconButton>
        <IconButton 
                aria-label="remove from reading list"
                onClick={()=>{handleMarkAsRead(books)}}>
          <PlaylistRemoveIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <InfoIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}