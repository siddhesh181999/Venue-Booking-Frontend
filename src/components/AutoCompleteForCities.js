import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteForCities({cities}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-city"
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="City" />}
    />
  );
}
