import FilterTask from '@/components/FilterTask';
import AddTask from '../components/AddTask';
import TasksList from '../components/TasksList';

export default function Home() {
  return (
    <div className=" p-2  overflow-hidden flex justify-center flex-col ">
      <AddTask />
      <FilterTask/>
      <TasksList/>
    </div>
  );
}
