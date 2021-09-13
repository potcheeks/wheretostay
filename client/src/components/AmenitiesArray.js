import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const AmenitiesArray = ({property, index, propertyName}) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {property.amenity_type} <br/>
          {property.name} <br/>
          {property.distance}m <br/>
         </Typography>
      </CardContent>
    </Card>
  )
}

export default AmenitiesArray;