"use client";

import { useState } from "react";
import MockPhone from "./mock-phone";

export default function Walkthrough() {
  const [step, setStep] = useState(0);
  const decrement = () => setStep((s) => s - 1);
  const increment = () => setStep((s) => s + 1);
  return (
    <div>
      <div className="flex justify-center">
        <MockPhone step={step} />
      </div>
      <div className="flex">
        <button className="px-2 border-2 border-black" onClick={decrement}>
          Previous
        </button>
        <div className="grow px-8">
          <b>Instructions {step}</b>
          <ol className="list-decimal list-inside">
            <li>A</li>
            <li>B</li>
          </ol>
        </div>
        <button className="px-2 border-2 border-black" onClick={increment}>
          Next
        </button>
      </div>
    </div>
  );
}
