import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';
import Image from 'next/image';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Styled link component
  const StyledLink = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    color: theme.palette.text.primary,
    fontWeight: 500,
    position: 'relative',
    padding: '0.5rem 1rem',
    '&:hover': {
      color: theme.palette.primary.main,
      '&::after': {
        width: '100%',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: '0',
      backgroundColor: theme.palette.primary.main,
      transition: 'width 0.3s ease-in-out',
    },
  }));

  // Function to toggle drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Mobile menu content
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link href="/" passHref>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/about" passHref>
          <ListItem button>
            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
        <Link href="/contact" passHref>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <Link href="/sign-in" passHref>
          <ListItem button>
            <ListItemText primary="Sign In" />
          </ListItem>
        </Link>
        <Link href="/sign-up" passHref>
          <ListItem button>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem 0',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'space-between' : 'center',
                width: '100%',
              }}
            >
              {/* Logo */}
              <Typography variant="h6" component="div" sx={{ flexGrow: isMobile ? 1 : 0 }}>
                <Link href="/" passHref>
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  
                    <Typography variant="h6" sx={{ marginLeft: '0.5rem', color: theme.palette.text.primary }}>
                      Bus Ticketing
                    </Typography>
                  </Box>
                </Link>
              </Typography>

              {/* Navigation Links */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '2rem' }}>
                  <Link href="/" passHref>
                    <StyledLink>Home</StyledLink>
                  </Link>
                  <Link href="/about" passHref>
                    <StyledLink>About Us</StyledLink>
                  </Link>
                  <Link href="/contact" passHref>
                    <StyledLink>Contact</StyledLink>
                  </Link>
                </Box>
              )}

              {/* Auth Buttons or Hamburger Menu */}
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                {isMobile ? (
                  <>
                    <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                      <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                      {list()}
                    </Drawer>
                  </>
                ) : (
                  <>
                    <Link href="/sign-in" passHref>
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: 'none',
                          marginRight: '1rem',
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                          },
                        }}
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/sign-up" passHref>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: 'none',
                          borderRadius: '25px',
                          backgroundColor: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
