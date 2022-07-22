import CardDirections from './CardDirections';

function ShowDirections({ directions }) {
  return (
    <>
      <h2>Directions</h2>
      {directions &&
        directions.map((direction, index) => (
          <CardDirections key={direction.uuid} direction={direction} index={index} />
        ))}
    </>
  );
}

export default ShowDirections;
