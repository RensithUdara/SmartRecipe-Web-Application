import { BookOpen, Copy, Download, Printer, Star } from "lucide-react";
import type { RecipeRecord } from "@/types/recipe";

type RecipePreviewProps = {
  currentRecipe: RecipeRecord | null;
  isFavorite: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onPrint: () => void;
  onToggleFavorite: () => void;
};

export function RecipePreview({
  currentRecipe,
  isFavorite,
  onCopy,
  onDownload,
  onPrint,
  onToggleFavorite,
}: RecipePreviewProps) {
  return (
    <section className="preview-card" aria-live="polite">
      <div className="preview-heading">
        <p className="section-label green">
          <BookOpen size={18} />
          Recipe Preview
        </p>

        {currentRecipe ? (
          <div className="recipe-actions">
            <button type="button" onClick={onToggleFavorite}>
              <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? "Saved" : "Save"}
            </button>
            <button type="button" onClick={onCopy}>
              <Copy size={16} />
              Copy
            </button>
            <button type="button" onClick={onDownload}>
              <Download size={16} />
              Download
            </button>
            <button type="button" onClick={onPrint}>
              <Printer size={16} />
              Print
            </button>
          </div>
        ) : null}
      </div>

      {currentRecipe ? (
        <article
          className="recipe-output"
          dangerouslySetInnerHTML={{ __html: currentRecipe.recipe }}
        />
      ) : (
        <div className="empty-preview">
          <div>
            <h3>Your generated recipe will appear here.</h3>
            <p>
              Add ingredients, choose quick picks, and generate a recipe for a
              clean step-by-step cooking plan.
            </p>
          </div>
          <div className="preview-sketch" aria-hidden="true">
            <span className="pot" />
            <span>Good Food Good Mood</span>
          </div>
        </div>
      )}
    </section>
  );
}
