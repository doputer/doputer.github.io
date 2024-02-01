interface CounterProps {
  label?: string;
  count: number;
}

function Counter({ label = 'All', count }: CounterProps) {
  return (
    <div className="text-4xl font-extrabold tracking-tight">
      {label}
      <sup>{count}</sup>
    </div>
  );
}

export default Counter;
