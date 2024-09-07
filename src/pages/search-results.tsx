import React from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const mockBusData = [
  {
    id: 1,
    company: 'Express Bus Co.',
    departure: '08:00 AM',
    arrival: '12:00 PM',
    duration: '4h',
    price: 'K15',
    from: 'City A',
    to: 'City B',
  },
  {
    id: 2,
    company: 'Quickline Travels',
    departure: '09:00 AM',
    arrival: '01:30 PM',
    duration: '4h 30m',
    price: 'K20',
    from: 'City A',
    to: 'City B',
  },
  {
    id: 3,
    company: 'Speedy Transport',
    departure: '10:00 AM',
    arrival: '02:00 PM',
    duration: '4h',
    price: 'K18',
    from: 'City A',
    to: 'City B',
  },
];

const SearchResults: React.FC = () => {
  const router = useRouter();
  const { from, to, date } = router.query;

  const handleBookNow = (id: number) => {
    router.push(`/book/K{id}`);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem', padding: '0 2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: '600', }}>
        Bus Search Results
      </Typography>
      <Typography variant="body1" gutterBottom textAlign="center" color="textSecondary">
        Buses from <strong>{from}</strong> to <strong>{to}</strong> on <strong>{date}</strong>.
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: '1rem' }}>
        {mockBusData.map((bus) => (
          <Grid item xs={12} key={bus.id}>
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                '&:hover': { boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DirectionsBusIcon color='primary' sx={{ fontSize: '2.5rem', marginRight: '1rem' }} />
                <Box>
                  <Typography variant="h6" component="h2" sx={{ fontWeight: '600', color: '#333' }}>
                    {bus.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {bus.from} <ArrowForwardIcon fontSize="small" /> {bus.to}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {bus.departure} - {bus.arrival} ({bus.duration})
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: '600',  }}>
                  {bus.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    borderRadius: '20px',
                    padding: '0.5rem 1.5rem',
                    marginTop: '0.5rem',
                   
                    '&:hover': { backgroundColor: '#0056b3' },
                  }}
                  onClick={() => handleBookNow(bus.id)}
                >
                  Book Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchResults;
