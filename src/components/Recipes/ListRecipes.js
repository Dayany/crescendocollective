import React from 'react';
import { Grid, Button, Box, Alert } from '@mui/material';
import CardRecipe from './CardRecipe';

function ListRecipes({ recipes }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <h1>Recipes List:</h1>
      </Grid>
      <Grid item xs={4}>
        <Box m={2}>
          <Button variant="contained" color="primary" margin="dense">
            Add Recipe
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {recipes?.length === 0 ? (
          <Alert severity="info">The recipes are loading!</Alert>
        ) : (
          recipes.map((recipe, index) => <CardRecipe key={index} recipe={recipe} />)
        )}
      </Grid>
    </Grid>
  );
}

export default ListRecipes;
