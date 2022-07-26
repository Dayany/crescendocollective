import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function CardSpecial({ special }) {
  return (
    <Card key={special.uuid} sx={{ marginBottom: 2, minWidth: 275, display: 'flex' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {special.title}
        </Typography>
        <Typography variant="body2">{special.type}</Typography>
        <Typography variant="body2">{special.text}</Typography>

        <CardActions>
          <Button
            component={Link}
            to={{
              pathname: `/addSpecial/${special.uuid}`,
            }}
            size="small"
          >
            Edit Special
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardSpecial;
