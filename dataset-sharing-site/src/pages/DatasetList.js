import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import BackgroundParticles from '../components/BackgroundParticles'; // Import the background

function DatasetList() {
  return (
    <>
      <BackgroundParticles />  {/* Consistent background */}
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
          <Typography
            variant="h2"
            className="korataki-font typography-shadow"
            sx={{ fontSize: '3rem', mb: 4, color: '#FFFFFF' }}
          >
            Dataset List
          </Typography>
          <Paper elevation={10} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '16px' }}>
            <Typography variant="body1" paragraph>
              Here are the datasets currently available for download and use in your machine learning projects.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Available Datasets:
            </Typography>
            <ul>
              <li><strong>Dataset 1:</strong> Image Classification Dataset</li>
              <li><strong>Dataset 2:</strong> Text Sentiment Analysis Dataset</li>
              <li><strong>Dataset 3:</strong> Time Series Financial Data</li>
              <li><strong>Dataset 4:</strong> Medical Image Segmentation Dataset</li>
            </ul>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default DatasetList;
