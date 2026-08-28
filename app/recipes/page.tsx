import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { RecipesHero } from "@/components/RecipesHero";
import { SavedRecipesView } from "@/components/SavedRecipesView";

export default function RecipesPage() {
  return (
    <main className="page-shell recipes-page">
      <AppNav />
      <div className="page-content recipes-page-content">
        <RecipesHero />
        <SavedRecipesView />
      </div>
      <AppFooter />
    </main>
  );
}
