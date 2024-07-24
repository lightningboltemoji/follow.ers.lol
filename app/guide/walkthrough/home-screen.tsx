import InstagramIcon from "@/public/instagram.svg";
import { ForwardedRef, forwardRef, RefObject } from "react";
import PhoneView from "./phone-view";

function Component(
  props: {
    className?: string;
    appIconRef: RefObject<HTMLDivElement>;
  },
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <PhoneView className={["bg-gray-200", props.className].join(" ")} topAreaColor="black" ref={ref}>
      <div className="flex grow-[5]">
        <div className="flex flex-col grow">
          <HomeScreenRow />
          <HomeScreenRow />
          <HomeScreenRow appIconRef={props.appIconRef} />
          <HomeScreenRow />
          <HomeScreenRow />
        </div>
      </div>
      <div className="flex grow-[1] bg-gray-400 rounded-[2.5vh] m-[0.5vh] mb-[1vh]">
        <div className="flex grow items-center">
          <HomeScreenRow />
        </div>
      </div>
    </PhoneView>
  );
}

function HomeScreenRow(props: { appIconRef?: RefObject<HTMLDivElement> }) {
  return (
    <div className="flex grow mx-1">
      <HomeScreenIcon />
      <HomeScreenIcon />
      <HomeScreenIcon appIconRef={props.appIconRef} />
      <HomeScreenIcon />
    </div>
  );
}

function HomeScreenIcon(props: { appIconRef?: RefObject<HTMLDivElement> }) {
  return (
    <div
      className={[
        "inline-block m-auto w-[5vh] aspect-square rounded-[1.2vh] bg-gray-500",
        props.appIconRef ? "instagram" : undefined,
      ].join(" ")}
      ref={props.appIconRef}
    >
      {props.appIconRef && <InstagramIcon className="instagram stroke-white p-[0.3vh]" />}
      {/* From https://stackoverflow.com/questions/37751375/instagram-new-logo-css-background */}
      <style scoped jsx>{`
        .instagram {
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
        }
      `}</style>
    </div>
  );
}

const HomeScreen = forwardRef(Component);
export default HomeScreen;
