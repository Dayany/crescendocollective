import { Button, FormControl, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddDirections from '../Directions/AddDirections';

function AddRecipe({ recipe }) {
  const today = new Date();
  const now = `${
    today.getMonth() + 1 < 10 ? '0' : ''
  }${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;

  const uuid = recipe ? recipe.uuid : uuidv4();

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const [servings, setServings] = useState(recipe ? recipe.servings : '');
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : []);
  const [prepTime, setPrepTime] = useState(recipe ? recipe.prepTime : '');
  const [cookTime, setCookTime] = useState(recipe ? recipe.cookTime : '');
  const postDate = useState(recipe ? recipe.postDate : now);
  const editDate = useState(recipe ? now : '');
  const [directions, setDirections] = useState(recipe ? recipe.directions : []);

  const addDirection = () => {
    setDirections((currentDirections) => [
      ...currentDirections,
      { uuid: uuidv4(), instructions: '', optional: false },
    ]);
  };
  const removeDirection = (directionId) => {
    if (!directionId) return;
    setDirections((currentDirections) =>
      currentDirections.filter((direction) => direction.uuid !== directionId)
    );
  };
  const editDirection = (direction) => {
    setDirections((currentDirections) =>
      currentDirections.map((curr) =>
        curr.uuid === direction.uuid
          ? {
              ...direction,
            }
          : curr
      )
    );
  };

  return (
    <>
      <h1>Add Recipe</h1>
      <Grid container spacing={3}>
        <FormControl>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="description"
              name="description"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              id="servings"
              name="servings"
              label="Servings"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
            <TextField
              id="prepTime"
              name="prepTime"
              label="Prep Time"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
            <TextField
              id="cookTime"
              name="cookTime"
              label="Cook Time"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
            />
            {directions.map((direction, index) => (
              <AddDirections
                key={direction.uuid}
                index={index}
                direction={direction}
                editDirection={editDirection}
                removeDirection={removeDirection}
              />
            ))}
          </Grid>
          <Grid m={2} item xs={6}>
            <Button variant="contained" color="primary" onClick={addDirection}>
              Add Direction
            </Button>
          </Grid>
        </FormControl>
      </Grid>
    </>
  );
}

export default AddRecipe;
