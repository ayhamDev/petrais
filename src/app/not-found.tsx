/* eslint-disable @next/next/no-img-element */
import Button from "./components/ButtonSecondary";
import Typography from "./components/Typography";
import Wrapper from "./components/Wrapper";
import headerImg from "../../public/main.png";
import Image from "next/image";

export default function Custom404() {
  return (
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
              404
            </Typography>
            <Typography type="h1" className="text-primary">
              Page Not Found
            </Typography>
            <Typography type="body2" className="text-offblack opacity-75 mt-4">
              It Looks Like The Page You Are Looking For Does Not Exist.
            </Typography>
            <Button href="/" replace={true} className="mt-8">
              Go Back
            </Button>
          </div>
          <div className="flex-1">
            <Image src={headerImg} alt="sq" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
