"use client";

import { BlobReader, Entry, TextWriter, ZipReader } from "@zip.js/zip.js";
import { useMemo, useState } from "react";
import FileSelect from "./file-select";
import SelectableView from "./selectable-view";

export default function Analyze() {
  const [followers, setFollowers] = useState<Set<string>>(new Set());
  const [following, setFollowing] = useState<Set<string>>(new Set());
  const notFollowingYouBack = useMemo(() => following.difference(followers), [followers, following]);
  const notFollowingThemBack = useMemo(() => followers.difference(following), [followers, following]);

  async function parseJson(entry: Entry) {
    if (!entry.getData) {
      return;
    }
    const buff = new TextWriter();
    await entry.getData(buff);
    return JSON.parse(await buff.getData());
  }

  async function entryReader(entries: Entry[], flattener: any) {
    return (await Promise.all(entries.map(parseJson)))
      .flatMap(flattener)
      .map((e: any) => e["string_list_data"][0]["value"]);
  }

  async function parse(file: File) {
    const zipReader = new ZipReader(new BlobReader(file));
    try {
      const entries = await zipReader.getEntries();

      const followerZipEntries = entries.filter((f) => f.filename.match(/followers_\d+.json/));
      const followingZipEntries = entries.filter((f) => f.filename.match(/following.json/));

      setFollowers(new Set(await entryReader(followerZipEntries, (e: any) => e)));
      setFollowing(new Set(await entryReader(followingZipEntries, (e: any) => e["relationships_following"])));
    } finally {
      await zipReader.close();
    }
  }

  return (
    <div className="flex flex-col flex-grow">
      <FileSelect className="flex-grow mt-3" parse={parse} />
      <SelectableView
        className="flex-grow mt-5 mb-5"
        followers={followers}
        following={following}
        notFollowingYouBack={notFollowingYouBack}
        notFollowingThemBack={notFollowingThemBack}
      />
    </div>
  );
}
