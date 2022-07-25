import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

function AddIngredient({ ingredient, index, removeIngredient, editIngredient }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h3>Ingredient {index + 1}</h3>
        <TextField
          id="name"
          name="name"
          label="name"
          value={ingredient.name}
          onChange={(e) => editIngredient({ ...ingredient, name: e.target.value })}
        />
        <TextField
          id="measurement"
          name="measurement"
          label="measurement"
          value={ingredient.measurement}
          onChange={(e) => editIngredient({ ...ingredient, measurement: e.target.value })}
        />{' '}
        <TextField
          id="amount"
          name="amount"
          label="amount"
          type="number"
          value={ingredient.amount}
          onChange={(e) => editIngredient({ ...ingredient, amount: e.target.value })}
        />
        <Button color="error" onClick={() => removeIngredient(ingredient.uuid)}>
          Remove
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddIngredient;
