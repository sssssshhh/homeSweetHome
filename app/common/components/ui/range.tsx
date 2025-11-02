import * as React from "react";
import { cn } from "~/lib/utils";

interface RangeProps extends Omit<React.ComponentProps<"input">, "type"> {
  className?: string;
}

function Range({ className, ...props }: RangeProps) {
  return (
    <input
      type="range"
      data-slot="range"
      className={cn(
        "w-full h-2 accent-purple-600",
        className
      )}
      {...props}
    />
  );
}

export { Range };

