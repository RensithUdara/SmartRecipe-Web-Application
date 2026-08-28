import { BookOpen, CheckCircle2, Clock3, Lightbulb, Star, Trash2 } from "lucide-react";
import type { RecipeRecord } from "@/types/recipe";

type RecipeSidebarProps = {
  history: RecipeRecord[];
  favorites: RecipeRecord[];
  onSelectRecipe: (recipe: RecipeRecord) => void;
  onClearHistory: () => void;
};

export function RecipeSidebar({
  history,
  favorites,
  onSelectRecipe,
  onClearHistory,
}: RecipeSidebarProps) {
  return (
    <aside className="side-column">
      <section className="recent-card" id="history">
        <div className="side-heading">
          <h2>
            <Clock3 size={20} />
            Recent Recipes
          </h2>
          <button
            className="clear-all"
            type="button"
            onClick={onClearHistory}
            disabled={history.length === 0}
          >
            <Trash2 size={15} />
            Clear all
          </button>
        </div>

        {history.length === 0 ? (
          <EmptyRecipeList
            icon={<BookOpen size={38} />}
            title="No recent recipes yet."
            description="Your last 10 generated recipes will appear here."
          />
        ) : (
          <RecipeList recipes={history} onSelectRecipe={onSelectRecipe} />
        )}
      </section>

      <section className="favorites-card">
        <div className="side-heading">
          <h2>
            <Star size={20} />
            Favorites
          </h2>
        </div>

        {favorites.length === 0 ? (
          <EmptyRecipeList
            icon={<Star size={38} />}
            title="No favorites saved."
            description="Save your best recipes from the preview panel."
          />
        ) : (
          <RecipeList recipes={favorites} onSelectRecipe={onSelectRecipe} />
        )}
      </section>

      <section className="tips-card">
        <h2>
          <Lightbulb size={20} />
          Tips for better recipes
        </h2>
        <ul>
          <li>
            <CheckCircle2 size={17} />
            Add 3-8 ingredients for best results
          </li>
          <li>
            <CheckCircle2 size={17} />
            Use preferences to control time, servings, and cuisine
          </li>
          <li>
            <CheckCircle2 size={17} />
            You can use Sinhala for ingredient names
          </li>
        </ul>
      </section>
    </aside>
  );
}

function RecipeList({
  recipes,
  onSelectRecipe,
}: {
  recipes: RecipeRecord[];
  onSelectRecipe: (recipe: RecipeRecord) => void;
}) {
  return (
    <div className="history-list">
      {recipes.map((item, index) => (
        <button
          className="history-item"
          type="button"
          key={item.id}
          onClick={() => onSelectRecipe(item)}
        >
          <span>Recipe {index + 1}</span>
          <strong>{item.ingredients}</strong>
        </button>
      ))}
    </div>
  );
}

function EmptyRecipeList({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="empty-history">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
