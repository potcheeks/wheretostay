import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ListingArray from "./ListingArray";
import TransactionArray from "./TransactionArray";
import AmenitiesArray from './AmenitiesArray';

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
  console.log("this is info from single property", singlePropertyData);

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

          {propertyTransactions?.map((property, index) => (
            <>
              Transactions:
              <TransactionArray
                property={property}
                key={index}
                propertyName={propertyName}
              />
            </>
          ))}

          {propertyListings?.map((property, index) => (
            <>
              Listings:
              <ListingArray
                property={property}
                key={index}
                propertyName={propertyName}
              />
            </>
          ))}

          {amenitiesData?.map((property, index) => (
            <>
              Amenities:
              <AmenitiesArray
                property={property}
                key={index}
                propertyName={propertyName}
              />
            </>
          ))}

        </>
      ) : (
        <h1>select property</h1>
      )}
    </div>
  );
};

export default AddressData;
