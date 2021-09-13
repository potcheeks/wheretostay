import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";
import { Card } from '@material-ui/core';


const AddressData = ({propertyName}) => {

  const { data: propertyList } = useQuery(
    ["property-list"],
    async () => await axios("/directory")
  );


  const singlePropertyData = propertyList?.data?.filter((property) => property.name === propertyName)
  console.log("this is info from single property", singlePropertyData);

  return (
    <div>
      <h1>{propertyName}</h1>
      {propertyName ? singlePropertyData[0]?.address?.street_address : <h1>select property</h1>}
     
    </div>
  )
}

export default AddressData;
