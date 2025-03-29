import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Avatar, 
  Box, 
  Chip,
  Button,
  Divider,
  Skeleton
} from '@mui/material';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://127.0.0.1:5000/api/mentorship/mentors')
      .then(response => {
        setMentors(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
        setLoading(false);
      });
  }, []);

  // Function to generate avatar with initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Function to generate a background color based on the mentor's id
  const getAvatarColor = (id) => {
    const colors = ['#9c27b0', '#f50057', '#3f51b5', '#009688', '#ff9800', '#4caf50'];
    return colors[id % colors.length];
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Mentorship Network
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
        Connect with experienced mentors who can guide your entrepreneurial journey
      </Typography>
      
      {loading ? (
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item xs={12} md={6} key={item}>
              <Card sx={{ display: 'flex', height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Skeleton variant="circular" width={60} height={60} />
                      <Box sx={{ ml: 2 }}>
                        <Skeleton variant="text" width={150} height={30} />
                        <Skeleton variant="text" width={100} height={20} />
                      </Box>
                    </Box>
                    <Skeleton variant="text" height={60} />
                    <Box sx={{ mt: 2 }}>
                      <Skeleton variant="rectangular" width={80} height={30} />
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {mentors.map(mentor => (
            <Grid item xs={12} md={6} key={mentor.id}>
              <Card sx={{ display: 'flex', height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: getAvatarColor(mentor.id),
                          width: 60,
                          height: 60,
                          fontSize: '1.5rem'
                        }}
                      >
                        {getInitials(mentor.name)}
                      </Avatar>
                      <Box sx={{ ml: 2 }}>
                        <Typography component="div" variant="h5">
                          {mentor.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          {mentor.expertise}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {mentor.bio}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
                      Available Sessions:
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {mentor.sessions.map((session, idx) => (
                        <Chip 
                          key={idx} 
                          label={session} 
                          color="primary" 
                          size="small" 
                          sx={{ mr: 1, mb: 1 }} 
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                    <Button size="small" color="primary">
                      Request Mentorship
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MentorList;