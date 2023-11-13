import { SVGProps } from "react";

type FooterLinkProps = {
  href: string;
  icon: (props: Omit<SVGProps<SVGSVGElement>, "ref">) => JSX.Element;
};

export function FooterLink({ href, icon }: FooterLinkProps) {
  return (
    <a href={href} target="_blank">
      {icon({
        className:
          "h-6 w-6 fill-gray-500 transition-colors duration-200 hover:fill-gray-400",
      })}
    </a>
  );
}
