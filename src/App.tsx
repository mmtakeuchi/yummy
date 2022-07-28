import React from 'react';
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import Header from './components/Header/Header.component';
import HomePage from './containers/HomePage/HomePage.container';
import CategoryPage from './containers/CategoryPage/CategoryPage.container';
import RecipeDetailsPage from './containers/RecipeDetailsPage/RecipeDetailsPage.container';
import SearchRecipesPage from './containers/SearchRecipesPage/SearchRecipesPage.container';
import LetterRecipePage from './containers/LetterRecipePage/LetterRecipePage.container';
import Footer from './components/Footer/Footer.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main className="main-container">
          <Routes>
            <Route path="/recipes/:recipeId" element={<RecipeDetailsPage/>}/>
            <Route path="/recipes/search/:query" element={<SearchRecipesPage/>}/>
            <Route path="/categories/:categoryId" element={<CategoryPage/>}/>
            <Route path="/recipes/letter/:letterId" element={<LetterRecipePage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
