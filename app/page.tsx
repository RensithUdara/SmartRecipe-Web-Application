"use client";

import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { HeroSection } from "@/components/HeroSection";
import { IngredientManager } from "@/components/IngredientManager";
import { MealPlanner } from "@/components/MealPlanner";
import { NutritionEstimate } from "@/components/NutritionEstimate";
import { PantrySuggestions } from "@/components/PantrySuggestions";
import { RecipeForm } from "@/components/RecipeForm";
import { RecipePreview } from "@/components/RecipePreview";
import { RecipeSidebar } from "@/components/RecipeSidebar";
import { ShoppingList } from "@/components/ShoppingList";
import { useRecipeApp } from "@/hooks/useRecipeApp";

export default function Home() {
  const recipeApp = useRecipeApp();

  return (
    <main className="page-shell">
      <AppNav />
      <HeroSection />

      <section className="content-grid" id="generator">
        <div className="main-column">
          <RecipeForm
            ingredients={recipeApp.ingredients}
            ingredientCount={recipeApp.ingredientCount}
            isLoading={recipeApp.isLoading}
            options={recipeApp.options}
            onIngredientsChange={recipeApp.setIngredients}
            onOptionChange={recipeApp.updateOption}
            onQuickPick={recipeApp.addQuickIngredient}
            onSubmit={recipeApp.generateRecipe}
          />

          <IngredientManager
            ingredients={recipeApp.ingredients}
            onRemoveIngredient={recipeApp.removeIngredient}
          />

          <div className="insight-grid">
            <PantrySuggestions
              ingredients={recipeApp.ingredients}
              onAddIngredient={recipeApp.addQuickIngredient}
            />
            <ShoppingList ingredients={recipeApp.ingredients} />
            <MealPlanner recipe={recipeApp.currentRecipe} />
          </div>

          {recipeApp.isLoading ? (
            <div className="loading-card" role="status">
              <div className="loader" aria-hidden="true" />
              <span>Building a recipe from your ingredients...</span>
            </div>
          ) : null}

          {recipeApp.error ? (
            <p className="error-message">{recipeApp.error}</p>
          ) : null}

          {recipeApp.notice ? (
            <p className="notice-message">{recipeApp.notice}</p>
          ) : null}

          <RecipePreview
            currentRecipe={recipeApp.currentRecipe}
            isFavorite={recipeApp.isFavorite}
            onCopy={recipeApp.handleCopyRecipe}
            onDownload={recipeApp.handleDownloadRecipe}
            onPrint={recipeApp.handlePrintRecipe}
            onToggleFavorite={recipeApp.toggleFavorite}
          />
        </div>

        <div className="side-column">
          <RecipeSidebar
            history={recipeApp.history}
            favorites={recipeApp.favorites}
            onSelectRecipe={recipeApp.showRecipe}
            onClearHistory={recipeApp.clearHistory}
          />
          <NutritionEstimate recipe={recipeApp.currentRecipe} />
        </div>
      </section>

      <AppFooter />
    </main>
  );
}
