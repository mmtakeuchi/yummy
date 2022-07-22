import React from 'react';
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import RecipeList from './components/RecipeList/RecipeList.component';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
     <Route path="/:recipeId" element={<RecipeDetails/>}/>
     <Route path="/" element={<RecipeList/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
