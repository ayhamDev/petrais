import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import { services } from "@/data";

export default function ServiceContainer() {
  return (
    <Wrapper>
      <div className="flex lg:justify-between justify-center flex-wrap gap-6 ">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="w-[200px] h-[250px] border-2 border-primary rounded-secondary transition-all duration-300 cursor-pointer hover:bg-primary group flex flex-col select-none"
            >
              <div className="m-auto mt-8 w-fit flex-1">
                <service.icon />
              </div>
              <Typography
                type="body1"
                className="text-center text-primary mt-4 flex-1 group-hover:text-white transition-all duration-300"
              >
                {service.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}