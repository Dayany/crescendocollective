import CardIngredient from './CardIngredient';

function ShowIngredient({ ingredients }) {
  return (
    <>
      <h2>Ingredients</h2>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <CardIngredient key={ingredient.uuid} ingredient={ingredient} index={index} />
        ))}
    </>
  );
}

export default ShowIngredient;
