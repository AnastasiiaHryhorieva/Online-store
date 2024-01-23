import { useController } from "react-hook-form";

import { cn } from "@/helpers/helpers";

const Input = ({ label, name, control, errors, rules, className, ...rest }) => {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <div className="relative">
      <label
        className={cn(
          "pointer-events-none absolute left-4 top-2 text-[14px] leading-none text-black/60",
          errors[name] && "text-rose-500",
        )}
      >
        {label}
      </label>
      <input
        className={cn(
          "h-[60px] w-full border border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px] transition disabled:cursor-not-allowed disabled:opacity-70",
          errors[name] && "border-rose-500 focus:border-rose-500",
          className,
        )}
        {...field}
        {...rest}
      />
      {fieldState.error && (
        <span className="absolute left-0 top-full text-sm leading-none text-[red]">
          {fieldState.error.message}
        </span>
      )}
    </div>
  );
};

export { Input };
