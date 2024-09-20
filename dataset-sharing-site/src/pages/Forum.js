import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import BackgroundParticles from '../components/BackgroundParticles'; // Include background

function Forum() {
  const posts = [
    { author: 'User123', title: 'Image Recognition Dataset Feedback', date: 'September 20, 2024' },
    { author: 'AIResearcher', title: 'Best Datasets for NLP Tasks', date: 'September 19, 2024' },
    { author: 'MLDev', title: 'Preprocessing Time-Series Data', date: 'September 18, 2024' },
  ];

  return (
    <>
      <BackgroundParticles /> {/* Use the particles background */}
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <Container maxWidth="md">
          <Typography variant="h3" className="korataki-font typography-shadow" sx={{ textAlign: 'center', marginBottom: 4, color: '#FFFFFF' }}>
            Forum
          </Typography>
          <Paper elevation={10} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '16px' }}>
            {posts.map((post, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6" className="korataki-font">{post.title}</Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                  By {post.author} on {post.date}
                </Typography>
                <hr />
              </Box>
            ))}
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              Start a New Discussion
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Forum;
