import { PropsWithChildren } from "react";

export default function ExtLink(props: PropsWithChildren<{ className?: string; href: string }>) {
  return (
    <a
      className={["font-bold hover:underline hover:decoration-dotted", props.className].join(" ")}
      href={props.href}
      target="_blank"
    >
      ↗ {props.children}
    </a>
  );
}
