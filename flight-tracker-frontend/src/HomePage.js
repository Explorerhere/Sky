import React from 'react';
import { Box, Button, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import backgroundImage from './Assests/stenza.png'; // Import the background image

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundImageStyle = {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
    filter: 'blur(8px)',
    WebkitFilter: 'blur(8px)',
  };

  // Define custom color palette
  const colors = {
    primary: '#3f51b5', // Blue
    secondary: '#f50057', // Pink
    text: '#333', // Dark grey
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={backgroundImageStyle}></div>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh', position: 'relative' }}>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent white background
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: colors.primary, fontWeight: 700 }}>
              Welcome to SkyLinker AeroPathways
            </Typography>
            <Typography variant="body1" component="p" gutterBottom align="center" sx={{ color: colors.text }}>
              Your one-stop destination for flight tracking and schedules.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" component={Link} to="/flightsearch" startIcon={<FlightTakeoffIcon />}>
                Flight Search
              </Button>
              <Box sx={{ mx: isMobile ? 0 : 2 }}></Box> {/* Spacer */}
              <Button variant="contained" color="secondary" component={Link} to="/airporttimetable" startIcon={<AccessTimeIcon />}>
                Airport Timetable
              </Button>
              <Box sx={{ mx: isMobile ? 0 : 2 }}></Box> {/* Spacer */}

              <Button variant="contained" color="secondary" component={Link} to="/AirportSearch" startIcon={<AccessTimeIcon  />}>
                Airport Search
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
