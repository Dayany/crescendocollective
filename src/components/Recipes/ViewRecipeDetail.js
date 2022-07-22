import { useEffect, useState } from 'react';
import { Alert, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axiosAPI from '../../lib/API';

function ViewRecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const imgUrl = recipe?.images ? `http://localhost:3001/${recipe.images.medium}` : null;

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
        <>
          <Grid item xs={12}>
            <h1>{recipe.title}</h1>
          </Grid>
          <Grid item xs={6}>
            <img src={imgUrl} alt={recipe.title} />
          </Grid>
        </>
      ) : (
        <Grid item xs={12}>
          <Alert severity="error">Error loading your recipe</Alert>
        </Grid>
      )}
    </Grid>
  );
}

export default ViewRecipeDetail;
