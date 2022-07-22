import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function CardRecipe({ recipe }) {
  const imgUrl = recipe?.images ? `http://localhost:3001/${recipe.images.small}` : null;
  return (
    <Card key={recipe.uuid} sx={{ marginBottom: 2, minWidth: 275, display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '85%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {recipe.title}
          </Typography>
          <Typography variant="body2">{recipe.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={{
              pathname: `/viewRecipe/${recipe.uuid}`,
            }}
            size="small"
          >
            View Details
          </Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ minWidth: 125 }}
        image={imgUrl}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default CardRecipe;
