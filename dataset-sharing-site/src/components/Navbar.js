import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'rgba(0, 0, 0, 0.5)', height: '80px' }}> {/* Increase AppBar height */}
      <Toolbar sx={{ minHeight: '110px', paddingLeft: '20px', paddingRight: '20px' }}> {/* Increase Toolbar height and padding */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Logo" style={{ height: 60, marginRight: 20 }} />  {/* Increase logo size */}
          <Typography
            variant="h4"   //{/* Larger title font */}
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#FFFFFF',
              fontFamily: 'Bebas Neue, sans-serif',
              fontWeight: 'bold',
              fontSize: '2.5rem',   // Larger font size for navbar text
            }}
          >
            Dataset Hub
          </Typography>
        </Box>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFFFFF', fontSize: '1.5rem' }}  //{/* Increase button text size */}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/upload-dataset"
          sx={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFFFFF', fontSize: '1.5rem' }}  //{/* Increase button text size */}
        >
          Upload Dataset
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/dataset-list"
          sx={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFFFFF', fontSize: '1.5rem' }}  //{/* Increase button text size */}
        >
          Dataset List
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/forum"
          sx={{ fontFamily: 'Bebas Neue, sans-serif', color: '#FFFFFF', fontSize: '1.5rem' }}  //{/* Increase button text size */}
        >
          Forum
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
