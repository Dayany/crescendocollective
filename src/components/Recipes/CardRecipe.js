import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CardRecipe({ recipe }) {
  return (
    <Card key={recipe.uuid} sx={{ marginBottom: 2, minWidth: 275 }}>
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
    </Card>
  );
}

export default CardRecipe;
