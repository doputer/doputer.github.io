interface CounterProps {
  label?: string;
  count: number;
}

const Counter = ({ label = 'all', count }: CounterProps) => {
  return (
    <div className="text-3xl font-bold capitalize tracking-tight">
      {label}
      <sup className="text-xl font-bold">{count}</sup>
    </div>
  );
};

export default Counter;
