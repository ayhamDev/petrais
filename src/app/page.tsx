/* eslint-disable @next/next/no-img-element */
"use client";
import Section from "@/components/Section";
import ServiceSection from "@/sections/ServiceSection";
import ContactUsSection from "@/sections/ContactUsSection";
import BlogSection from "@/sections/BlogSection";
import SwiperContainer from "./components/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import Button from "./components/ButtonSecondary";
import Typography from "./components/Typography";
import Wrapper from "./components/Wrapper";
import Image from "next/image";
import headerImg from "../../public/main.png";
import WorkSection from "./sections/WorkSection";
import ClientsSection from "./sections/ClientsSection";

export default function page() {
  return (
    <>
      <SwiperContainer spaceBetween={50} freeMode={false} slidesPerView={1}>
        <SwiperSlide className="pb-24">
          <div>
            <Wrapper className="pt-24 relative">
              <img
                className="absolute top-0 right-[-300px] z-[-10] lg:block hidden"
                src="/Blob.svg"
                alt="blob"
              />
              <div className="flex justify-between items-center gap-32 lg:flex-row flex-col-reverse">
                <div className="flex-1">
                  <Typography type="h1" className="text-offblack">
                    Welcome To
                  </Typography>
                  <Typography type="h1" className="text-primary">
                    Petra Company
                  </Typography>
                  <Typography
                    type="body2"
                    className="text-offblack opacity-75 mt-4"
                  >
                    Lorem ipsum dolor sit amet consectetur. Sed leo nulla
                    integer sodales egestas nisi amet tellus. Id etiam amet sit
                    aenean
                  </Typography>
                  <Button href="/contactus" className="mt-8">
                    Lets work together
                  </Button>
                </div>
                <div className="flex-1">
                  <Image src={headerImg} alt="sq" />
                </div>
              </div>
            </Wrapper>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-8">
          <div>
            <Wrapper className="pt-24 relative">
              <img
                className="absolute top-0 right-[-300px] z-[-10] lg:block hidden"
                src="/Blob.svg"
                alt="blob"
              />
              <div className="flex justify-between items-center gap-32 lg:flex-row flex-col-reverse">
                <div className="flex-1">
                  <Typography type="h1" className="text-primary">
                    Our Services
                  </Typography>
                  <Typography type="h2" className="text-offblack">
                    What we do
                  </Typography>
                  <Typography
                    type="body2"
                    className="text-offblack opacity-75 mt-4"
                  >
                    Lorem ipsum dolor sit amet consectetur. Sed leo nulla
                    integer sodales egestas nisi amet tellus. Id etiam amet sit
                    aenean
                  </Typography>
                  <Button href="/contactus" className="mt-8">
                    Lets work together
                  </Button>
                </div>
                <div className="flex-1">
                  <Image src={headerImg} alt="sq" />
                </div>
              </div>
            </Wrapper>
          </div>
        </SwiperSlide>
      </SwiperContainer>
      <Section
        className="mt-[150px]"
        title="Our Services"
        description="Lorem ipsum dolor sit amet consectetur. Viverra dignissim congue mauris lorem nulla et dolor tempus ut. Cras condimentum lacus orci tortor lacus. Ut amet eu purus ut. In curabitur et ut risus."
      >
        <ServiceSection />
      </Section>
      <Section
        title="Our work history"
        description="Lorem ipsum dolor sit amet consectetur. Eleifend risus posuere non nulla. Egestas tortor nibh ornare volutpat donec dignissim adipiscing a nibh. Gravida faucibus eget arcu quam ac. Et odio diam id in. Iaculis ut varius tempus tincidunt condimentum sit. Eu vitae sodales nullam volutpat sed viverra. Cum arcu sapien consectetur egestas. s felis eget nunc ut. Lobortis tincidunt diam turpis sit ut est. Risus nec feugiat leo facilisis. Aliquet phasellus est id nec quis."
      >
        <WorkSection />
      </Section>
      <Section title="Contact US">
        <ContactUsSection />
      </Section>
      <Section title="Our Clients">
        <ClientsSection />
      </Section>
      <Section title="Petra Blog">
        <BlogSection />
      </Section>
    </>
  );
}
