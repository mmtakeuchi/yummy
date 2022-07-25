import React from 'react';
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage.container';
import CategoryPage from './containers/CategoryPage/CategoryPage.container';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
     <Route path="/recipes/:recipeId" element={<RecipeDetails/>}/>
     <Route path="/categories/:categoryId" element={<CategoryPage/>}/>
     <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
