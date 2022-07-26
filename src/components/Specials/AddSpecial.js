import { Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosAPI from '../../lib/axios/API';

function AddSpecial() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [ingredientId, setIngredientId] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const ingredientsList = [];
  const [filteredIngredientsList, setFilteredIngredientsList] = useState([]);

  useEffect(() => {
    axiosAPI
      .get('/recipes')
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //Remove duplicate from list
    if (!id) return;

    axiosAPI.get(`/specials/${id}`).then((res) => {
      setIngredientId(res.data.ingredientId);
      setType(res.data.type);
      setTitle(res.data.title);
    });
  }, [id]);

  useMemo(() => {
    recipes.map((recipe) =>
      recipe.ingredients.map((ingredient) => ingredientsList.push(ingredient))
    );

    setFilteredIngredientsList(
      ingredientsList.filter((obj, index, arr) => {
        return arr.map((mapObj) => mapObj.uuid).indexOf(obj.uuid) === index;
      })
    );
  }, [recipes]);

  return (
    <Grid container spacing={3}>
      <h1>Add Specials</h1>
      <Grid item xs={12}>
        <TextField
          id="title"
          name="title"
          label="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="type"
          name="type"
          label="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <InputLabel id="ingredient-select-label">Ingredient</InputLabel>
        <Select
          labelId="ingredient-select-label"
          id="ingredient-select"
          value={ingredientId}
          onChange={(e) => setIngredientId(e.target.value)}
        >
          {filteredIngredientsList.map((ingredient) => (
            <MenuItem key={ingredient.uuid} value={ingredient.uuid}>
              {ingredient.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}

export default AddSpecial;
