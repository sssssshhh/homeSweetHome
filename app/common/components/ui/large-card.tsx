import React from "react";
import { Card, CardContent } from "~/common/components/ui/card";
import { cn } from "~/lib/utils";

interface LargeCardProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function LargeCard({ children, className, contentClassName }: LargeCardProps) {
  return (
    <Card className={cn("border-purple-200 w-1/3 min-h-[500px] flex flex-col justify-center items-center", className)}>
      <CardContent className={cn("pt-10 px-8", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}

