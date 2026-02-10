import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";
import AddRecipeForm from "./AddRecipeForm";

const HomePage = () => {
  // State for recipes
  const [recipes, setRecipes] = useState([]);

  // Load initial data from data.json
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  // Function to add a new recipe from the form
  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Recipe Sharing Platform
      </h1>

      {/* Add Recipe Form */}
      <AddRecipeForm onAdd={handleAddRecipe} />

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
