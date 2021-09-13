import React, {useState} from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Autocomplete } from '@material-ui/lab';
import TextField from "@material-ui/core/TextField";


const Dropdown = () => {

  const { data: propertyList } = useQuery(
    ["property-list"],
    async () => await axios("/directory")
  );

  const propertyNameArr = propertyList?.data
  .map((property) => property.name)
  .sort((a, b) => a.localeCompare(b, { ignorePunctuation: true }));
  console.log(propertyNameArr)

  const [propertyName, setPropertyName] = useState()




  return (
    
       <Autocomplete
      id="Property Name"
      autoHighlight
      clearOnEscape
      options={propertyNameArr}
      getOptionLabel={(option) => option}
      onChange={(event, newValue) => {
        setPropertyName(newValue);
      }}
      style={{ width: "50%" }}
      renderInput={(params) => (
        <TextField {...params} label="Property Name" variant="outlined" />
      )}
    />
   
  )
}

export default Dropdown;
