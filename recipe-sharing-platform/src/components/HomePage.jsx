import { Link } from "react-router-dom";

// Inside recipes.map
<Link to={`/recipe/${recipe.id}`}>
  <div
    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
  >
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
