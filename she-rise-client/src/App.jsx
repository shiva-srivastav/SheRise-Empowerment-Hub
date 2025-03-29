import React from 'react';
import { Container, Typography, Box, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import Marketplace from './components/Marketplace';
import MentorList from './components/MentorList';
import CreditScore from './components/CreditScore';
import FinancialLiteracy from './components/FinancialLiteracy';

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SheRise Empowerment Hub
          </Typography>
        </Toolbar>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          centered
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Marketplace" />
          <Tab label="Mentors" />
          <Tab label="Credit Score" />
          <Tab label="Financial Literacy" />
        </Tabs>
      </AppBar>
      
      <Container maxWidth="lg">
        <Box my={4}>
          {tabValue === 0 && <Marketplace />}
          {tabValue === 1 && <MentorList />}
          {tabValue === 2 && <CreditScore />}
          {tabValue === 3 && <FinancialLiteracy />}
        </Box>
      </Container>
    </>
  );
}

export default App;