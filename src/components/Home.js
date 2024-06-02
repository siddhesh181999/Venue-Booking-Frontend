import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import AutocompleteForCountries from './AutocompleteForCountries';
import AutocompleteForCities from './AutoCompleteForCities';

function Home() {
  const[countries, setCountries] = useState([]);
  const[selectedCountry, setSelectedCountry] = useState("");
  useEffect(()=>{
    const fetchCountries = async() =>{
      await fetch('https://countriesnow.space/api/v0.1/countries')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let response = data.data;
        setCountries(response);
      })
    }
    fetchCountries();
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{ marginTop: '100px' }}> </div>
      <Grid container spacing={2}>
        <Grid xs={2.5}>
        </Grid>
        <Grid xs={3}>
          <AutocompleteForCountries countries={countries.length > 0 ? countries : []} setCountries={setSelectedCountry} />
        </Grid>
        <Grid xs={1} />
        <Grid xs={3}>
          <AutocompleteForCities cities={selectedCountry && countries.length > 0 ? countries.find((x)=> x.country === selectedCountry).cities : []} />
        </Grid>
        <Grid xs={2.5}>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
