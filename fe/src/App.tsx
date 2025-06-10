import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PainIntroduction from './pages/PainIntroduction';
import PainSearch from './pages/PainSearch';
import OtherTopics from './pages/OtherTopics';
import AISearch from './pages/AISearch';
import PainPerception from './pages/PainPerception';
import SelfTreatment from './pages/SelfTreatment';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<PainIntroduction />} />
          <Route path="/search" element={<PainSearch />} />
          <Route path="/other-topics" element={<OtherTopics />} />
          <Route path="/ai-search" element={<AISearch />} />
          <Route path="/perception" element={<PainPerception />} />
          <Route path="/self-treatment" element={<SelfTreatment />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 