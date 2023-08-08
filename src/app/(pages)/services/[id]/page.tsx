/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/ButtonSecondary";
import Typography from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Section from "@/components/Section";
import React, { FC } from "react";
import { services } from "@/data";
import { redirect, useParams } from "next/navigation";
import AnimateContainer from "@/components/AnimateContainer";

export default function page() {
  const { id } = useParams();

  const data = services.find((service) => service.link == id);
  if (!data) return redirect("/services");

  return (
    <>
      <div>
        <Wrapper className="pt-24 relative">
          <div className="flex justify-between items-center gap-32 lg:flex-row flex-col-reverse">
            <div className="flex-1">
              <AnimateContainer>
                <Typography type="h1" className="text-primary">
                  {data.name}
                </Typography>
                <Typography type="h2" className="text-offblack">
                  What we do
                </Typography>
                <Typography
                  type="body2"
                  className="text-offblack opacity-75 mt-4"
                >
                  {data.description}
                </Typography>
              </AnimateContainer>
              <AnimateContainer delay={0.25}>
                <Button href="/contactus" className="mt-8">
                  Get this service Now
                </Button>
              </AnimateContainer>
            </div>
            <div className="flex flex-1 md:justify-end justify-center">
              <img
                width={"80%"}
                className="min-h-[350px]"
                src={`/${data.name} blob.svg`}
                alt={data.name}
              />
            </div>
          </div>
        </Wrapper>
      </div>
      <Section title="The steps to our prossess" className="my-[150px]">
        <Wrapper>
          <div className="flex lg:justify-center justify-between flex-wrap gap-20">
            <div className="flex-1 min-w-[300px]">
              <div className="flex gap-2 lg:justify-start justify-center">
                <svg
                  width="81"
                  height="95"
                  viewBox="0 0 81 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 41.6765C0 23.0775 15.0775 8 33.6765 8H65.8563C66.6829 8 67.353 8.67011 67.353 9.49673V41.6765C67.353 60.2755 52.2755 75.353 33.6765 75.353V75.353C15.0775 75.353 0 60.2755 0 41.6765V41.6765Z"
                    fill="#FA2525"
                  />
                  <path
                    d="M69.916 75H59.3545V46.084L59.457 41.333L59.6279 36.1377C57.8734 37.8923 56.6543 39.043 55.9707 39.5898L50.2285 44.2041L45.1357 37.8467L61.2344 25.0293H69.916V75Z"
                    fill="black"
                  />
                </svg>
                <Typography type="h2">step one</Typography>
              </div>
              <div>
                <Typography type="body2">{data.steps[0]}</Typography>
              </div>
            </div>
            <div className="flex-1 min-w-[250px]">
              <div className="flex gap-2 lg:justify-start justify-center">
                <svg
                  width="82"
                  height="95"
                  viewBox="0 0 82 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 41.6765C0 23.0775 15.0775 8 33.6765 8H65.8563C66.6829 8 67.353 8.67011 67.353 9.49673V41.6765C67.353 60.2755 52.2755 75.353 33.6765 75.353C15.0775 75.353 0 60.2755 0 41.6765Z"
                    fill="#FA2525"
                  />
                  <path
                    d="M78.7344 75H43.8027V67.6514L56.3467 54.9707C58.876 52.373 60.904 50.2083 62.4307 48.4766C63.9801 46.722 65.0967 45.127 65.7803 43.6914C66.4867 42.2559 66.8398 40.7178 66.8398 39.0771C66.8398 37.0947 66.2816 35.6136 65.165 34.6338C64.0713 33.6312 62.6016 33.1299 60.7559 33.1299C58.819 33.1299 56.9391 33.5742 55.1162 34.4629C53.2933 35.3516 51.3906 36.6162 49.4082 38.2568L43.666 31.4551C45.1016 30.2246 46.6169 29.0625 48.2119 27.9688C49.8298 26.875 51.6982 25.9977 53.8174 25.3369C55.9593 24.6533 58.5228 24.3115 61.5078 24.3115C64.7891 24.3115 67.6032 24.904 69.9502 26.0889C72.32 27.2738 74.1429 28.8916 75.4189 30.9424C76.695 32.9704 77.333 35.2718 77.333 37.8467C77.333 40.6038 76.7861 43.1217 75.6924 45.4004C74.5986 47.679 73.0036 49.9349 70.9072 52.168C68.8337 54.401 66.3271 56.8734 63.3877 59.585L56.9619 65.6348V66.1133H78.7344V75Z"
                    fill="black"
                  />
                </svg>

                <Typography type="h2">step two</Typography>
              </div>
              <div>
                <Typography type="body2">{data.steps[1]}</Typography>
              </div>
            </div>
            <div className="flex-1 min-w-[250px]">
              <div className="flex gap-2 lg:justify-start justify-center">
                <svg
                  width="82"
                  height="95"
                  viewBox="0 0 82 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 41.6765C0 23.0775 15.0775 8 33.6765 8H65.8563C66.6829 8 67.353 8.67011 67.353 9.49673V41.6765C67.353 60.2755 52.2755 75.353 33.6765 75.353C15.0775 75.353 0 60.2755 0 41.6765Z"
                    fill="#FA2525"
                  />
                  <path
                    d="M76.7861 36.2061C76.7861 38.5075 76.3076 40.5013 75.3506 42.1875C74.3936 43.8737 73.0947 45.2523 71.4541 46.3232C69.8363 47.3942 68.0133 48.1803 65.9854 48.6816V48.8867C69.9958 49.388 73.0378 50.6185 75.1113 52.5781C77.2077 54.5378 78.2559 57.1582 78.2559 60.4395C78.2559 63.3561 77.5381 65.9652 76.1025 68.2666C74.6898 70.568 72.5023 72.3796 69.54 73.7012C66.5778 75.0228 62.7611 75.6836 58.0898 75.6836C55.3327 75.6836 52.7578 75.4557 50.3652 75C47.9954 74.5671 45.7624 73.8949 43.666 72.9834V63.9941C45.8079 65.0879 48.0524 65.9196 50.3994 66.4893C52.7464 67.0361 54.9339 67.3096 56.9619 67.3096C60.7445 67.3096 63.3877 66.6602 64.8916 65.3613C66.4183 64.0397 67.1816 62.194 67.1816 59.8242C67.1816 58.4342 66.8285 57.2607 66.1221 56.3037C65.4157 55.3467 64.1852 54.6175 62.4307 54.1162C60.6989 53.6149 58.2721 53.3643 55.1504 53.3643H51.3564V45.2637H55.2188C58.2949 45.2637 60.6305 44.9788 62.2256 44.4092C63.8434 43.8167 64.9372 43.0192 65.5068 42.0166C66.0993 40.9912 66.3955 39.8291 66.3955 38.5303C66.3955 36.7529 65.8486 35.363 64.7549 34.3604C63.6611 33.3577 61.8382 32.8564 59.2861 32.8564C57.6911 32.8564 56.2327 33.0615 54.9111 33.4717C53.6123 33.859 52.4388 34.3376 51.3906 34.9072C50.3424 35.4541 49.4196 35.9896 48.6221 36.5137L43.7344 29.2334C45.694 27.8206 47.984 26.6471 50.6045 25.7129C53.2477 24.7786 56.3923 24.3115 60.0381 24.3115C65.1878 24.3115 69.2666 25.3483 72.2744 27.4219C75.2822 29.4954 76.7861 32.4235 76.7861 36.2061Z"
                    fill="black"
                  />
                </svg>

                <Typography type="h2">step three</Typography>
              </div>
              <div>
                <Typography type="body2">{data.steps[2]}</Typography>
              </div>
            </div>
          </div>
          <Button href="/contactus" className="mt-12 mx-auto">
            Get this service Now
          </Button>
        </Wrapper>
      </Section>
    </>
  );
}
