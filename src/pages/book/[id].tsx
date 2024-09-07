import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Box, Button, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const mockBusData = [
  {
    id: 1,
    company: 'Express Bus Co.',
    departure: '08:00 AM',
    arrival: '12:00 PM',
    duration: '4h',
    price: '$15',
    from: 'City A',
    to: 'City B',
  },
  {
    id: 2,
    company: 'Quickline Travels',
    departure: '09:00 AM',
    arrival: '01:30 PM',
    duration: '4h 30m',
    price: '$20',
    from: 'City A',
    to: 'City B',
  },
  {
    id: 3,
    company: 'Speedy Transport',
    departure: '10:00 AM',
    arrival: '02:00 PM',
    duration: '4h',
    price: '$18',
    from: 'City A',
    to: 'City B',
  },
];

const BookingPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isBooking, setIsBooking] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const bus = mockBusData.find((bus) => bus.id.toString() === id);

  if (!bus) {
    return (
      <Container maxWidth="md" sx={{ marginTop: '2rem', textAlign: 'center' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Bus not found.
        </Typography>
      </Container>
    );
  }

  const handleConfirmBooking = () => {
    setIsBooking(true);

    // Simulate a booking process with a timeout
    setTimeout(() => {
      setIsBooking(false);
      setIsConfirmed(true);
    }, 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '3rem' }}>
      <Card
        sx={{
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          '&:hover': { boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)' },
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <DirectionsBusIcon sx={{ fontSize: '2.5rem', color: '#007bff', marginRight: '1rem' }} />
            <Typography variant="h5" component="h2" sx={{ fontWeight: '600', color: '#333' }}>
              {bus.company}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: '1rem' }}>
            <Typography variant="body1" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <LocationOnIcon sx={{ marginRight: '0.5rem', color: '#007bff' }} /> From: <strong>&nbsp;{bus.from}</strong>
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <LocationOnIcon sx={{ marginRight: '0.5rem', color: '#007bff' }} /> To: <strong>&nbsp;{bus.to}</strong>
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <AccessTimeIcon sx={{ marginRight: '0.5rem', color: '#007bff' }} /> Departure: <strong>&nbsp;{bus.departure}</strong>
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <AccessTimeIcon sx={{ marginRight: '0.5rem', color: '#007bff' }} /> Arrival: <strong>&nbsp;{bus.arrival}</strong>
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <AccessTimeIcon sx={{ marginRight: '0.5rem', color: '#007bff' }} /> Duration: <strong>&nbsp;{bus.duration}</strong>
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: '600', color: '#333', marginBottom: '1rem' }}>
            <AttachMoneyIcon sx={{ marginRight: '0.5rem', color: '#007bff' }} />
            {bus.price}
          </Typography>

          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            {isConfirmed ? (
              <Alert severity="success">Booking Confirmed!</Alert>
            ) : (
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleConfirmBooking}
                disabled={isBooking}
                sx={{
                  textTransform: 'none',
                  borderRadius: '25px',
                  padding: '0.75rem 2rem',
                  backgroundColor: '#007bff',
                  '&:hover': { backgroundColor: '#0056b3' },
                }}
              >
                {isBooking ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Confirm Booking'}
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BookingPage;
