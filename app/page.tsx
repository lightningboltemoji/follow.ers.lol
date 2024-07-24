import Link from "next/link";
import FAQ from "./faq";
import Jumbo from "./jumbo";
import PageBounds from "./page-bounds";

export default function Home() {
  return (
    <PageBounds>
      <Jumbo />
      <div className="flex flex-col items-center mt-6 mb-8">
        <Link href="/guide/intro">
          <button className="bg-secondary text-white rounded-xl px-6 py-3 text-2xl">Guide me through it</button>
        </Link>
        <Link href="/analyze">
          <button className="text-secondary font-bold rounded-xl mt-3 px-6 py-3 outline">
            Skip it, I've done this before
          </button>
        </Link>
      </div>
      <FAQ className="mt-10" />
    </PageBounds>
  );
}
