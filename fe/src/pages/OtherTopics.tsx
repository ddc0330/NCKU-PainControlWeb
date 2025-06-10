import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Collapse
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { videoData, VideoItem, Topic } from '../data';

const OtherTopics = () => {
  const [expandedTopics, setExpandedTopics] = useState<{ [key: string]: boolean }>({});

  // 使用中央數據管理系統的數據
  const topics = videoData.otherTopics;

  const handleTopicExpand = (topicId: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        其他議題
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        探索更多特定主題的疼痛控制方法，包含詳細的教學影片和實用建議。
      </Typography>

      <Grid container spacing={4}>
        {topics.map((topic: Topic) => (
          <Grid item xs={12} key={topic.id}>
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5" component="h2">
                      {topic.title}
                    </Typography>
                <IconButton 
                  onClick={() => handleTopicExpand(topic.id)}
                  sx={{ 
                    transform: expandedTopics[topic.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s'
                  }}
                >
                  {expandedTopics[topic.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>
                    <Typography variant="body1" paragraph>
                      {topic.description}
                    </Typography>
              <Collapse in={expandedTopics[topic.id]}>
                <Grid container spacing={3}>
                  {topic.videos.map((video: VideoItem) => (
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
              </Collapse>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OtherTopics; 