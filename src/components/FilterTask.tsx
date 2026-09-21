import { useTaskContext, type TaskStatus } from '@/context/Context';

export default function FilterTask() {
  const { tasks, filter, setFilter } = useTaskContext();
  const StateTask = ['todo', 'in-progress', 'done'];

  const handleActive = (state: TaskStatus) => {
    setFilter(state);
  };

  return (
    <div className="flex justify-between items-center flex-wrap my-4">
      <div className="flex items-center  bg-blue-100 p-1 rounded-sm ">
        <button
          onClick={() => handleActive('all')}
          className={`whitespace-nowrap tracking-[2px] py-2 px-2 md:px-3 cursor-pointer  text-sm md:text-lg rounded-sm uppercase ${filter === 'all' ? ' bg-white' : ''} `}
        >
          All {tasks.length}
        </button>

        {StateTask.map((state) => (
          <button
            onClick={() => handleActive(state as TaskStatus)}
            key={state}
            className={` whitespace-nowrap tracking-[2px] py-2 px-2 md:px-3 cursor-pointer  text-sm md:text-lg  rounded-sm uppercase ${filter === state ? ' bg-white' : ''} `}
          >
            <span className="mr-2">{state}</span>
          </button>
        ))}
      </div>

      <span className="text-sm md:text-lg p-1 tracking-[2px] mt-4 md:mt-0">
        Showing {tasks.length} Task
      </span>
    </div>
  );
}
