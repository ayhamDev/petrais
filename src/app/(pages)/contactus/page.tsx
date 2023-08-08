/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import headerImg from "../../../../public/heart.png";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ContactUsSection from "@/sections/ContactUsSection";
import AnimateContainer from "@/components/AnimateContainer";

export default function page() {
  return (
    <>
      <div>
        <Wrapper className="pt-24 relative">
          <img
            className="absolute top-0 right-[-300px] z-[-10] lg:block hidden"
            src="/Blob.svg"
            alt="blob"
          />
          <div className="flex justify-between items-center gap-32 lg:flex-row flex-col-reverse">
            <div className="flex-1">
              <AnimateContainer>
                <Typography type="h1" className="text-primary">
                  Contact Us
                </Typography>
                <Typography type="h2" className="text-offblack">
                  lets talk together
                </Typography>
                <Typography
                  type="body2"
                  className="text-offblack opacity-75 mt-4"
                >
                  Lorem ipsum dolor sit amet consectetur. Proin quis vel nunc
                  est nisl est. Consequat diam amet elementum leo. Eu interdum
                  sed velit ut amet. Convallis mattis ligula ut pharetra ac
                  tellus sapien sit. Netus vestibulum arcu leo sit ullamcorper
                  nunc vel. Quam nam mauris magna neque accumsan morbi
                  pellentesque. Odio Tempor et hac eu tortor amet sed. Viverra
                  aliquam eleifend vestibulum quis orci quis. Ac tellus diam
                  nibh pharetra quis urna volutpat at amet. Accumsan faucibus
                  quam auctor sed commodo non elit purus et. Erat venenatis
                  donec gravida aliquam scelerisque scelerisque magna. Mattis
                  mollis enim.
                </Typography>
              </AnimateContainer>
              <AnimateContainer delay={0.25}>
                <div className="mt-8 flex flex-col gap-2">
                  <Typography type="h3">signup for our Email Letter</Typography>
                  <div className="bg-secondary rounded-primary flex">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent py-3 px-6 w-full outline-none placeholder-offblack placeholder-opacity-60 text-offblack"
                    />
                    <Button>Submit</Button>
                  </div>
                </div>
              </AnimateContainer>
            </div>
            <div className="flex-1">
              <AnimateContainer type="fade">
                <Image src={headerImg} alt="Contact us" />
              </AnimateContainer>
            </div>
          </div>
        </Wrapper>
      </div>
      <Section className="my-[150px]" title="tell us about your Project">
        <ContactUsSection />
      </Section>
    </>
  );
}
