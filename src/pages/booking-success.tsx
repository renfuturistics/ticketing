import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, Typography, Button, Divider, Container } from '@mui/material';

const BookingSuccess: React.FC = () => {
  const router = useRouter();
  const { bookingId, tripId, boardingStop, alightingStop, seatsBooked, passengerName, startDateTime } = router.query;

  const handleGoToHomePage = () => {
    router.push('/');
  };

  return (
    <Container sx={{ marginTop: '2rem', maxWidth: '600px' }}>
      <Card sx={{ padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Booking Confirmed
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Booking ID: {bookingId}
          </Typography>

          <Divider sx={{ marginY: '1rem' }} />

          <Typography variant="h6" gutterBottom>
            Passenger: {passengerName}
          </Typography>

          <Typography variant="h6" gutterBottom>
            Trip Date: {new Date(startDateTime as string).toLocaleString()}
          </Typography>

          <Typography variant="body1">
            <strong>Boarding Stop:</strong> {boardingStop}
          </Typography>

          <Typography variant="body1">
            <strong>Alighting Stop:</strong> {alightingStop}
          </Typography>

          <Typography variant="body1">
            <strong>Seats Booked:</strong> {seatsBooked}
          </Typography>

          <Divider sx={{ marginY: '1rem' }} />

          <Typography variant="h6" gutterBottom>
            Trip ID: {tripId}
          </Typography>

          <Divider sx={{ marginY: '1rem' }} />

          <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
            Please arrive at least 15 minutes before departure. Have a safe journey!
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: '1rem' }}
            onClick={handleGoToHomePage}
          >
            Return to Homepage
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BookingSuccess;
