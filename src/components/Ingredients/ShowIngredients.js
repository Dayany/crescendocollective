import { useEffect, useState } from 'react';
import axiosAPI from '../../lib/axios/API';
import CardIngredient from './CardIngredient';

function ShowIngredient({ ingredients }) {
  const [specials, setSpecials] = useState([]);
  useEffect(() => {
    axiosAPI
      .get(`/specials`)
      .then((res) => {
        setSpecials(res.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Ingredients</h2>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <CardIngredient
            key={ingredient.uuid}
            ingredient={ingredient}
            index={index}
            specials={specials}
          />
        ))}
    </>
  );
}

export default ShowIngredient;
