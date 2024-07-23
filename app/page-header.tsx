"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageBounds from "./page-bounds";

export default function PageHeader() {
  function share() {
    window.navigator.share({
      title: "follow.ers.lol",
      url: "https://follow.ers.lol",
    });
  }

  const [onMobile, setOnMobile] = useState(true);
  useEffect(
    () =>
      setOnMobile(
        !!window.navigator.userAgent.match(/Mobi/i) ||
          !!window.navigator.userAgent.match(/Android/i) ||
          !!window.navigator.userAgent.match(/iPhone/i),
      ),
    [],
  );

  const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(!!window.navigator.share), []);

  const emojis = ["😇", "🤩", "🥸", "🫠", "🤠"];
  const [emoji, _] = useState(emojis[Math.floor(Math.random() * emojis.length)]);

  const router = useRouter();
  return (
    <>
      <div className="flex mx-4 py-2 text-xl sticky top-0 bg-primary select-none">
        <PageBounds>
          <div className="flex flex-grow">
            <button className="mr-auto" onClick={router.back}>
              ⬅️
            </button>
            <Link href="/">
              <span suppressHydrationWarning={true}>follow.ers.lol {emoji}</span>
            </Link>
            <span className="ml-auto">{canShare && <button onClick={share}>🤝</button>}</span>
          </div>
        </PageBounds>
      </div>
      <PageBounds>
        {!onMobile && (
          <div className="flex rounded-xl py-4 bg-alert my-2">
            <div className="m-auto text-3xl">🚨</div>
            <div className="font-bold text-xl text-white text-center">
              This site works best on your phone
              <br />
              Switch over if possible
            </div>
            <div className="m-auto text-3xl">🚨</div>
          </div>
        )}
      </PageBounds>
    </>
  );
}
