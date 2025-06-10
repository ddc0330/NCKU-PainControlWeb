import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: '疼痛簡介',
      description: '了解疼痛的基本知識和相關影片資源',
      path: '/introduction'
    },
    {
      title: '疼痛自覺系統',
      description: '評估和記錄您的疼痛程度，追蹤治療效果',
      path: '/perception'
    },
    {
      title: '疼痛查詢',
      description: '根據您的疼痛部位，找到適合的治療方法',
      path: '/search'
    },
    {
      title: '自我治療',
      description: '學習實用的自我治療技巧和方法',
      path: '/self-treatment'
    },
    {
      title: '其他議題',
      description: '探索更多特定主題的疼痛控制方法',
      path: '/other-topics'
    },
    {
      title: 'AI 搜尋',
      description: '使用 AI 助手快速找到您需要的資訊',
      path: '/ai-search'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        歡迎來到疼痛控制教學網站
      </Typography>
      <Typography variant="h6" gutterBottom align="center" color="text.secondary">
        這裡提供完整的疼痛控制教學資源，幫助您更好地管理日常疼痛
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={4} key={feature.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography>
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => navigate(feature.path)}>
                  了解更多
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 