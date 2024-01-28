import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

const Spinner = ({ className, ...rest }) => {
  return <Loader2Icon className={cn("animate-spin", className)} {...rest} />;
};

export { Spinner };
