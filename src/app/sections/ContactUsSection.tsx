import Wrapper from "@/components/Wrapper";
import Input from "@/components/Input";
import Button from "@/components/Button";
import FAQ from "../components/FAQ";

export default function ContactUsSection() {
  return (
    <Wrapper>
      <div className="flex justify-between lg:flex-row flex-col gap-16">
        <form className="flex-1 flex flex-col gap-6">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Subject" />
          <div className="bg-[#eeeeee] max-h-[300px] h-[300px] p-0 w-full rounded-offshape flex flex-col">
            <textarea
              placeholder="Massage"
              className="bg-transparent h-full outline-none resize-none py-3 px-6 w-full placeholder-offblack placeholder-opacity-60 text-offblack  outline-offset-0 rounded-primary"
            ></textarea>
            <Button type="button" className="ml-auto lg:w-auto w-full">
              send massage
            </Button>
          </div>
        </form>
        <div className="flex-1">
          <FAQ />
        </div>
      </div>
    </Wrapper>
  );
}
