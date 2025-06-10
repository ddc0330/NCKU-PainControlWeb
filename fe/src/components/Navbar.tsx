import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          疼痛控制教學網站
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            首頁
          </Button>
          <Button color="inherit" component={RouterLink} to="/introduction">
            疼痛簡介
          </Button>
          <Button color="inherit" component={RouterLink} to="/perception">
            疼痛自覺系統
          </Button>
          <Button color="inherit" component={RouterLink} to="/search">
            疼痛查詢
          </Button>
          <Button color="inherit" component={RouterLink} to="/self-treatment">
            自我治療
          </Button>
          <Button color="inherit" component={RouterLink} to="/other-topics">
            其他議題
          </Button>
          <Button color="inherit" component={RouterLink} to="/ai-search">
            AI 搜尋
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 