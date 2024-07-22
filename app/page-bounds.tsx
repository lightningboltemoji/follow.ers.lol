import { PropsWithChildren } from "react";

export default function PageBounds(props: PropsWithChildren) {
  return (
    <div className="flex flex-grow justify-center">
      <div className="max-w-[calc(min(100vw,600px))] px-5 flex-grow">
        {props.children}
      </div>
    </div>
  );
}
