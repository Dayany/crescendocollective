import React from 'react';
import { Grid, Button, Box, Alert } from '@mui/material';

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
          recipes.map((recipe, index) => (
            <></>
            // <Row key={`recipe-row-${index}`}>
            //   <Col key={`recipe-col-1-${index}`} xs="10"></Col>
            //   <Col key={`recipe-col-2-${index}`}>
            //     <Link
            //       key={`link-${recipe.uuid}`}
            //       to={{
            //         pathname: `/editRecipe`,
            //         state: {
            //           recipe,
            //         },
            //       }}
            //     >
            //       <Button
            //         key={`button-${recipe.uuid}`}
            //         style={{ marginTop: '20%', marginBottom: '20%' }}
            //         variant="info"
            //       >
            //         Edit
            //       </Button>
            //     </Link>
            //   </Col>
            // </Row>
          ))
        )}
      </Grid>
    </Grid>
  );
}

export default ListRecipes;
