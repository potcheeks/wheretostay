import { useQuery } from "react-query";
import axios from "axios";
import { Autocomplete } from "@material-ui/lab";
import { TextField, makeStyles } from "@material-ui/core/";

const useStyles = makeStyles({
  addressDisplay: {
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    justifyContent: "center",
    marginTop: "5%"
    
  },
});

const Dropdown = ({ setPropertyName, propertyName }) => {
  const classes = useStyles();

  const { data: propertyList } = useQuery(
    ["property-list"],
    async () => await axios("/directory")
  );

  const propertyData = propertyList?.data;
  const area = propertyData?.map((property) => property.area);
  

  return (
    <div className={classes.addressDisplay}>
      <Autocomplete
        id="Property Name"
        autoHighlight
        clearOnEscape
        options={propertyData
          ?.map((option) => option.name)
          .sort((a, b) => a.localeCompare(b))}
        // groupBy={(option) => option.area}
        getOptionLabel={(option) => option}
        onChange={(event, newValue) => {
          setPropertyName(newValue);
        }}
        style={{ width: "54%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search address project or building"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
};

export default Dropdown;
