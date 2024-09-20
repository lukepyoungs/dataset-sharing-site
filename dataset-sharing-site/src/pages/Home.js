import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container, Typography, Box, Paper, Button, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the Home.css file for styles

// Animation for the header
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animated typography component
const AnimatedTypography = styled(Typography)`
  animation: ${fadeInUp} 1s ease-out;
`;

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);

  return (
    <>
      {/* Top Toolbar */}
      <AppBar position="static" sx={{ backgroundColor: '#2c2c2c' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" className="korataki-font">
            Dataset Hub
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/" className="korataki-font">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/upload-dataset" className="korataki-font">
              Upload Dataset
            </Button>
            <Button color="inherit" component={Link} to="/dataset-list" className="korataki-font">
              Dataset List
            </Button>
            <Button color="inherit" component={Link} to="/forum" className="korataki-font">
              Forum
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            image: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          },
          particles: {
            number: { value: 10, density: { enable: true, value_area: 600 } },
            color: { value: "#ffffff" },
            shape: {
              type: "square",
              stroke: { width: 0, color: "#000000" },
            },
            opacity: { value: 0.25, random: true, anim: { enable: false } },
            size: { value: 35, random: true, anim: { enable: false } }, // Larger size for visual effect
            move: { enable: true, speed: 1, direction: "top", straight: true, out_mode: "out" },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true,
            }
          },
          retina_detect: true,
        }}
      />

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <AnimatedTypography
            variant="h2"
            gutterBottom
            className="bebas-font typography-shadow"
            sx={{
              fontWeight: 'bold',     // Bold text
              color: '#FFFFFF',       // White color
              fontSize: '3rem',       // Adjust as needed for size
            }}
          >
            Welcome to Dataset Hub
          </AnimatedTypography>
          <Typography
            variant="h6"
            sx={{ color: '#e0e0e0', mb: 4 }}
          >
            Empowering AI and ML research with accessible datasets for everyone.
          </Typography>
          <Paper elevation={10} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '16px' }}>
            <Typography variant="body1" paragraph>
              Here at Dataset Hub, we're dedicated to accelerating innovation by providing a platform where data scientists and enthusiasts can share, discover, and collaborate on datasets. Whether you're training the next breakthrough model or just exploring data, find what you need here!
            </Typography>
            <Typography variant="h6" gutterBottom>
              Latest Discussion:
            </Typography>
            <Typography variant="body2">
              <strong>User123:</strong> "Just uploaded a new image recognition dataset. Feedback welcome!"
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              Join the Discussion
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Home;
