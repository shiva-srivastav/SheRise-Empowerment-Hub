import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  CardMedia, 
  CardActions, 
  Button,
  Divider,
  Box,
  Skeleton
} from '@mui/material';

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://127.0.0.1:5000/api/marketplace/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching marketplace data:', error);
        setLoading(false);
      });
  }, []);

  // Placeholder image for products
  const getPlaceholderImage = (id) => {
    // Generate different placeholder colors based on the product id
    const colors = ['9c27b0', 'f50057', '3f51b5', '009688', 'ff9800', '4caf50'];
    return `https://via.placeholder.com/300x200/${colors[id % colors.length]}`;
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Marketplace
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
        Connect with women-led businesses and discover unique products
      </Typography>
      
      {loading ? (
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Card sx={{ height: '100%' }}>
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton variant="text" height={30} />
                  <Skeleton variant="text" height={60} />
                  <Skeleton variant="text" height={30} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={getPlaceholderImage(product.id)}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="h6" color="primary">
                      ₹{product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Seller: {product.seller}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View Details</Button>
                  <Button size="small" color="secondary">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Marketplace;