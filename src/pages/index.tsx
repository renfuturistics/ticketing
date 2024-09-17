// pages/index.tsx
import React from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Card, CardContent, CardMedia, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SearchBuses from '@/components/SearchBuses';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter()
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
       
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '6rem 0',
          textAlign: 'center',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
      
            zIndex: 1,
          },
          '& *': {
            zIndex: 2,
            position: 'relative',
          },
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Travel Comfortably, Book Easily
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Discover the easiest way to book your bus tickets online.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={()=>{
             router.push('/view-routes')
            }}
            sx={{ marginTop: '2rem', textTransform: 'none', borderRadius: '25px', transition: 'background 0.3s ease', '&:hover': { backgroundColor: '#1f2937' } }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

   

      {/* Featured Buses */}
      <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Popular Routes
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/kitwe.jpg"
                alt="Route 1"
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Lusaka to Kitwe
                </Typography>
                <Typography variant="body1">
                  Enjoy a smooth journey with daily departures and reliable buses.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/livingstone.jpg"
                alt="Route 2"
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Lusaka to Livingstone
                </Typography>
                <Typography variant="body1">
                  Experience the best comfort on your way to the tourism capital.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/lusaka.webp"
                alt="Route 3"
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Ndola to Lusaka
                </Typography>
                <Typography variant="body1">
                  Frequent departures and competitive prices for your convenience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Why Book With Us?
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={4} textAlign="center">
            <BusAlertIcon sx={{ fontSize: 50, color: '#232f3e' }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Safe and Reliable
            </Typography>
            <Typography variant="body1">
              Travel with confidence knowing we partner with only the best bus operators.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <ThumbUpIcon sx={{ fontSize: 50, color: '#232f3e' }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Trusted by Thousands
            </Typography>
            <Typography variant="body1">
              Join thousands of satisfied customers who book their tickets with us daily.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <EventAvailableIcon sx={{ fontSize: 50, color: '#232f3e' }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Flexible Booking
            </Typography>
            <Typography variant="body1">
              Enjoy the flexibility to change your travel plans with easy cancellations and rescheduling.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
  <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
    What Our Customers Say
  </Typography>

  <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            &quot;The booking process was so smooth and easy. I&apos;ll definitely use this service again!&quot;
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            - Jane Doe
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            &quot;Excellent service and on-time departures. Highly recommend!&quot;
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            - John Smith
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            &quot;A very convenient way to book tickets. I saved a lot of time.&quot;
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            - Alice Johnson
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Container>



   
    </Box>
  );
};

export default Home;
