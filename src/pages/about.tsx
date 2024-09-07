import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '3rem' }}>
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
            <InfoIcon sx={{ fontSize: '2.5rem', color: '#007bff', marginRight: '1rem' }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: '600', color: '#333' }}>
              About Us
            </Typography>
          </Box>

          <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '1rem' }}>
  Welcome to our Bus Ticketing App! We are dedicated to providing a convenient, reliable, and efficient service
  for booking bus tickets online. Whether you&apos;re planning a short trip or a long journey, we&apos;ve got you
  covered with a wide range of bus options to suit your needs.
</Typography>

<Typography variant="body1" color="textSecondary" sx={{ marginBottom: '1rem' }}>
  Our mission is to simplify the way you travel by connecting you with trusted bus operators and providing a
  seamless booking experience. With our app, you can easily search for buses, compare prices, and book your
  tickets in just a few clicks.
</Typography>

<Typography variant="body1" color="textSecondary" sx={{ marginBottom: '1rem' }}>
  We believe in making travel accessible to everyone, which is why we work hard to offer the best deals and
  ensure that your journey is as smooth as possible. Thank you for choosing us as your travel partner. We look
  forward to serving you!
</Typography>

<Typography variant="h6" sx={{ fontWeight: '600', color: '#333', marginTop: '2rem' }}>
  Our Values:
</Typography>
<Typography variant="body1" color="textSecondary" sx={{ marginBottom: '0.5rem' }}>
  - Customer Satisfaction: Your happiness is our priority.
</Typography>
<Typography variant="body1" color="textSecondary" sx={{ marginBottom: '0.5rem' }}>
  - Reliability: We work with trusted bus operators to ensure you have a safe and comfortable journey.
</Typography>
<Typography variant="body1" color="textSecondary" sx={{ marginBottom: '0.5rem' }}>
  - Innovation: We continuously improve our services to provide you with the best booking experience.
</Typography>
<Typography variant="body1" color="textSecondary" sx={{ marginBottom: '0.5rem' }}>
  - Accessibility: We strive to make travel affordable and accessible to everyone.
</Typography>

        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
