export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'all';
// TaskType
export type TaskType = {
  id: number;
  task: string;
  dueDate?: string;
  status: TaskStatus;
};
