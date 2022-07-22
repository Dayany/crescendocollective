import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from '@mui/material';
import ViewRecipeDetail from './components/Recipes/ViewRecipeDetail';
import AddRecipe from './components/Recipes/AddRecipe';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/viewRecipe/:recipeId" element={<ViewRecipeDetail />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
