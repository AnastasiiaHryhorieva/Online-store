import { cn } from "@/lib/utils";
import { PlusIcon, MinusIcon } from "lucide-react";

const Counter = ({ value, onChange, className }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };
  const handleDecrement = () => {
    if (value === 1) return;
    onChange(value - 1);
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <button type="button" onClick={handleDecrement}>
        <MinusIcon />
      </button>
      <div className="flex h-8 w-8 items-center justify-center border border-black">
        {value}
      </div>
      <button type="button" onClick={handleIncrement}>
        <PlusIcon />
      </button>
    </div>
  );
};

export { Counter };
