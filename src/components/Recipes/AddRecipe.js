import { Button, FormControl, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axiosAPI from '../../lib/axios/API';
import AddDirections from '../Directions/AddDirections';
import AddIngredient from '../Ingredients/AddIngredient';

function AddRecipe({ recipe }) {
  const today = new Date();
  const now = `${
    today.getMonth() + 1 < 10 ? '0' : ''
  }${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;

  const { id } = useParams();

  const uuid = id ? id : uuidv4();
  const editDate = id ? now : '';
  const [postDate, setPostDate] = useState('');
  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const [servings, setServings] = useState(recipe ? recipe.servings : '');
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : []);
  const [prepTime, setPrepTime] = useState(recipe ? recipe.prepTime : '');
  const [cookTime, setCookTime] = useState(recipe ? recipe.cookTime : '');
  const [directions, setDirections] = useState(recipe ? recipe.directions : []);

  useEffect(() => {
    if (!id) return;
    axiosAPI
      .get(`/recipes/${id}`)
      .then((res) => {
        setPostDate(res.data.postDate);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setServings(res.data.servings);
        setIngredients(res.data.ingredients);
        setPrepTime(res.data.prepTime);
        setCookTime(res.data.cookTime);
        setDirections(res.data.directions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const addDirection = () => {
    setDirections((currentDirections) => [
      ...currentDirections,
      { instructions: '', optional: false },
    ]);
  };
  const removeDirection = (removeIndex) => {
    if (removeIndex === null) return;

    setDirections((currentDirections) =>
      currentDirections.filter((currentDirection, index) => {
        return index !== removeIndex;
      })
    );
  };
  const editDirection = (direction, editIndex) => {
    setDirections((currentDirections) =>
      currentDirections.map((curr, index) =>
        index === editIndex
          ? {
              ...direction,
            }
          : curr
      )
    );
  };

  const addIngredient = () => {
    setIngredients((currentIngredients) => [
      ...currentIngredients,
      { uuid: uuidv4(), amount: 0, measurement: '', name: '' },
    ]);
  };
  const removeIngredient = (ingredientId) => {
    if (!ingredientId) return;
    setIngredients((currentIngredients) =>
      currentIngredients.filter((ingredient) => ingredient.uuid !== ingredientId)
    );
  };
  const editIngredient = (ingredient) => {
    setIngredients((currentIngredients) =>
      currentIngredients.map((curr) =>
        curr.uuid === ingredient.uuid
          ? {
              ...ingredient,
            }
          : curr
      )
    );
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      uuid,
      postDate,
      title,
      description,
      servings,
      ingredients,
      prepTime,
      cookTime,
      directions,
    };
    if (id) {
      axiosAPI
        .patch(`/recipes/${id}`, newRecipe)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          window.location.href = '/';
        });
    } else {
      axiosAPI
        .post('/recipes', newRecipe)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          window.location.href = '/';
        });
    }
  };
  return (
    <>
      <h1>{recipe ? 'Edit' : 'Add'} Recipe</h1> <br />
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
                key={`direction-${index}`}
                index={index}
                direction={direction}
                editDirection={editDirection}
                removeDirection={removeDirection}
              />
            ))}
          </Grid>
          <Grid m={2} item xs={12}>
            <Button variant="contained" color="primary" onClick={addDirection}>
              Add Direction
            </Button>
          </Grid>
          <Grid item xs={12}>
            {ingredients.map((ingredient, index) => (
              <AddIngredient
                key={ingredient.uuid}
                ingredient={ingredient}
                index={index}
                editIngredient={editIngredient}
                removeIngredient={removeIngredient}
              />
            ))}
          </Grid>
          <Grid m={2} item xs={12}>
            <Button variant="contained" color="primary" onClick={addIngredient}>
              Add Ingredient
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>
              {id ? 'Save' : 'Add'} Recipe
            </Button>
          </Grid>
        </FormControl>
      </Grid>
    </>
  );
}

export default AddRecipe;
