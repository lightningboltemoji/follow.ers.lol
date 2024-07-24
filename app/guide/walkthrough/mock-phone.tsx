import { AnimationPlaybackControls, Segment, useAnimate } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import HomeScreen from "./home-screen";
import InstagramFeed from "./instagram-feed";

export default function MockPhone(props: { step: number }) {
  const [_, setAnimationState] = useState<{ step?: number; running?: AnimationPlaybackControls }>({});
  const [scope, animate] = useAnimate();
  const appIconRef = useRef<HTMLDivElement>(null);
  const homeScreenRef = useRef<HTMLDivElement>(null);
  const instagramAppRef = useRef<HTMLDivElement>(null);

  function hide<T extends Element>(ref: RefObject<T>): Segment {
    return [ref.current!, { visibility: "hidden" }, { duration: 0.001 }];
  }

  function unhide<T extends Element>(ref: RefObject<T>): Segment {
    return [ref.current!, { visibility: "unset" }, { duration: 0.001 }];
  }

  useEffect(
    () =>
      setAnimationState((s) => {
        const { step } = props;
        if (
          step === s.step ||
          !(scope.current && appIconRef.current && homeScreenRef.current && instagramAppRef.current)
        ) {
          return s;
        }

        s.running?.complete();

        var running;
        if (step == 0) {
          running = animate([
            unhide(homeScreenRef),
            [appIconRef.current, { scale: 1, filter: "blur(0px)" }, { bounce: 0, duration: 0.5 }],
            [homeScreenRef.current, { opacity: 1 }, { at: "-0.2" }],
            [instagramAppRef.current, { opacity: 0 }, { at: "<" }],
            hide(instagramAppRef),
          ]);
        } else if (step == 1) {
          running = animate([
            unhide(instagramAppRef),
            [appIconRef.current, { scale: 15, filter: "blur(0.4vh)" }, { bounce: 0, duration: 0.5 }],
            [homeScreenRef.current, { opacity: 0 }, { at: "-0.2" }],
            [instagramAppRef.current, { opacity: 1 }, { at: "<" }],
            hide(homeScreenRef),
          ]);
        }
        return { running, step };
      }),
    [scope, animate, props],
  );

  return (
    <div
      ref={scope}
      className="relative flex-row min-h-[60vh] max-h-[60vh] aspect-[9/19] rounded-[4vh] border-2 border-gray-600 overflow-hidden"
    >
      <HomeScreen ref={homeScreenRef} appIconRef={appIconRef} className="opacity-100" />
      <InstagramFeed ref={instagramAppRef} />
    </div>
  );
}
