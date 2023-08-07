"use client";
import Typography from "@/components/Typography";
import { faq } from "@/data";
import isMobile from "is-mobile";
import { useState } from "react";

export default function FAQ() {
  const [selected, SetSelected] = useState<number | null>(null);
  return (
    <div>
      <Typography type="h2" className="text-center mb-8">
        Common questions
      </Typography>
      <div className="flex flex-col gap-4">
        {faq.map((item, index) => (
          <div key={index}>
            <div
              role="button"
              onClick={() => SetSelected(selected == index ? null : index)}
              className="px-8 select-none cursor-pointer py-3 bg-secondary rounded-primary flex justify-between items-center"
            >
              <Typography type="body1">{item.question}</Typography>
              <svg
                width="22"
                height="13"
                viewBox="0 0 22 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-300 ${
                  selected == index ? "rotate-[-180deg]" : null
                }`}
              >
                <path
                  d="M20 2L11 11L2 2"
                  stroke="#111111"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`grid transition-all duration-500 ${
                selected == index
                  ? !isMobile()
                    ? "faq-expand"
                    : "block"
                  : !isMobile()
                  ? "faq-init"
                  : "hidden"
              }`}
            >
              <Typography
                type="body2"
                className="opacity-75 overflow-hidden pt-4 px-6"
              >
                {item.answer}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
