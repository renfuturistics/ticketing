import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const SearchForm: React.FC = () => {
  // State to hold form input values
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  // Inside the SearchForm component
const router = useRouter();

const handleSearch = () => {
  if (!from || !to || !date) {
    alert('Please fill in all fields');
    return;
  }

  // Redirect to the search-results page with query parameters
  router.push({
    pathname: '/search-results',
    query: { from, to, date },
  });
};
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: '-4rem',
        backgroundColor: '#fff',
        boxShadow: 3,
        borderRadius: 2,
        padding: '2rem',
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom textAlign="center">
        Book Your Next Trip
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
            sx={{
              textTransform: 'none',
              borderRadius: '25px',
              transition: 'background 0.3s ease',
              '&:hover': { backgroundColor: '#1f2937' },
            }}
            onClick={handleSearch}
          >
            Search Buses
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchForm;
