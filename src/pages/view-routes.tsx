import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Route {
  origin: string;
  destination: string;
  _id:string
}

const ViewRoutesPage: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

  const router = useRouter();

  // Fetch available routes from the API
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get('http://localhost:8888/api/routes'); // Replace with your API endpoint
    
        setRoutes(response.data);
      } catch (error) {
        console.log(error)
        console.error('Error fetching routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  const handleSelectRoute = (route: Route) => {
    setSelectedRoute(route);
  };

  const handleBookTrip = () => {
    if (!selectedRoute ) {
      alert('Please select a route and date');
      return;
    }
  
    // Redirect to the search-results page with selected route ID, origin, destination, and date
    router.push({
        pathname: '/trips',
        query: {
          routeId: selectedRoute._id, // Pass the route ID
          from: selectedRoute.origin,
          to: selectedRoute.destination,
          
        },
      });
  };
  
  return (
    <Container>
      <Typography marginTop={3} variant="h4" component="h1" gutterBottom textAlign="center">
        Select a Route to Book a Trip
      </Typography>

      <Grid container sx={{marginBottom:"2rem"}} spacing={4}>
        {routes.map((route) => (
          <Grid item xs={12} sm={6} md={4} key={`${route.origin}-${route.destination}`}>
            <Card
              sx={{
                cursor: 'pointer',
                border: selectedRoute === route ? '2px solid #ff1744' : 'none',
              }}
              onClick={() => handleSelectRoute(route)}
            >
              <CardContent>
                <Typography variant="h6" component="h2">
                  {route.origin} → {route.destination}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Select this route to book a trip
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedRoute && (
        <Box sx={{ marginTop: '2rem',marginBottom:"2rem" }}>
          <Typography variant="h5" component="h2">
            Selected Route: {selectedRoute.origin} → {selectedRoute.destination}
          </Typography>

       

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleBookTrip}
            sx={{ marginTop: '1rem' }}
          >
            Search Trips for Selected Route
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default ViewRoutesPage;
