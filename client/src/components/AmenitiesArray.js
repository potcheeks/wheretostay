import React from "react";

import { makeStyles, Typography, TableCell, TableRow, TableBody } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

const AmenitiesArray = ({ property }) => {
  const classes = useStyles();

  return (

    <TableBody>
   
     
      <TableRow>
      <TableCell>{property.amenity_type} </TableCell>
      <TableCell>{property.name} </TableCell>
      <TableCell>{property.distance}m </TableCell>
      </TableRow>
      
 
    </TableBody>
  );
};

export default AmenitiesArray;
