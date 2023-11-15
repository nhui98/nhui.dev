import cn from "@nhui/cn";

type TextLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export function TextLink({ children, className, href }: TextLinkProps) {
  return (
    <a href={href} target="_blank" className={cn("text-gray-200", className)}>
      {children}
    </a>
  );
}
