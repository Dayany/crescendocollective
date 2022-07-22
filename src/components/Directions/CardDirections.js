import { Card, CardContent, Typography } from '@mui/material';

function CardDirections({ direction }) {
  return (
    <Card sx={{ marginBottom: 2, minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {direction.name}
        </Typography>
        <Typography variant="body2">
          <b>Instructions:</b> {direction.instructions}
        </Typography>
        <Typography variant="body2">
          <b>Optional?</b> {direction.optional ? 'Yes' : 'No'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardDirections;
