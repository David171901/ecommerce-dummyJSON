import { Category } from "../interfaces/categories";

export function formatCategoryName(category: string) {
    const formattedName = category
      .replace(/-/g, " ") // Reemplazar guiones por espacios
      .replace(/\b\w/g, (c) => c.toUpperCase()); // Convertir primera letra a mayúscula
    return formattedName;
}
