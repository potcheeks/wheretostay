import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
   
        <Typography variant="h6" component="h2">
          <tr>
          <td>{property.amenity_type} </td>
          <td>{property.name}  </td>
          <td>{property.distance}m  </td>
          </tr>
         </Typography>
  
  )
}

export default AmenitiesArray;