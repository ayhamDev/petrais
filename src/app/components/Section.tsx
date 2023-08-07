import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";

interface ISection {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function Section(props: ISection) {
  return (
    <section className="mb-20">
      <Wrapper>
        <div className="flex items-center gap-8">
          <span className="flex-1 h-[2px] bg-primary sm:inline hidden"></span>
          <Typography
            type="h2"
            className="text-primary sm:w-fit w-full text-center"
          >
            {props.title}
          </Typography>
          <span className="flex-1 h-[2px] bg-primary sm:inline hidden"></span>
        </div>
        <Typography
          type="body2"
          className="text-offblack opacity-90 text-center pt-6"
        >
          {props.description}
        </Typography>
      </Wrapper>
      <div className="mt-8">{props.children}</div>
    </section>
  );
}
