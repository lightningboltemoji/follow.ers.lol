import Film from "@/public/film.svg";
import Home from "@/public/home.svg";
import ImageIcon from "@/public/image.svg";
import PlusSquare from "@/public/plus-square.svg";
import Search from "@/public/search.svg";
import User from "@/public/user.svg";
import { ForwardedRef, forwardRef } from "react";
import PhoneView from "./phone-view";

function Component(props: {}, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <PhoneView topAreaColor="white" ref={ref} className="bg-gray-600">
      <div className="flex flex-col shrink basis-[fit-content] overflow-hidden">
        {[1, 2].map((post) => (
          <>
            <div className="flex flex-row items-center pl-[1vh] py-[1vh]">
              <User className="bg-black rounded-full stroke-white size-[3vh] p-[0.4vh]" />
              <span className="text-white pl-[1vh] text-[1.5vh]">User</span>
            </div>
            <div className="flex min-w-full aspect-square bg-indigo-100">
              <ImageIcon className="size-4/6 stroke-amber-800 opacity-10 m-auto" />
            </div>
          </>
        ))}
      </div>
      <div className="flex basis-[6vh] items-center justify-evenly bg-gray-800">
        <Home className="stroke-white size-[1.8vh]" />
        <Search className="stroke-white size-[1.8vh]" />
        <PlusSquare className="stroke-white size-[1.8vh]" />
        <Film className="stroke-white size-[1.8vh]" />
        <User className="stroke-white size-[1.8vh]" />
      </div>
    </PhoneView>
  );
}

const InstagramFeed = forwardRef(Component);
export default InstagramFeed;
