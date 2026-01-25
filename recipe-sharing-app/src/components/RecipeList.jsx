import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>

      {filteredRecipes.length === 0 && <p>No recipes found.</p>}

      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '16px' }}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
