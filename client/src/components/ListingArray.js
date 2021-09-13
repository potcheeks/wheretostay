import React from "react";

import { makeStyles, Typography, TableCell, TableRow } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

const ListingArray = ({ property }) => {
  const classes = useStyles();

  return (
    // <Typography variant="h6" component="h2">
      <TableRow>
        <TableCell>{JSON.stringify(property.date).slice(1, 11)} </TableCell>
        <TableCell>{property.unit_type} </TableCell>
        <TableCell>{property.units_rented} </TableCell>
        <TableCell>{property.units_sold} </TableCell>
      </TableRow>
    // </Typography>
  );
};

export default ListingArray;
