
import { useQuery } from "react-query";
import axios from "axios";
import { Autocomplete } from '@material-ui/lab';
import TextField from "@material-ui/core/TextField";


const Dropdown = ({setPropertyName, propertyName}) => {

  const { data: propertyList } = useQuery(
    ["property-list"],
    async () => await axios("/directory")
  );

  const propertyData = propertyList?.data
  const area = propertyData?.map((property) => property.area)
  console.log(area)


  console.log("propertyName", propertyName)




  return (
    
       <Autocomplete
      id="Property Name"
      autoHighlight
      clearOnEscape
      options={propertyData?.map((option) => option.name).sort((a, b) => a.localeCompare(b))}
      // groupBy={(option) => option.area}
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
