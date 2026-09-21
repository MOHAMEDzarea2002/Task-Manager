
import { useTaskContext } from '../context/Context';

import CardTask from './CardTask';


export default function TasksList() {
  const { tasks ,stateFilter} = useTaskContext();
  
const filterTask = stateFilter == "all" ? tasks : tasks.filter((task) =>
  task.status === stateFilter
);
  return (
    <div>
      <ul>
        {filterTask.map((task, index: number) => (
          <CardTask key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}
