import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  if (type === "password") {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-10 w-full border border-black bg-background py-2 pl-4 pr-[50px] text-sm disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-current"
          type="button"
          title={showPassword ? "Сховати пароль" : "Показати пароль"}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>
    );
  }

  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full border border-black bg-background px-4 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
