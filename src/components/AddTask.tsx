import React, { useState } from 'react';
import type { TaskType } from '../context/Context';
import { useTaskContext } from '../context/Context';
import { DatePickerDemo } from './DatePicker';
 const initialTask: TaskType = {
   id: 0,
   task: '',
   dueDate: '',
   status: 'todo' as TaskType['status'],
 };

export default function AddTask() {
  const { addTask } = useTaskContext();
  const [formTask, setFormTask] = useState<TaskType>(initialTask);
  const [DateTask, setDate] = useState<Date | undefined>();

  // Handle Form
  const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Add Task
  const HandleAddTask = (e: React.MouseEvent) => {

    e.preventDefault();

    if (formTask.task.trim() === '' || DateTask == null) {
      return;
    }

    // Convert the Date Variable To  text
    const dueDate = DateTask ? DateTask.toISOString().split('T')[0] : '';
    // Add Task in state Context
    addTask({
      ...formTask,
      dueDate: dueDate,
    });

    setFormTask(initialTask);
    setDate(undefined);
  };

  return (
    <div className="shadow-sm    overflow-hidden  p-3 rounded-sm drop-shadow-sm bg-blue-50">
      <form className=" flex items-center flex-wrap space-x-1.5">
        <input
          required
          type="text"
          placeholder="Enter Task"
          className="border-2 flex-20  rounded-sm py-1 px-2 border-gray-300 bg-white focus:outline-blue-500
          transition-all
mt-4 sm:mt-0
          "
          name="task"
          onChange={handleForm}
          value={formTask.task}
        />
        <div className="mt-4 sm:mt-0">
          <DatePickerDemo value={DateTask} onChange={setDate} />
        </div>

        <button
          onClick={HandleAddTask}
          className="bg-blue-500 flex-10 mt-4 sm:mt-0  px-2 py-1  rounded-sm text-white cursor-pointer "
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
