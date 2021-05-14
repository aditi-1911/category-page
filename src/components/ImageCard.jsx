import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import category from '../static/category';
import { Collapse } from 'bootstrap';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    backgroundColor:'#5AFF3D',
    margin: '20px'
  },
  media: {
    width: 245,
    height: 240,
  },
  title:{
      fontFamily: 'Nunito',
      fontWeight:'bold',
      fontSize: '2rem',
      textAlign:'center'
  },
  desc:{
      textAlign:'center',
      color:'#282726',
      fontWeight:'bold'

  },
  btntext:{
    fontFamily: 'Nunito',
    textAlign:'center',
    alignItems:'center',
    color:'#282726',

  }
//   media:{
//     maxWidth: 645,
//   }
});

export default function ImageCard({category, checked}) {
  const classes = useStyles();

  return (
      //<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image= {category.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>

           {category.title}

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
           {category.desc}
          </Typography>
        </CardContent>
     
      <CardActions>
        <Button size="small" color="primary">
          <h5 className={classes.btntext}>Select</h5>
        </Button>
      </CardActions>
    </Card>


   // </Collapse>

    
  );
}
