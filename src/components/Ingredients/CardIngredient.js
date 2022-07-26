import { Card, CardContent, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

function CardIngredient({ ingredient, specials }) {
  const [specialInfo, setSpecialInfo] = useState(null);
  useMemo(() => {
    specials?.find((element) => {
      if (element.ingredientId === ingredient.uuid) {
        setSpecialInfo(element);
      }
    });
  }, [specials, ingredient.uuid]);

  return (
    <Card sx={{ marginBottom: 2, minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {ingredient.name}
        </Typography>
        <Typography variant="body2"> Amount: {ingredient.amount}</Typography>
        <Typography variant="body2"> Measurement: {ingredient.measurement}</Typography>
        {specialInfo ? (
          <Typography variant="body2"> SPECIAL: {specialInfo.title}</Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default CardIngredient;
