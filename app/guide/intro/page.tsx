import Link from "next/link";

export default function Intro() {
  return (
    <div className="mt-8 [&>p:not(:first-child)]:mt-6">
      <p>Hi!👋</p>
      <p>First, we need to export a list of followers and following from Instagram.</p>
      <p>
        This is easy to do, but it's critical you get <b>all options exactly right</b>. Switch back and forth between
        Instagram and this guide as much as you need to.
      </p>
      <p>
        Also, <b>have your password handy</b>. Don't worry: Instagram will ask for it, not this site.
      </p>
      <div className="flex justify-end mt-8">
        <Link href="/guide/walkthrough">
          <button className="bg-secondary text-white rounded-xl px-6 py-2 text-lg">Next</button>
        </Link>
      </div>
      <div className="opacity-40">
        <div className="pt-10"></div>
        <div className="pt-8 h-0 border-t-2 border-black"></div>
        <p>
          Alternatively, if you want to try the short, text-based version (the <b>hard way</b>):
        </p>
        <div className="mt-2">
          <ul className="pl-4 list-disc">
            <li>
              <b>Settings and privacy</b>
            </li>
            <li>
              <b>Account Center</b>
            </li>
            <li>
              <b>Your information and permissions</b>
            </li>
            <li>
              <b>Download your information</b>
            </li>
            <li>
              <b>Download or transfer information</b>
            </li>
            <li>
              <b>Some of your information</b>
            </li>
            <li>
              <b>Followers and following</b>
            </li>
            <li>
              <b>Download to device</b>
            </li>
            <li>
              Set <b>Date range</b> to <b>All time</b>
            </li>
            <li>
              Set <b>Format</b> to <b>JSON</b>
            </li>
            <li>
              <b>Create files</b>
            </li>
            <li>
              <i>Wait several minutes for the request to process - you'll get an email notification when it's ready</i>
            </li>
            <li>
              Navigate back to <b>Download your information</b>
            </li>
            <li>Download the export!</li>
          </ul>
        </div>
        <div className="flex justify-end mt-8">
          <Link href="/analyze">
            <button className="bg-secondary text-white rounded-xl px-6 py-2 text-lg">Finish</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
