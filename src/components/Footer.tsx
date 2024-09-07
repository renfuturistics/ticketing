// components/Footer.tsx
import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import SendIcon from '@mui/icons-material/Send';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#232f3e', color: '#fff', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Newsletter Subscription */}
          <Grid item xs={12} md={6}>
            <Typography color={'white'} variant="h6" gutterBottom>
              Subscribe to our Newsletter
            </Typography>
            <Typography color={'white'} variant="body1" gutterBottom>
              Get the latest updates on new routes and special offers directly in your inbox.
            </Typography>
            <Box sx={{ display: 'flex', marginTop: '1rem' }}>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                sx={{ flexGrow: 1, backgroundColor: '#fff', borderRadius: '4px' }}
              />
              <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
                <SendIcon />
              </Button>
            </Box>
          </Grid>

          {/* App Download Links */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="h6" color={'white'} gutterBottom>
              Get Our App
            </Typography>
            <Typography variant="body1" color={'white'} gutterBottom>
              Book tickets on the go with our mobile app.
            </Typography>
            <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Button
                variant="contained"
                
                startIcon={<AppleIcon />}
                sx={{
                  backgroundColor: '#f5f5f7',
                  color: '#232f3e',
                  marginRight: '1rem',
                  textTransform: 'none'
                }}
              >
                App Store
              </Button>
              <Button
                variant="contained"
                
                startIcon={<AndroidIcon />}
                sx={{
                  backgroundColor: '#f5f5f7',
                  color: '#232f3e',
                  textTransform: 'none'
                }}
              >
                Play Store
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #3E5060', marginTop: '2rem', paddingTop: '1rem', textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Bus Ticketing. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
