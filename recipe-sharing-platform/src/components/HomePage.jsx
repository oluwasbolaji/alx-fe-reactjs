import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";
import AddRecipeForm from "./AddRecipeForm";

const HomePage = () => {
  // State for all recipes
  const [recipes, setRecipes] = useState([]);

  // Load initial recipes from data.json
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  // Handle adding a new recipe from AddRecipeForm
  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Recipe Sharing Platform
      </h1>

      {/* Add New Recipe Form */}
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

                {/* Optional: Display first few steps as preview */}
                {recipe.steps && recipe.steps.length > 0 && (
                  <div className="mt-2 text-gray-500 text-sm">
                    <strong>Steps Preview:</strong>{" "}
                    {recipe.steps.slice(0, 2).join(", ")}...
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
