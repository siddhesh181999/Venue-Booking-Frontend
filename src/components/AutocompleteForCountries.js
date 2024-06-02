import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteForCountries({countries, setCountries}) {
  return (
    <Autocomplete
      disablePortal
      onChange={(event, newInputValue) => {
        setCountries(newInputValue)
      }}
      id="combo-box-country"
      options={countries.map((x)=> x.country)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country"/>}
    />
  );
}
