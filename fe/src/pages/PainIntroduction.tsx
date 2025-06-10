import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { videoData, VideoItem } from '../data';

const PainIntroduction = () => {
  // 使用中央數據管理系統的數據
  const videos = videoData.painIntroduction;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        疼痛簡介
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        這裡提供了一系列關於疼痛的教學影片，幫助您更好地理解疼痛的相關知識。
      </Typography>

      <Grid container spacing={4}>
        {videos.map((video: VideoItem) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={video.thumbnailUrl}
                alt={video.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <iframe
                    width="100%"
                    height="220"
                    src={`https://www.youtube.com/embed/${video.videoUrl.split('v=')[1]}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '4px' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PainIntroduction; 