import { useEffect, useState } from 'react';
import { Alert, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axiosAPI from '../../lib/axios/API';
import RecipeContent from './RecipeContent';

function ViewRecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axiosAPI
      .get(`/recipes/${recipeId}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);

  return (
    <Grid container spacing={3}>
      {recipe ? (
        <RecipeContent recipe={recipe} />
      ) : (
        <Grid item xs={12}>
          <Alert severity="error">Error loading your recipe</Alert>
        </Grid>
      )}
    </Grid>
  );
}

export default ViewRecipeDetail;
