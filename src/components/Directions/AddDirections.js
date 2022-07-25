import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

function AddDirections({ direction, removeDirection, index, editDirection }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h3>Step {index + 1}</h3>
        <TextField
          id="instructions"
          name="instructions"
          label="Instructions"
          value={direction.instructions}
          onChange={(e) => editDirection({ ...direction, instructions: e.target.value }, index)}
        />
        <FormControlLabel
          control={
            <Checkbox
              id="optional"
              name="optional"
              value={direction.optional}
              onChange={(e) => editDirection({ ...direction, optional: e.target.checked }, index)}
            />
          }
          label="Optional"
        />
        <Button color="error" onClick={() => removeDirection(index)}>
          Remove
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddDirections;
