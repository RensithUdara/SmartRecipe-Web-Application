"use client";

import { useEffect, useState } from "react";
import { ShoppingBasket } from "lucide-react";
import { createShoppingList } from "@/lib/recipe-utils";

type ShoppingListProps = {
  ingredients: string;
};

export function ShoppingList({ ingredients }: ShoppingListProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const items = createShoppingList(ingredients);

  useEffect(() => {
    setCheckedItems([]);
  }, [ingredients]);

  if (items.length === 0) {
    return null;
  }

  function toggleItem(id: string) {
    setCheckedItems((currentItems) =>
      currentItems.includes(id)
        ? currentItems.filter((item) => item !== id)
        : [...currentItems, id],
    );
  }

  return (
    <section className="mini-card">
      <h3>
        <ShoppingBasket size={18} />
        Shopping checklist
      </h3>
      <div className="shopping-list">
        {items.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={checkedItems.includes(item.id)}
              onChange={() => toggleItem(item.id)}
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
