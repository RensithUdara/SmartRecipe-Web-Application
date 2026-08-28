import { AppFooter } from "@/components/AppFooter";
import { AppNav } from "@/components/AppNav";
import { PageHeader } from "@/components/PageHeader";
import { SavedRecipesView } from "@/components/SavedRecipesView";

export default function RecipesPage() {
  return (
    <main className="page-shell">
      <AppNav />
      <PageHeader
        eyebrow="Recipe Library"
        title="Your saved recipes in one place."
        description="Browse recent generations, search by ingredients, download recipes, and manage favorites saved in your browser."
      />
      <SavedRecipesView />
      <AppFooter />
    </main>
  );
}
