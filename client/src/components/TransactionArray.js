import React from "react";

import { makeStyles, Typography, TableCell, TableRow, TableBody } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});


const TransactionArray = ({ property }) => {
  const classes = useStyles();

  return (
    <TableBody>
      {/* <Typography variant="h6" component="h2"> */}
      <TableRow>
        <TableCell>{JSON.stringify(property.date).slice(1, 11)}</TableCell>
        <TableCell>{property.unit_type} </TableCell>
        <TableCell>{property.units_rented}</TableCell>
        <TableCell>{property.units_sold}</TableCell>
        <TableCell>$ {property?.transacted_price?.price}</TableCell>
        <TableCell>{property?.transacted_price?.psf}</TableCell>
      </TableRow>
    {/* </Typography> */}
    </TableBody>
    
  );
};

export default TransactionArray;
