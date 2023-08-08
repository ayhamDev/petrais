"use client";
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import isMobile from "is-mobile";

interface ISection {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function Section(props: ISection) {
  return (
    <InView triggerOnce threshold={isMobile() ? 0.05 : 0.25}>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ x: 300, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <section className={`${props.className} mb-20`}>
            <Wrapper>
              <div className="flex items-center gap-8">
                <span className="flex-1 h-[2px] bg-primary sm:inline hidden"></span>
                <Typography
                  type="h2"
                  className="text-primary sm:w-fit w-full text-center"
                >
                  {props.title}
                </Typography>
                <span className="flex-1 h-[2px] bg-primary sm:inline hidden"></span>
              </div>
              <Typography
                type="body2"
                className="text-offblack opacity-90 text-center pt-6"
              >
                {props.description}
              </Typography>
            </Wrapper>
            <div className="mt-8">{props.children}</div>
          </section>
        </motion.div>
      )}
    </InView>
  );
}
