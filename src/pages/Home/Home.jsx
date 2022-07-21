import { useEffect, useState } from 'react';
import axiosAPI from '../../lib/axios/API';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    axiosAPI
      .get('/recipes')
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosAPI
      .get('/specials')
      .then((res) => {
        setSpecials(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {recipes.map((recipe) => (
        <div key={recipe.uuid}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      ))}
      {specials.map((special) => (
        <div key={special.uuid}>
          <h2>{special.title}</h2>
          <p>{special.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
