interface CounterProps {
  label?: string;
  count: number;
}

function Counter({ label = 'all', count }: CounterProps) {
  return (
    <div className="text-4xl font-extrabold tracking-tight">
      {label.charAt(0).toUpperCase() + label.slice(1)}
      <sup>{count}</sup>
    </div>
  );
}

export default Counter;
