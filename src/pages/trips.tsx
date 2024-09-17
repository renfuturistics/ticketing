import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, TextField, FormHelperText } from '@mui/material';
import axios from 'axios';
import { Box, display, height } from '@mui/system';

interface Trip {
  _id: string;
  startDateTime: string;
  stops: { name: string; order: number }[];
  seatsAvailable: number;
  direction: string;
}

const fetchTripsByRouteId = async (routeId: string) => {
  try {
    const response = await axios.get(`http://localhost:8888/api/trip/route/${routeId}`);
    return response.data; // List of trips
  } catch (error) {
    console.error('Error fetching trips:', error);
    return [];
  }
};

const TripsPage: React.FC = () => {
  const router = useRouter();
  const { routeId } = router.query;
  const [trips, setTrips] = useState<Trip[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [open, setOpen] = useState(false);
  const [boardingStop, setBoardingStop] = useState('');
  const [alightingStop, setAlightingStop] = useState('');
  const [seats, setSeats] = useState(1);

  useEffect(() => {
    const getTrips = async () => {
      if (routeId) {
        const fetchedTrips = await fetchTripsByRouteId(routeId as string);
        setTrips(fetchedTrips);
      }
    };
    getTrips();
  }, [routeId]);

  const handleOpenDialog = (trip: Trip) => {
    setSelectedTrip(trip);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setBoardingStop('');
    setAlightingStop('');
    setSeats(1);
  };

  const handleBookTrip = async () => {
    if (!boardingStop || !alightingStop) {
      alert('Please select both boarding and alighting stops');
      return;
    }

    if (seats <= 0 || seats > selectedTrip!.seatsAvailable) {
      alert('Please select a valid number of seats');
      return;
    }

    try {
      // Send booking request to the server
      const response = await axios.post('http://localhost:8888/api/booking', {
        trip: selectedTrip!._id,
        boardingStop,
        alightingStop,
        seatsBooked: seats,
        price: 50 * seats, // Assuming a fixed price per seat for now
        passenger: 'somePassengerId', // Replace with the actual passenger ID
        paymentStatus: 'pending',
      });

      const data = response.data
      // Redirect to booking confirmation or a success page
      router.push({
        pathname: '/booking-success',
        query: {
          bookingId: data._id,
          tripId: selectedTrip!._id,
          boardingStop,
          alightingStop,
          seatsBooked: seats,
          passengerName: "John Doe", // Assuming you have the user's name available
          startDateTime: selectedTrip!.startDateTime,
        },
      });

    } catch (error) {
      console.error('Error booking trip:', error);
    }

    handleCloseDialog();
  };

  return (
    <Container>
      <Typography marginBottom={3} variant="h4" gutterBottom>
        Available Trips for the Route
      </Typography>

      <Grid container spacing={4}>
        {trips.length > 0 ? (
          trips.map((trip) => (
            <Grid item xs={12} sm={6} md={4} key={trip._id}>
              <Card  >
                <CardContent >
                  <Typography sx={{marginBottom:"2px"}} variant="h6">
                    Departure: {new Date(trip.startDateTime).toLocaleString()}
                  </Typography>
                  <Typography sx={{marginBottom:"2px"}} variant="body2">
                    Direction: {trip.direction}
                  </Typography>
                  <Typography sx={{marginBottom:"2px"}} variant="body2">
                    Seats Available: {trip.seatsAvailable}
                  </Typography>
                  <Typography sx={{marginBottom:"2px"}} variant="body2">
                    Stops: {trip.stops.map((stop) => stop.name).join(', ')}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleOpenDialog(trip)}
                    sx={{ marginTop: '1rem' }}
                  >
                    Book This Trip
                  </Button>
                </CardContent>
              </Card>
            </Grid>

          ))
        ) : (
          <Box sx={{width: "100%", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant='body1' fontWeight={600} fontSize={18}>No trips available for this route.</Typography>
        </Box>
        
        )}
      </Grid>

      {/* Dialog for Booking */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Book Trip</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Boarding Stop</InputLabel>
            <Select
              value={boardingStop}
              onChange={(e) => setBoardingStop(e.target.value as string)}
            >
              {selectedTrip?.stops.map((stop) => (
                <MenuItem key={stop.name} value={stop.name}>
                  {stop.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Select the stop where you will board the bus. Ensure you choose the correct stop.
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Alighting Stop</InputLabel>
            <Select
              value={alightingStop}
              onChange={(e) => setAlightingStop(e.target.value as string)}
            >
              {selectedTrip?.stops.map((stop) => (
                <MenuItem key={stop.name} value={stop.name}>
                  {stop.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Select the stop where you will get off. Make sure it's the right one.
            </FormHelperText>
          </FormControl>

          <TextField
            label="Seats"
            type="number"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            fullWidth
            margin="normal"
            inputProps={{ min: 1, max: selectedTrip?.seatsAvailable }}
          />
          <FormHelperText>
            Enter the number of seats you want to book. Ensure it doesn’t exceed the available seats.
          </FormHelperText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleBookTrip}>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default TripsPage;
