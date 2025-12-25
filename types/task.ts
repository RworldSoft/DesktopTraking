export interface Task {
  id: number;
  title: string;
  synced: number; // 0 or 1 (SQLite style)
}
