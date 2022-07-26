import { Alert, Grid } from '@mui/material';
import CardSpecial from './CardSpecial';

function ListSpecials({ specials }) {
  return (
    <Grid item xs={12}>
      <h1>Specials List:</h1>
      {specials?.length === 0 ? (
        <Alert severity="info">The specials are loading!</Alert>
      ) : (
        specials.map((special, index) => (
          <CardSpecial key={`list-${special.uuid}-${index}`} special={special} />
        ))
      )}
    </Grid>
  );
}

export default ListSpecials;
