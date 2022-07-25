import { Card, CardContent, Typography } from '@mui/material';

function CardSpecial({ special }) {
  return (
    <Card sx={{ marginBottom: 2, minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {special.title}
        </Typography>
        <Typography variant="body2">{special.type}</Typography>
        <Typography variant="body2">{special.text}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardSpecial;
