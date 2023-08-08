/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import headerImg from "../../../../public/portfolio-page-header.png";
import { portfolio } from "@/data";
import Section from "@/components/Section";
import ContactUsSection from "@/sections/ContactUsSection";
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
                Lorem ipsum dolor sit amet consectetur. Proin quis vel nunc est
                nisl est. Consequat diam amet elementum leo. Eu interdum sed
                velit ut amet. Convallis mattis ligula ut pharetra ac tellus
                sapien sit. Netus vestibulum arcu leo sit ullamcorper nunc vel.
                Quam nam mauris magna neque accumsan morbi pellentesque. Odio
                nunc sapien ornare a sed venenatis nunc id. Dui ullamcorper
                sagittis eu magna. Ornare gravida dignissim sed lacus ac.
                Volutpat odio et non velit sapien enim dui lacus pellentesque.
                Vitae faucibus integer senectus ut libero diam in iaculis.
                Tempor et hac eu tortor amet sed. Viverra aliquam eleifend
                vestibulum quis orci quis. Ac tellus diam nibh pharetra quis
                urna volutpat at amet. Accumsan faucibus quam auctor sed commodo
                non elit purus et. Erat venenatis donec gravida aliquam
                scelerisque scelerisque magna. Mattis mollis enim.
              </Typography>
            </div>
            <div className="flex-1">
              <Image src={headerImg} alt="sq" />
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper className="my-[150px] flex flex-col gap-8">
        {portfolio.map((item, index) => (
          <div key={index}>
            <Typography type="h3" className="text-primary">
              {item.title}
            </Typography>
            <Typography type="body2" className="opacity-75">
              {item.description}
            </Typography>
          </div>
        ))}
      </Wrapper>
      <Section title="Lets work together">
        <ContactUsSection />
      </Section>
    </>
  );
}
