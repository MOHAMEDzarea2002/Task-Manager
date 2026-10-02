import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { TaskType, TaskStatus } from '@/types/TaskStatus';

const items = [
  { label: 'Todo', state: 'todo' },
  { label: 'In Progress', state: 'in-progress' },
  { label: 'Done', state: 'done' },
];

type typeSelectProp = {
  state: TaskStatus;
  onChange: (state: TaskType['status'] | null) => void;
};

export function SelectDemo({ onChange, state }: typeSelectProp) {
  return (
    <Select value={state} onValueChange={(state) => onChange(state as TaskStatus)}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.state} value={item.state}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
