import React, { createContext, useContext, useEffect, useState } from 'react';

type ContextProvider = {
  children: React.ReactNode;
};
export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'all';
// TaskType
export type TaskType = {
  id: number;
  task: string;
  dueDate?: string;
  status: TaskStatus;
};

type TaskContextType = {
  tasks: TaskType[];
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
  setFilter: React.Dispatch<React.SetStateAction<TaskStatus>>;
  filter: TaskStatus;
  addTask: (task: Omit<TaskType, 'id'>) => void;
  deleteTask: (id: number) => void;
  upDateState: (id: number, state: TaskStatus) => void;
  filterTask: (status: TaskStatus) => void;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskContextProvider = ({ children }: ContextProvider) => {
  const [tasks, setTask] = useState<TaskType[]>(() => {
    const save = localStorage.getItem('task');
    return save ? JSON.parse(save) : [];
  });

  const [filter, setFilter] = useState<TaskStatus>('all' as TaskStatus);

  // useEffect
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (task: Omit<TaskType, 'id'>) => {
    const newTask = { ...task, id: Date.now() };
    setTask((prev) => {
      let upDateTask = [...prev, newTask];
      localStorage.setItem('task', JSON.stringify(upDateTask));
      return upDateTask;
    });
  };
  // Update
  const upDateState = (id: number, state: TaskStatus) => {
    let TaskUpaDate = tasks.map((task) => (task.id === id ? { ...task, status: state } : task));
    setTask(TaskUpaDate);
  };
  // Delete
  const deleteTask = (id: number) => {
    let filterTask = tasks.filter((task) => task.id !== id);
    setTask(filterTask);
  };

  // setStateFilter
  const filterTask = (state: TaskStatus) => {
    setFilter(state);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTask,
        setFilter,
        addTask,
        deleteTask,
        upDateState,
        filterTask,
        filter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export const useTaskContext = () => {
  const ctx = useContext(TaskContext);

  if (!ctx) {
    throw new Error('useTaskContext must be used within TaskContextProvider');
  }
  return ctx;
};
