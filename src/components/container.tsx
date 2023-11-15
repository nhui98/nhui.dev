import cn from "@nhui/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl px-7", className)}>
      {children}
    </div>
  );
}
