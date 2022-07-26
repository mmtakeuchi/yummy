import React from 'react';
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import Header from './components/Header/Header.component';
import HomePage from './containers/HomePage/HomePage.container';
import CategoryPage from './containers/CategoryPage/CategoryPage.container';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.component';
import SearchRecipesPages from './containers/SearchRecipesPage/SearchRecipesPages.container';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <main className="main-container">
        <Routes>
          <Route path="/recipes/:recipeId" element={<RecipeDetails/>}/>
          <Route path="/recipes/search/:query" element={<SearchRecipesPages/>}/>
          <Route path="/categories/:categoryId" element={<CategoryPage/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
