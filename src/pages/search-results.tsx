import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

interface Trip {
  _id: string;
  departureTime: string;
  seatsAvailable: number;
  price: number;
}

const SearchResultsPage: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const router = useRouter();
  const { from, to, date } = router.query;

  // Fetch available trips when the page loads
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('/api/trips', {
          params: { from, to, date }, // Send route and date as query params
        });
        setTrips(response.data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    if (from && to && date) {
      fetchTrips();
    }
  }, [from, to, date]);

  const handleSelectTrip = (tripId: string) => {
    // Redirect to the booking page for the selected trip
    router.push(`/book-trip/${tripId}`);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Trips from {from} to {to} on {date}
      </Typography>

      <Grid container spacing={4}>
        {trips.length > 0 ? (
          trips.map((trip) => (
            <Grid item xs={12} sm={6} md={4} key={trip._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Departure: {new Date(trip.departureTime).toLocaleTimeString()}
                  </Typography>
                  <Typography variant="body2">
                    Seats Available: {trip.seatsAvailable}
                  </Typography>
                  <Typography variant="body2">
                    Price: ${trip.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleSelectTrip(trip._id)}
                    sx={{ marginTop: '1rem' }}
                  >
                    Book This Trip
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            No trips available for the selected route and date.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default SearchResultsPage;
