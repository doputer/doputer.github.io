interface CounterProps {
  label?: string;
  count: number;
}

const Counter = ({ label = 'all', count }: CounterProps) => {
  return (
    <div className="text-4xl font-extrabold capitalize tracking-tight">
      {label}
      <sup>{count}</sup>
    </div>
  );
};

export default Counter;
