import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import TopArea from "./top-area";

function Component(
  props: PropsWithChildren<{
    className?: string;
    topAreaColor: string;
  }>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={["absolute top-0 left-0 flex flex-col size-full opacity-0", props.className].join(" ")}>
      <TopArea color={props.topAreaColor} />
      {props.children}
    </div>
  );
}

const PhoneView = forwardRef(Component);
export default PhoneView;
