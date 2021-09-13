import React from "react";

import { makeStyles, Typography, TableCell, TableRow } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

const AmenitiesArray = ({ property }) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" component="table">
      <TableRow>
        <TableCell>{property.amenity_type} </TableCell>
        <TableCell>{property.name} </TableCell>
        <TableCell>{property.distance}m </TableCell>
      </TableRow>
    </Typography>
  );
};

export default AmenitiesArray;
