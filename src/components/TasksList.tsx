
import   {useTaskContext}    from '../context/Context';
import CardTask from './CardTask';
import type  { TaskType } from '../types/TaskStatus';



export default function TasksList() {
  const taskContext = useTaskContext() as any;
  const { tasks, filter = 'all' } = taskContext;

  const filterTask =
    filter === 'all' ? tasks : tasks.filter(({ status }: TaskType) => status === filter);
  return (
    <div>
      <ul>
        {filterTask.map((task: TaskType, index: number) => (
          <CardTask key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}
