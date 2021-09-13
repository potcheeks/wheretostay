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
} from "@material-ui/core";

import ListingArray from "./ListingArray";
import TransactionArray from "./TransactionArray";
import AmenitiesArray from "./AmenitiesArray";

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
              <Typography variant="h6" component="h2">
                Address: {singlePropertyData[0]?.address?.street_address}{" "}
                {singlePropertyData[0]?.address?.postal_code} <br />
                Size: {singlePropertyData[0]?.size} sqft
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6" component="h2">
                <b>Transactions</b>
                <table class="transactions">
                <tr>
                    <td>Date transacted</td>
                    <td>Unit type</td>
                    <td>Units rented</td>
                    <td>Units sold</td>
                    <td>Price</td>
                    <td>psf</td>
                  </tr>

                {propertyTransactions?.map((property, index) => (
                  <TransactionArray
                    property={property}
                    key={index}
                    propertyName={propertyName}
                  />
                ))}
                </table>
                
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6" component="h2">
                <b>Listings</b>
                <table class="listings">
                  <tr>
                    <td>Date transacted</td>
                    <td>Unit type</td>
                    <td>Units rented</td>
                    <td>Units sold</td>
                  </tr>
                  
                  {propertyListings?.map((property, index) => (
                  <ListingArray
                    property={property}
                    key={index}
                    propertyName={propertyName}
                  />
                ))}
                 
                
                </table>
                
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6" component="h2">
                <b>Amenities</b>
                <table class="amenities">
                {amenitiesData?.map((property, index) => (
                  <AmenitiesArray
                    property={property}
                    key={index}
                    propertyName={propertyName}
                  />
                ))}
                </table>
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
