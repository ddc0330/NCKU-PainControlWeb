import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button
} from '@mui/material';
import { videoData, VideoItem, MuscleGroup } from '../data';

const PainSearch = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | null>(null);
  const location = useLocation();

  // 使用中央數據管理系統的數據
  const muscleGroups = videoData.muscleGroups;

  // 處理URL參數
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const muscleParam = searchParams.get('muscle');
    
    if (muscleParam) {
      // 查找對應的肌肉群
      const foundMuscleGroup = muscleGroups.find(mg => mg.id === muscleParam);
      if (foundMuscleGroup) {
        setSelectedMuscleGroup(muscleParam);
      }
    }
  }, [location.search, muscleGroups]);

  const handleMuscleGroupSelect = (muscleGroupId: string) => {
    setSelectedMuscleGroup(muscleGroupId);
    // 更新URL但不重新載入頁面
    const newUrl = `${window.location.pathname}?muscle=${muscleGroupId}`;
    window.history.pushState({}, '', newUrl);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'anatomy':
        return '解剖學';
      case 'basic_treatment':
        return '基礎治療方法';
      case 'advanced_treatment':
        return '進階治療方法';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'anatomy':
        return 'primary';
      case 'basic_treatment':
        return 'success';
      case 'advanced_treatment':
        return 'error';
      default:
        return 'default';
    }
  };

  const categories = [
    { id: 'upper_cross', label: '上交叉' },
    { id: 'lower_cross', label: '下交叉' },
    { id: 'other', label: '其他' }
  ] as const;

  // 獲取選中肌肉群的名稱
  const selectedMuscleGroupName = selectedMuscleGroup 
    ? muscleGroups.find(mg => mg.id === selectedMuscleGroup)?.name 
    : null;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        疼痛查詢
        {selectedMuscleGroupName && (
          <Typography component="span" variant="h4" color="primary.main" sx={{ ml: 1 }}>
            - {selectedMuscleGroupName}
          </Typography>
        )}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        請選擇您想要了解的肌肉群，我們將為您提供相關的解剖學知識、疼痛評估和治療方法。
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {categories.map((category) => (
          <Grid item xs={12} md={4} key={category.id}>
            <Paper 
              sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#f5f5f5'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ mb: 2, textAlign: 'center' }}>
                {category.label}
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: 1,
                flex: 1
              }}>
                {muscleGroups
                  .filter((mg: MuscleGroup) => mg.category === category.id)
                  .map((muscleGroup: MuscleGroup) => (
                    <Button
                      key={muscleGroup.id}
                      variant={selectedMuscleGroup === muscleGroup.id ? "contained" : "outlined"}
                      onClick={() => handleMuscleGroupSelect(muscleGroup.id)}
                      sx={{ 
                        py: 1.5,
                        fontSize: '1rem',
                        justifyContent: 'flex-start',
                        textTransform: 'none'
                      }}
                    >
                      {muscleGroup.name}
                    </Button>
                  ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {selectedMuscleGroup && (
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {muscleGroups
              .find((mg: MuscleGroup) => mg.id === selectedMuscleGroup)
              ?.videos.map((video: VideoItem) => (
                <Grid item xs={12} sm={6} md={4} key={video.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={video.thumbnailUrl}
                      alt={video.title}
                    />
                    <CardContent>
                      <Box sx={{ mb: 1 }}>
                        <Chip
                          label={getCategoryLabel(video.category || '')}
                          color={getCategoryColor(video.category || '')}
                          size="small"
                          sx={{ mr: 1 }}
                        />
                      </Box>
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
            {muscleGroups.find((mg: MuscleGroup) => mg.id === selectedMuscleGroup)?.videos.length === 0 && (
              <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary" align="center">
                  目前沒有相關影片
                </Typography>
              </Grid>
            )}
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default PainSearch; 