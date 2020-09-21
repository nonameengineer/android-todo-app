export interface Task {
  id: string;
  title: string;
  date: Date;
  color: string;
  isFavorite: boolean;
  isArchived: boolean;
}
