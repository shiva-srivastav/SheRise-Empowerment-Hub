import React, { useState } from 'react';
import { 
  Paper, 
  Typography, 
  Slider, 
  Button, 
  Box, 
  Grid, 
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Stack
} from '@mui/material';
import axios from 'axios';

const CreditScore = () => {
  const [transactionHistory, setTransactionHistory] = useState(50);
  const [socialScore, setSocialScore] = useState(50);
  const [businessPerformance, setBusinessPerformance] = useState(50);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/credit/score', {
        transaction_history: transactionHistory,
        social_score: socialScore,
        business_performance: businessPerformance
      });
      
      setResult(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error calculating credit score:', err);
      setError('Failed to calculate credit score. Please make sure the server is running.');
      setLoading(false);
    }
  };

  const getScoreDescription = (approved) => {
    if (approved === 1) {
      return "Congratulations! Based on our AI analysis, you qualify for credit. Your business metrics and profile demonstrate potential for growth.";
    } else {
      return "Based on our current analysis, we're unable to approve credit at this time. However, we recommend focusing on improving your business performance and social presence, then trying again in a few months.";
    }
  };

  const getSliderColor = (value) => {
    if (value < 30) return 'error';
    if (value < 60) return 'warning';
    return 'success';
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        AI-Powered Credit Assessment
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
        Our innovative credit scoring system uses alternative data to provide fair assessments for women entrepreneurs
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Enter Your Information
            </Typography>
            <Typography gutterBottom>
              Move the sliders to reflect your current situation:
            </Typography>

            <Box sx={{ my: 4 }}>
              <Typography id="transaction-history-slider" gutterBottom>
                Transaction History (Payment Consistency)
              </Typography>
              <Slider
                value={transactionHistory}
                onChange={(e, newValue) => setTransactionHistory(newValue)}
                aria-labelledby="transaction-history-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={[
                  { value: 0, label: '0' },
                  { value: 50, label: '50' },
                  { value: 100, label: '100' }
                ]}
                min={0}
                max={100}
                color={getSliderColor(transactionHistory)}
              />
              
              <Typography id="social-score-slider" gutterBottom sx={{ mt: 4 }}>
                Social Score (Community Engagement)
              </Typography>
              <Slider
                value={socialScore}
                onChange={(e, newValue) => setSocialScore(newValue)}
                aria-labelledby="social-score-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={[
                  { value: 0, label: '0' },
                  { value: 50, label: '50' },
                  { value: 100, label: '100' }
                ]}
                min={0}
                max={100}
                color={getSliderColor(socialScore)}
              />
              
              <Typography id="business-performance-slider" gutterBottom sx={{ mt: 4 }}>
                Business Performance (Growth & Stability)
              </Typography>
              <Slider
                value={businessPerformance}
                onChange={(e, newValue) => setBusinessPerformance(newValue)}
                aria-labelledby="business-performance-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={[
                  { value: 0, label: '0' },
                  { value: 50, label: '50' },
                  { value: 100, label: '100' }
                ]}
                min={0}
                max={100}
                color={getSliderColor(businessPerformance)}
              />
            </Box>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit}
                disabled={loading}
                size="large"
                sx={{ minWidth: 200 }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Calculate Credit Score'}
              </Button>
            </Box>
            
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Your Credit Assessment Result
            </Typography>
            
            {result ? (
              <Box>
                <Card 
                  sx={{ 
                    bgcolor: result.credit_approved === 1 ? 'success.light' : 'error.light',
                    color: 'white',
                    my: 2
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {result.credit_approved === 1 ? 'Approved' : 'Not Approved'}
                    </Typography>
                    <Typography variant="body1">
                      {getScoreDescription(result.credit_approved)}
                    </Typography>
                  </CardContent>
                </Card>
                
                <Stack spacing={2} mt={4}>
                  <Typography variant="body1">
                    Here's a breakdown of your assessment factors:
                  </Typography>
                  <Box>
                    <Typography variant="subtitle2">Transaction History: {transactionHistory}%</Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {transactionHistory < 50 ? 
                        'Improving your payment consistency can help your credit score.' : 
                        'Good payment consistency demonstrates financial reliability.'}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">Social Score: {socialScore}%</Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {socialScore < 50 ? 
                        'Building stronger community connections can improve your profile.' : 
                        'Strong community engagement shows business stability.'}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">Business Performance: {businessPerformance}%</Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {businessPerformance < 50 ? 
                        'Focus on improving your business growth metrics.' : 
                        'Your business shows positive growth indicators.'}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ) : (
              <Box 
                sx={{ 
                  height: '80%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center',
                  opacity: 0.7
                }}
              >
                <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                  Adjust the sliders and click the Calculate button to see your credit assessment.
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  Our AI model evaluates traditional and alternative data to provide a fair assessment for women entrepreneurs.
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreditScore;