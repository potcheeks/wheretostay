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

const Dropdown = ({ setPropertyName}) => {
  const classes = useStyles();

  const { data: propertyList } = useQuery(
    ["property-list"],
    async () => await axios("/directory")
  );

  const propertyData = propertyList?.data.map((property) => property);


  return (
    <div className={classes.addressDisplay}>

      <Autocomplete
        id="Property Name"
        noOptionsText={'Property is not found'}
        autoHighlight
        clearOnEscape
        options={propertyData}
        getOptionLabel={(option) => `${option.area}: ${option.name}`}
        onChange={(event, newValue) => {
          setPropertyName(newValue?.name);
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
        renderOption={(option) => option.name}
      />
    </div>
  );
};

export default Dropdown;
