import React from "react";
import { makeStyles } from "@material-ui/core";

const ListingArray = ({property}) => {

 

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
   <td>{JSON.stringify(property.date).slice(1, 11)} </td>
        <td>{property.unit_type} </td>
        <td>{property.units_rented} </td>
        <td>{property.units_sold} </td>
   </tr>
  );
};

export default ListingArray;
