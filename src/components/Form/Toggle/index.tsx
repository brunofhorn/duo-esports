import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface ToggleProps {
  value: string;
  weekDays: string[];
  title: string;
  letter: string;
}

export function Toggle({ value, weekDays, title, letter }: ToggleProps) {
  return (
    <ToggleGroup.Item
      value={value}
      className={`text-xs w-6 h-6 rounded ${
        weekDays.includes(value) ? 'bg-violet-500' : 'bg-zinc-900'
      }`}
      title={title}
    >
      {letter}
    </ToggleGroup.Item>
  );
}
