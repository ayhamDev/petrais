/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import headerImg from "../../../../public/like.png";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ContactUsSection from "@/sections/ContactUsSection";
import moment from "moment";
import { blogs } from "@/data";

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
                Petra blog
              </Typography>
              <Typography type="h2" className="text-offblack">
                Everything we do, we do with love
              </Typography>
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
            </div>
            <div className="flex-1">
              <Image src={headerImg} alt="sq" />
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper className="flex gap-12 items-start my-[150px] lg:flex-row flex-col lg:justify-between justify-center">
        <div className="flex flex-col flex-[7] w-full">
          <div className="flex justify-between items-center">
            <Typography type="h2">new entry title</Typography>
            <div className="flex gap-2 items-center justify-start">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M14.3761 2.06617H13.621V0.676941H12.1106V2.06617H4.55902V0.676941H3.04869V2.06617H2.29353C1.46285 2.06617 0.783203 2.69133 0.783203 3.4554V14.5692C0.783203 15.3333 1.46285 15.9585 2.29353 15.9585H14.3761C15.2068 15.9585 15.8865 15.3333 15.8865 14.5692V3.4554C15.8865 2.69133 15.2068 2.06617 14.3761 2.06617ZM14.3761 14.5692H2.29353V5.53925H14.3761V14.5692Z"
                  fill="#111111"
                />
              </svg>
              <Typography type="body2">2023/08/17</Typography>
            </div>
          </div>
          <div className="mt-6">
            <img src={"/demo2.png"} width={"100%"} alt="blog image" />
            <Typography type="body2" className="mt-6">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper nam eget urna
              eget lectus ultrices in bibendum nunc. Sed nec nisi semper massa
              porttitor lacus auctor. Sollicitudin volutpat quam id ultrices
              aliquet id volutpat semper amet. Lobortis at sed aliquet nisi
              quisque tristique eget. Lorem bibendum mauris suspendisse tempus
              pretium elit tellus placerat. Lorem in amet aliquam sed. Lobortis
              eget dolor orci non ultrices vitae facilisis viverra. Dictum ut
              quam dolor posuere interdum pharetra nisi lacinia. Enim est semper
              dictum blandit in. Ut congue ut amet turpis consectetur malesuada
              quis. Scelerisque ultrices cursus quis suspendisse rhoncus neque
              sed porta nunc. At pulvinar accumsan imperdiet elementum nibh
              cursus fringilla. Posuere adipiscing arcu ut libero enim turpis.
              Venenatis risus nibh odio mi pharetra dignissim sed enim. Tempor
              ipsum a a mi id elit at. Lobortis integer accumsan tortor
              tincidunt turpis quisque. Suspendisse maecenas nisi elementum sit
              elit turpis dui. Morbi leo tellus habitant elementum id malesuada.
              Duis sit gravida sagittis vitae mi. In amet pellentesque
              pellentesque proin. Eu enim risus tincidunt diam semper ultrices
              habitasse. Fames arcu in eu nunc tortor amet faucibus arcu sit.
              Habitant mauris rhoncus et posuere. Viverra enim tellus arcu nunc
              pellentesque senectus a. Sed nulla nunc lacinia platea ullamcorper
              feugiat phasellus urna. Vitae amet velit facilisis sagittis
              aliquet volutpat urna interdum at. Consequat faucibus mi molestie
              velit dolor gravida. Volutpat nibh condimentum faucibus faucibus
              vestibulum lobortis. Magna odio duis lorem nunc adipiscing. Nisi
              suscipit vestibulum vulputate ullamcorper amet dictumst
              scelerisque ipsum neque. Interdum cras auctor vel tincidunt
              accumsan vitae in in. Cursus praesent enim integer dis id amet.
              Sit urna enim nulla orci. Nisi vivamus id donec tellus commodo
              facilisi lorem arcu curabitur. Nunc venenatis varius enim lacinia
              lectus cras id libero risus. Turpis quis sagittis sed massa
              lectus. Egestas odio dui blandit purus. Nec habitant curabitur leo
              tempor fermentum neque aliquet mattis. Sodales vulputate sem sem
              orci. Tincidunt pretium sed blandit id massa elit. Libero amet.
              Lorem ipsum dolor sit amet consectetur. Ullamcorper nam eget urna
              eget lectus ultrices in bibendum nunc. Sed nec nisi semper massa
              porttitor lacus auctor. Sollicitudin volutpat quam id ultrices
              aliquet id volutpat semper amet. Lobortis at sed aliquet nisi
              quisque tristique eget. Lorem bibendum mauris suspendisse tempus
              pretium elit tellus placerat. Lorem in amet aliquam sed. Lobortis
              eget dolor orci non ultrices vitae facilisis viverra. Dictum ut
              quam dolor posuere interdum pharetra nisi lacinia. Enim est semper
              dictum blandit in. Ut congue ut amet turpis consectetur malesuada
              quis. Scelerisque ultrices cursus quis suspendisse rhoncus neque
              sed porta nunc. At pulvinar accumsan imperdiet elementum nibh
              cursus fringilla. Posuere adipiscing arcu ut libero enim turpis.
              Venenatis risus nibh odio mi pharetra dignissim sed enim. Tempor
              ipsum a a mi id elit at. Lobortis integer accumsan tortor
              tincidunt turpis quisque. Suspendisse maecenas nisi elementum sit
              elit turpis dui. Morbi leo tellus habitant elementum id malesuada.
              Duis sit gravida sagittis vitae mi. In amet pellentesque
              pellentesque proin. Eu enim risus tincidunt diam semper ultrices
              habitasse. Fames arcu in eu nunc tortor amet faucibus arcu sit.
              Habitant mauris rhoncus et posuere. Viverra enim tellus arcu nunc
              pellentesque senectus a. Sed nulla nunc lacinia platea ullamcorper
              feugiat phasellus urna. Vitae amet velit facilisis sagittis
              aliquet volutpat urna interdum at. Consequat faucibus mi molestie
              velit dolor gravida. Volutpat nibh condimentum faucibus faucibus
              vestibulum lobortis. Magna odio duis lorem nunc adipiscing. Nisi
              suscipit vestibulum vulputate ullamcorper amet dictumst
              scelerisque ipsum neque. Interdum cras auctor vel tincidunt
              accumsan vitae in in. Cursus praesent enim integer dis id amet.
              Sit urna enim nulla orci. Nisi vivamus id donec tellus commodo
              facilisi lorem arcu curabitur. Nunc venenatis varius enim lacinia
              lectus cras id libero risus. Turpis quis sagittis sed massa
              lectus. Egestas odio dui blandit purus. Nec habitant curabitur leo
              tempor fermentum neque aliquet mattis. Sodales vulputate sem sem
              orci. Tincidunt pretium sed blandit id massa elit. Libero amet.
            </Typography>
          </div>
        </div>
        <div className="w-full flex-[3]">
          <div className="bg-secondary rounded-primary flex items-center justify-center ">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent py-3 px-6 w-full outline-none placeholder-offblack placeholder-opacity-60 text-offblack"
            />
            <svg
              className="mr-5"
              width="24"
              height="24"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1622 9.38963H10.497L10.2612 9.16228C11.0864 8.20236 11.5832 6.95614 11.5832 5.60045C11.5832 2.57753 9.1329 0.127197 6.10998 0.127197C3.08705 0.127197 0.636719 2.57753 0.636719 5.60045C0.636719 8.62338 3.08705 11.0737 6.10998 11.0737C7.46566 11.0737 8.71188 10.5769 9.6718 9.75171L9.89915 9.98748V10.6527L14.1094 14.8545L15.364 13.5998L11.1622 9.38963ZM6.10998 9.38963C4.0133 9.38963 2.3208 7.69713 2.3208 5.60045C2.3208 3.50378 4.0133 1.81128 6.10998 1.81128C8.20666 1.81128 9.89915 3.50378 9.89915 5.60045C9.89915 7.69713 8.20666 9.38963 6.10998 9.38963Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4 mt-5 ">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-secondary blog flex items-stretch "
              >
                <div
                  className={`${index == 0 ? "bg-primary" : null} w-2`}
                ></div>
                <div className="px-10 py-2">
                  <Typography>{blog.title}</Typography>
                  <div className="flex gap-2 items-center justify-start">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M14.3761 2.06617H13.621V0.676941H12.1106V2.06617H4.55902V0.676941H3.04869V2.06617H2.29353C1.46285 2.06617 0.783203 2.69133 0.783203 3.4554V14.5692C0.783203 15.3333 1.46285 15.9585 2.29353 15.9585H14.3761C15.2068 15.9585 15.8865 15.3333 15.8865 14.5692V3.4554C15.8865 2.69133 15.2068 2.06617 14.3761 2.06617ZM14.3761 14.5692H2.29353V5.53925H14.3761V14.5692Z"
                        fill="#111111"
                      />
                    </svg>
                    <Typography type="body2">
                      {moment(blog.date).calendar()}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
