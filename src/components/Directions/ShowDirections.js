import CardDirections from './CardDirections';

function ShowDirections({ directions }) {
  return (
    <>
      <h2>Directions</h2>
      {directions &&
        directions.map((direction, index) => (
          <CardDirections key={`card-directions-${index}`} direction={direction} index={index} />
        ))}
    </>
  );
}

export default ShowDirections;
