import { CiCalendarDate } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useTaskContext,   } from '../context/Context';
import type { TaskType } from '../types/TaskStatus';
import { SelectDemo } from './SelectDemo';
type CardTask = {
  task: TaskType;
};
export default function CardTask({ task }: CardTask) {
  const { deleteTask, upDateState } = useTaskContext();

  return (
    <div className="flex justify-between items-center  px-4 py-2 my-3  bg-white shadow-2xs rounded-sm  ">
      <div className="text-left">
        <span className="text-lg">{task?.task}</span>
        <div className="flex items-center space-x-2  text-gray-400">
          <span>
            <CiCalendarDate />
          </span>

          <span>Due: {task.dueDate}</span>
        </div>
      </div>

      <div className=" flex items-center space-x-1  ">
        <SelectDemo
          state={task.status}
          onChange={(state) => {
            if (state === null) return;
            upDateState(task.id, state);
          }}
        />
        <button
          onClick={() => deleteTask(task?.id)}
          className=" flex items-center  cursor-pointer hover:text-red-500 transition-all duration-200"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}
