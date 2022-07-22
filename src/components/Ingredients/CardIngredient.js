import { Card, CardContent, Typography } from '@mui/material';

function CardIngredient({ ingredient }) {
  return (
    <Card sx={{ marginBottom: 2, minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {ingredient.name}
        </Typography>
        <Typography variant="body2"> Amount: {ingredient.amount}</Typography>
        <Typography variant="body2"> Measurement: {ingredient.measurement}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardIngredient;
