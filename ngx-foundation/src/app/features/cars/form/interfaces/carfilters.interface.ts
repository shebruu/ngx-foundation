export interface CarFilters {
  model?: string;
  brand?: string;
  //   les champs peuvent être vides
  minYear?: number | null;
  maxYear?: number | null;
  minHp?: number | null;
  maxHp?: number | null;
}