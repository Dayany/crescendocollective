import { Grid } from '@mui/material';
import ShowDirections from '../Directions/ShowDirections';
import ShowIngredient from '../Ingredients/ShowIngredients';

function RecipeContent({ recipe }) {
  const imgUrl = recipe?.images ? `http://localhost:3001/${recipe.images.medium}` : null;

  return (
    <>
      <Grid item xs={12}>
        <h1>{recipe.title}</h1>
        <h2>{recipe.description}</h2>
      </Grid>
      <Grid item xs={6}>
        <img src={imgUrl} alt={recipe.title} />
      </Grid>
      <Grid item xs={6}>
        <h2>Servings: {recipe.servings}</h2>
        <h2>Prep Time: {recipe.prepTime}</h2>
        <h2>Cook Time: {recipe.cookTime}</h2>
      </Grid>
      <Grid item xs={6}>
        <ShowIngredient ingredients={recipe.ingredients} />
      </Grid>
      <Grid item xs={6}>
        <ShowDirections directions={recipe.directions} />
      </Grid>
    </>
  );
}

export default RecipeContent;
