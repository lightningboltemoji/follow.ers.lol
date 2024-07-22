import { useMemo, useState } from "react";
import ExtLink from "../ext-link";

export default function SelectableView(props: {
  className?: string;
  followers: Set<string>;
  following: Set<string>;
  notFollowingYouBack: Set<string>;
  notFollowingThemBack: Set<string>;
}) {
  const [selected, setSelected] = useState<string>("notFollowingYouBack");
  const selectedSet = useMemo(() => Array.from(props[selected as keyof typeof props] || []), [selected, props]);

  return (
    <div className={[props.className].join(" ")}>
      <form onSubmit={() => {}} className="flex">
        <select
          name="set-to-view"
          className="flex-grow p-3 rounded-lg text-white bg-secondary appearance-none"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="notFollowingYouBack">Doesn't follow you back ({props.notFollowingYouBack?.size})</option>
          <option value="notFollowingThemBack">You don't follow them back ({props.notFollowingThemBack?.size})</option>
          <option value="followers">Followers ({props.followers?.size})</option>
          <option value="following">Following ({props.following?.size})</option>
        </select>
      </form>
      <div>
        <ol className="mx-4 mt-3 [&>li:not(:first-child)]:mt-2">
          {selectedSet.map((user) => (
            <li key={user}>
              <ExtLink className="text-xl" href={`https://instagram.com/${user}`}>
                {user}
              </ExtLink>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
