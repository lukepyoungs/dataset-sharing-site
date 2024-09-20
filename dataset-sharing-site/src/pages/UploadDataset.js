import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button, TextField } from '@mui/material';
import BackgroundParticles from '../components/BackgroundParticles'; // Import the background component

function UploadDataset() {
  const [datasetName, setDatasetName] = useState('');
  const [datasetLink, setDatasetLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dataset submitted:', { datasetName, datasetLink });
  };

  return (
    <>
      <BackgroundParticles /> {/* Include the background */}
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
            className="bebas-font typography-shadow" // Use Bebas Neue font
            sx={{ fontSize: '3rem', mb: 4, color: '#FFFFFF' }}
          >
            Upload Dataset
          </Typography>
          <Paper elevation={10} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '16px' }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Dataset Name"
                variant="outlined"
                fullWidth
                value={datasetName}
                onChange={(e) => setDatasetName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Dataset Link"
                variant="outlined"
                fullWidth
                value={datasetLink}
                onChange={(e) => setDatasetLink(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" type="submit">
                Submit Dataset
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default UploadDataset;
