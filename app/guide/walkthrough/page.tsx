"use client";

import { useState } from "react";
import MockPhone from "./mock-phone";

export default function Walkthrough() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <div className="flex justify-center">
        <MockPhone step={step} />
      </div>
      <div className="flex">
        <button className="px-2 border-2 border-black" onClick={() => setStep(Math.max(0, step - 1))}>
          Previous
        </button>
        <div className="grow px-8">
          <b>Instructions {step}</b>
          <ol className="list-decimal list-inside">
            <li>Hello</li>
            <li>Hello</li>
          </ol>
        </div>
        <button className="px-2 border-2 border-black" onClick={() => setStep(Math.min(5, step + 1))}>
          Next
        </button>
      </div>
    </div>
  );
}
