import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function CardRecipe({ recipe }) {
  return (
    <Card key={recipe.uuid} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2">{recipe.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardRecipe;
