/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import square from "../../../../public/square.png";
import Button from "@/components/ButtonSecondary";
import { services } from "@/data";

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
                Lorem ipsum dolor sit amet consectetur. Sed leo nulla integer
                sodales egestas nisi amet tellus. Id etiam amet sit aenean
              </Typography>
              <Button className="mt-8">Lets work together</Button>
            </div>
            <div className="flex-1">
              <Image src={square} alt="sq" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div>
        <div className="flex flex-col gap-16 mt-[300px] mb-[150px]">
          {services.map((service, index) => (
            <Wrapper key={index} className="relative">
              <img
                src={`/${service.name} gray.svg`}
                className={`absolute z-0 top-[-100px] ${
                  index % 2 == 0 ? "right-[-325px]" : "left-[-325px]"
                }`}
                alt={service.name}
              />

              <div
                className={`flex flex-col items-center gap-6 ${
                  index % 2 == 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <img src={`${service.name} blob.svg`} alt={service.name} />
                <div>
                  <Typography type="h2">{service.name}</Typography>
                  <Typography type="body2">{service.description} </Typography>
                </div>
              </div>
            </Wrapper>
          ))}
        </div>
      </div>
    </>
  );
}
