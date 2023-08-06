"use client";
import Wrapper from "@/components/Wrapper";
import Logo from "../../../public/PetraLogo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  const [open, SetOpen] = useState<boolean>(false);
  useEffect(() => {
    if (open) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      // @ts-ignore
      document.querySelector("html").style.overflow = null;
      document.querySelector("html").style.overflowX = "hidden";
    }
  }, [open]);

  return (
    <nav className="py-4 w-full bg-white bg-opacity-25 backdrop-blur-md fixed top-0">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-20">
            <Link href={"/"}>
              <Image src={Logo} alt="Petra information system Logo" />
            </Link>
            <ul className="lg:flex hidden items-center justify-center gap-8">
              <li>
                <Link
                  href={"/"}
                  className={`${
                    path == "/"
                      ? "bg-primary"
                      : "hover:bg-primary hover:bg-opacity-5"
                  } rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/services"}
                  className={`${
                    path.includes("/services")
                      ? "bg-primary"
                      : "hover:bg-primary hover:bg-opacity-5"
                  } rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/portfolio"}
                  className={`${
                    path.includes("/portfolio")
                      ? "bg-primary"
                      : "hover:bg-primary hover:bg-opacity-5"
                  } rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href={"/contactus"}
                  className={`${
                    path.includes("/contactus")
                      ? "bg-primary"
                      : "hover:bg-primary hover:bg-opacity-5"
                  } rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/blog"}
                  className={`${
                    path.includes("/blog")
                      ? "bg-primary"
                      : "hover:bg-primary hover:bg-opacity-5"
                  } rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:flex hidden">
            <ul className="flex justify-center items-center xl:gap-10 lg:gap-8">
              <li>
                <a href="https://twitter.com">
                  <svg
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.6154 2.50581C23.7 2.93077 22.7246 3.21245 21.7077 3.34922C22.7538 2.68817 23.5523 1.64937 23.9277 0.397282C22.9523 1.01274 21.8754 1.44747 20.7277 1.69008C19.8015 0.646398 18.4815 0 17.0415 0C14.2477 0 11.9985 2.39997 11.9985 5.34214C11.9985 5.76547 12.0323 6.17252 12.1154 6.56004C7.92 6.34349 4.20769 4.21542 1.71385 0.973667C1.27846 1.77312 1.02308 2.68817 1.02308 3.67323C1.02308 5.52287 1.92308 7.16247 3.26461 8.11172C2.45384 8.09544 1.65846 7.84632 0.984615 7.45392C0.984615 7.4702 0.984615 7.49137 0.984615 7.51254C0.984615 10.1079 2.73384 12.2636 5.02769 12.7602C4.61692 12.8791 4.16923 12.9361 3.70461 12.9361C3.38154 12.9361 3.05538 12.9166 2.74923 12.8449C3.40307 14.9599 5.25846 16.5149 7.46461 16.5654C5.74769 17.9868 3.56769 18.8432 1.20769 18.8432C0.793846 18.8432 0.396923 18.8237 0 18.7699C2.23538 20.2956 4.88461 21.1667 7.74153 21.1667C17.0277 21.1667 22.1046 13.0256 22.1046 5.969C22.1046 5.73291 22.0969 5.50496 22.0861 5.27864C23.0877 4.52641 23.9292 3.58694 24.6154 2.50581Z"
                      fill="#FA2525"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6152 0H2.61523C1.51523 0 0.615234 0.9525 0.615234 2.11667V19.05C0.615234 20.2142 1.51523 21.1667 2.61523 21.1667H18.6152C19.7152 21.1667 20.6152 20.2142 20.6152 19.05V2.11667C20.6152 0.9525 19.7152 0 18.6152 0ZM6.61523 17.9917H3.61523V8.46667H6.61523V17.9917ZM5.11523 6.6675C4.11523 6.6675 3.31523 5.82083 3.31523 4.7625C3.31523 3.70417 4.11523 2.8575 5.11523 2.8575C6.11523 2.8575 6.91523 3.70417 6.91523 4.7625C6.91523 5.82083 6.11523 6.6675 5.11523 6.6675ZM17.6152 17.9917H14.6152V12.3825C14.6152 11.5359 13.9152 10.795 13.1152 10.795C12.3152 10.795 11.6152 11.5359 11.6152 12.3825V17.9917H8.61523V8.46667H11.6152V9.73667C12.1152 8.89 13.2152 8.255 14.1152 8.255C16.0152 8.255 17.6152 9.94833 17.6152 11.9592V17.9917Z"
                      fill="#FA2525"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5107 0H1.7191C1.10987 0 0.615234 0.52244 0.615234 1.16826V19.9977C0.615234 20.6435 1.10987 21.1667 1.7191 21.1667H11.2976V12.9697H8.69137V9.77475H11.2976V7.41872C11.2976 4.68523 12.8747 3.19598 15.1792 3.19598C16.2841 3.19598 17.2315 3.28346 17.5078 3.32145V6.17866L15.9093 6.17936C14.6563 6.17936 14.4145 6.80984 14.4145 7.73448V9.77371H17.4041L17.0132 12.9683H14.4142V21.1656H19.5104C20.1203 21.1656 20.6152 20.6418 20.6152 19.9977V1.16756C20.6149 0.52244 20.1206 0 19.5107 0Z"
                      fill="#FA2525"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5606 6.22308C20.5137 5.09841 20.3419 4.32521 20.0957 3.65522C19.8418 2.94404 19.4511 2.30733 18.9392 1.77802C18.4391 1.24048 17.8335 0.822787 17.1693 0.558216C16.5325 0.297683 15.8058 0.11581 14.7431 0.0662235C13.6725 0.0124371 13.3326 0 10.6172 0C7.90184 0 7.56196 0.0124371 6.49531 0.062024C5.43263 0.111611 4.70204 0.293645 4.06914 0.554017C3.39701 0.822787 2.79538 1.23628 2.29526 1.77802C1.78734 2.30733 1.39282 2.94824 1.14268 3.65118C0.89651 4.32521 0.724662 5.09421 0.677808 6.21888C0.626986 7.35195 0.615234 7.71165 0.615234 10.5854C0.615234 13.4592 0.626986 13.8189 0.67384 14.9478C0.720694 16.0725 0.892694 16.8457 1.13887 17.5156C1.39282 18.2268 1.78734 18.8635 2.29526 19.3928C2.79538 19.9304 3.40097 20.3481 4.06517 20.6126C4.70204 20.8732 5.42866 21.0551 6.49149 21.1046C7.55799 21.1544 7.89802 21.1667 10.6134 21.1667C13.3288 21.1667 13.6687 21.1544 14.7353 21.1046C15.798 21.0551 16.5286 20.8732 17.1615 20.6126C18.5056 20.0627 19.5683 18.938 20.0879 17.5156C20.334 16.8416 20.506 16.0725 20.5528 14.9478C20.5997 13.8189 20.6114 13.4592 20.6114 10.5854C20.6114 7.71165 20.6075 7.35195 20.5606 6.22308ZM18.7596 14.8651C18.7165 15.8988 18.5524 16.457 18.4157 16.8292C18.0796 17.7513 17.3881 18.4832 16.5168 18.8388C16.1652 18.9836 15.6339 19.1572 14.661 19.2026C13.6061 19.2523 13.2897 19.2646 10.6212 19.2646C7.95266 19.2646 7.63231 19.2523 6.58123 19.2026C5.60448 19.1572 5.07703 18.9836 4.72539 18.8388C4.29181 18.6692 3.89714 18.4005 3.57679 18.049C3.24469 17.7058 2.99074 17.2923 2.83049 16.8334C2.69374 16.4612 2.52968 15.8988 2.48679 14.8693C2.43978 13.7529 2.42819 13.4179 2.42819 10.5937C2.42819 7.76948 2.43978 7.43045 2.48679 6.31821C2.52968 5.28448 2.69374 4.72626 2.83049 4.35412C2.99074 3.89508 3.24469 3.47754 3.58076 3.13835C3.90492 2.78688 4.29562 2.51811 4.72936 2.34868C5.08099 2.20395 5.61241 2.03032 6.5852 1.98477C7.6401 1.93518 7.95663 1.92274 10.625 1.92274C13.2975 1.92274 13.6139 1.93518 14.665 1.98477C15.6417 2.03032 16.1692 2.20395 16.5208 2.34868C16.9544 2.51811 17.3491 2.78688 17.6694 3.13835C18.0015 3.48158 18.2555 3.89508 18.4157 4.35412C18.5524 4.72626 18.7165 5.28852 18.7596 6.31821C18.8064 7.43465 18.8182 7.76948 18.8182 10.5937C18.8182 13.4179 18.8064 13.7487 18.7596 14.8651Z"
                      fill="#FA2525"
                    />
                    <path
                      d="M10.6163 5.14795C7.77985 5.14795 5.47852 7.58336 5.47852 10.5854C5.47852 13.5874 7.77985 16.0228 10.6163 16.0228C13.4528 16.0228 15.754 13.5874 15.754 10.5854C15.754 7.58336 13.4528 5.14795 10.6163 5.14795ZM10.6163 14.1125C8.77614 14.1125 7.28353 12.533 7.28353 10.5854C7.28353 8.63777 8.77614 7.05826 10.6163 7.05826C12.4565 7.05826 13.949 8.63777 13.949 10.5854C13.949 12.533 12.4565 14.1125 10.6163 14.1125Z"
                      fill="#FA2525"
                    />
                    <path
                      d="M17.1578 4.93297C17.1578 5.63397 16.6207 6.20236 15.9582 6.20236C15.2959 6.20236 14.7588 5.63397 14.7588 4.93297C14.7588 4.2318 15.2959 3.66357 15.9582 3.66357C16.6207 3.66357 17.1578 4.2318 17.1578 4.93297Z"
                      fill="#FA2525"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile */}
          <button
            onClick={() => SetOpen(true)}
            className="w-10 h-8 flex flex-col cursor-default lg:hidden"
          >
            <div className="w-[80%] ml-auto mb-auto h-[4px] bg-primary rounded-sm"></div>
            <div className="w-full h-[4px] bg-primary rounded-sm"></div>
            <div className="w-[40%] ml-auto mt-auto h-[4px] bg-primary rounded-sm"></div>
          </button>
        </div>
      </Wrapper>
      <div
        style={{
          background: "url(drawer.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-210px -220px",
        }}
        className={`lg:hidden absolute h-[100vh] py-8 bg-primary w-[330px] top-0 right-[-100%] transition-all duration-700 z-20 ${
          open ? "animate-drawer" : null
        }`}
      >
        <ul className="flex flex-col mt-28 ml-32 items-center justify-center gap-8">
          <li>
            <Link
              onClick={() => SetOpen(false)}
              href={"/"}
              className={`${
                path == "/" ? "bg-[#fff]" : null
              } text-white cursor-default rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => SetOpen(false)}
              href={"/services"}
              className={`${
                path.includes("/services") ? "bg-[#fff]" : null
              } text-white cursor-default rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => SetOpen(false)}
              href={"/portfolio"}
              className={`${
                path.includes("/portfolio") ? "bg-[#fff]" : null
              } text-white cursor-default rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => SetOpen(false)}
              href={"/contactus"}
              className={`${
                path.includes("/contactus") ? "bg-[#fff]" : null
              } text-white cursor-default rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => SetOpen(false)}
              href={"/blog"}
              className={`${
                path.includes("/blog") ? "bg-[#fff]" : null
              } text-white cursor-default rounded-primary px-6 py-2 bg-opacity-[0.15] font-light text-s text-offblack transition-all duration-300 `}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      {open ? (
        <div
          onClick={() => SetOpen(false)}
          className="absolute h-[100vh] py-8 bg-white opacity-75 w-[100%] top-0 right-0 z-10 lg:hidden"
        ></div>
      ) : null}
    </nav>
  );
}
