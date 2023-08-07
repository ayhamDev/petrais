import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import ButtonSecondary from "@/components/ButtonSecondary";
import { blogs } from "@/data";
import moment from "moment";
import Image from "next/image";
import demoimg from "../../../public/demoimg.png";
import Button from "@/components/Button";
export default function BlogSection() {
  return (
    <Wrapper>
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-12">
        <div className="flex flex-col gap-4 m-w-[400px]">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-secondary blog flex items-stretch ">
              <div className={`${index == 0 ? "bg-primary" : null} w-2`}></div>
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
          <ButtonSecondary className="mt-6">Visit Our blog</ButtonSecondary>
        </div>
        <div className="relative flex-1 min-h-[500px] max-h-auto min-w-[300px]">
          <div className="absolute top-0 right-0 z-10 sm:block hidden">
            <Image className="rounded-primary" src={demoimg} alt="demo" />
          </div>
          <div className="bg-white rounded-primary CardShadow z-20 sm:absolute block bottom-0 left-0 max-w-[500px] flex flex-col">
            <div className="px-8 pt-6">
              <Typography type="body1">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
              <Typography type="body2" className="opacity-75 mt-4 mb-20">
                Lorem ipsum dolor sit amet consectetur. Dignissim pretium a
                convallis orci ornare convallis lacus eu vulputate. Quis
                dignissim nulla semper dignissim. Sed donec elementum sagittis
                nisl ante egestas. Cursr mauris eel sed egestas hac bero cras
                quam suscipit eget tempus et. Iaculis sollicitudin gravida donec
                amet elit eu. Enim nullam varius mi in vivamus maecenas amet
                mattis. Sit ut magna bibendum a in nunc. Egestas vulputate nunc
                leo sed venenatis ligula
              </Typography>
            </div>
            <Button className="ml-auto lg:w-auto w-full">Read More</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
