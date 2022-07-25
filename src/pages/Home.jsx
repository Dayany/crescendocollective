import { useEffect, useState } from 'react';
import axiosAPI from '../lib/axios/API';
import ListRecipes from '../components/Recipes/ListRecipes';
import ListSpecials from '../components/Specials/ListSpecials';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    axiosAPI
      .get('/recipes')
      .then((res) => {
        setRecipes(res.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosAPI
      .get('/specials')
      .then((res) => {
        setSpecials(res.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ListRecipes recipes={recipes} />
      <ListSpecials specials={specials} />
    </>
  );
}

export default Home;
