"use client";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Section from "@/components/Section";
import ServiceSection from "@/sections/ServiceSection";
import ContactUsSection from "@/sections/ContactUsSection";
import BlogSection from "@/sections/BlogSection";

export default function page() {
  return (
    <>
      <Section
        title="Our Services"
        description="Lorem ipsum dolor sit amet consectetur. Viverra dignissim congue mauris lorem nulla et dolor tempus ut. Cras condimentum lacus orci tortor lacus. Ut amet eu purus ut. In curabitur et ut risus."
      >
        <ServiceSection />
      </Section>
      <Section
        title="Our work history"
        description="Lorem ipsum dolor sit amet consectetur. Eleifend risus posuere non nulla. Egestas tortor nibh ornare volutpat donec dignissim adipiscing a nibh. Gravida faucibus eget arcu quam ac. Et odio diam id in. Iaculis ut varius tempus tincidunt condimentum sit. Eu vitae sodales nullam volutpat sed viverra. Cum arcu sapien consectetur egestas. s felis eget nunc ut. Lobortis tincidunt diam turpis sit ut est. Risus nec feugiat leo facilisis. Aliquet phasellus est id nec quis."
      >
        <div></div>
      </Section>
      <Section title="Contact US">
        <ContactUsSection />
      </Section>
      <Section title="Petra Blog">
        <BlogSection />
      </Section>
    </>
  );
}
