import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import {
  makeStyles,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import ListingArray from "./ListingArray";
import TransactionArray from "./TransactionArray";
import AmenitiesArray from "./AmenitiesArray";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  // bullet: {
  //   display: "inline-block",
  //   margin: "0 2px",
  //   transform: "scale(0.8)",
  // },
  // title: {
  //   fontSize: 14,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
  table: {
    minWidth: 850,
  },
});

const AddressData = ({ propertyName }) => {
  const { data: propertyList } = useQuery(
    ["property-list"],
    async () => await axios("/directory")
  );

  const singlePropertyData = propertyList?.data?.filter(
    (property) => property.name === propertyName
  );

  const propertyTransactions = singlePropertyData?.[0]?.transactions;
  const propertyListings = singlePropertyData?.[0]?.listings;
  const amenitiesData = singlePropertyData?.[0]?.nearby_amenities;

  const classes = useStyles();

  return (
    <div>
      {propertyName ? (
        <>
          <Card className={classes.root}>
            <CardContent>
              
              <b>Address</b> <br/>
              {singlePropertyData[0]?.address?.street_address}{" "}
                {singlePropertyData[0]?.address?.postal_code} <br />
                Size: {singlePropertyData[0]?.size} sqft
           
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
            <b>Transactions</b>
              <Typography variant="h6" component="table">
                
                <Table>
                  <TableRow>
                    <TableCell>Date transacted</TableCell>
                    <TableCell>Unit type</TableCell>
                    <TableCell>Units rented</TableCell>
                    <TableCell>Units sold</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>psf</TableCell>
                  </TableRow>

                  {propertyTransactions?.map((property, index) => (
                    <TransactionArray
                      property={property}
                      key={index}
                      propertyName={propertyName}
                    />
                  ))}
                </Table>
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
            <b>Listings</b>
              <Typography variant="h6" component="table">
                
                <Table>
                  
                  <TableRow>
                    <TableCell>Date transacted</TableCell>
                    <TableCell>Unit type</TableCell>
                    <TableCell>Units rented</TableCell>
                    <TableCell>Units sold</TableCell>
                  </TableRow>

                  {propertyListings?.map((property, index) => (
                    <ListingArray
                      property={property}
                      key={index}
                      propertyName={propertyName}
                    />
                  ))}
                </Table>
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
            <b>Amenities</b>
              <Typography variant="h6" component="table">
                
                <Table>

                  <TableRow>
                    <TableCell>Amenity type</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Distance</TableCell>
                  </TableRow>

                  {amenitiesData?.map((property, index) => (
                    <AmenitiesArray
                      property={property}
                      key={index}
                      propertyName={propertyName}
                    />
                  ))}
                </Table>
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <h3>select property</h3>
      )}
    </div>
  );
};

export default AddressData;
