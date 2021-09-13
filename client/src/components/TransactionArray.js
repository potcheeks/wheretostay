import React from "react";
import { makeStyles } from "@material-ui/core";

const TransactionArray = ({property}) => {
  
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  return (
    <tr>
      <td>{JSON.stringify(property.date).slice(1,11)}</td>
      <td>{property.unit_type} </td>
      <td>{property.units_rented}</td>
      <td>{property.units_sold}</td>
      <td>$ {property?.transacted_price?.price}</td>
      <td>{property?.transacted_price?.psf}</td>
    </tr>
  )
}

export default TransactionArray;
