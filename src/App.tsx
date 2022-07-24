import React from 'react';
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage.container';
import RecipeList from './components/RecipeList/RecipeList.component';
import IngredientList from './components/IngredientList/IngredientList.component';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
     <Route path="/:recipeId" element={<RecipeDetails/>}/>
     <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
