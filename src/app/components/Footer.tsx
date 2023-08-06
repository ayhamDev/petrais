import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DDDDDD] select-none">
      <Wrapper>
        <div className="py-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-0 gap-12 md:items-start items-center">
          <div className="flex-1 flex flex-col h-full justify-between items-start">
            <svg
              width="87"
              height="130"
              viewBox="0 0 87 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.6429 44.7104C85.362 47.5516 85.0705 50.2988 84.8234 53.0483C84.4707 56.9646 83.6406 60.8005 82.2635 64.4084C80.9582 67.8285 79.3382 71.1725 77.452 74.2752C72.9405 81.6988 66.3062 86.4467 58.7046 89.6723C52.4548 92.3257 45.8839 93.1863 39.1589 92.6319C39.0237 92.6207 38.8906 92.5671 38.709 92.5202V70.0012C39.6721 70.0616 40.574 70.1018 41.4738 70.18C47.1491 70.6808 52.778 70.2739 58.3646 69.1674C64.5088 67.9492 70.2412 65.6736 75.2322 61.5874C79.6318 57.9862 82.7345 53.3948 84.458 47.7841C84.76 46.8005 85.0431 45.808 85.3388 44.82C85.3451 44.7999 85.3979 44.7954 85.6387 44.7104H85.6429Z"
                fill="#111111"
              />
              <path
                d="M16.8012 11.6002V83.5182C7.67042 77.0848 -0.814057 61.842 0.0624824 45.477C0.808069 31.5373 6.18559 20.108 16.4717 11.3923C16.5816 11.4616 16.6914 11.5287 16.8012 11.598V11.6002Z"
                fill="#111111"
              />
              <path
                d="M38.6534 21.6211C45.1926 20.6487 51.5882 19.8999 57.669 23.1121C61.6673 25.2245 63.8597 28.7988 64.4004 33.493C64.806 37.0092 64.4131 40.407 62.8818 43.5856C61.0041 47.4841 57.8866 49.8223 54.0383 51.1411C49.2458 52.7841 44.3541 52.6723 39.4307 52.0107C38.5922 51.8989 38.6513 51.3557 38.6513 50.7432C38.6555 44.8263 38.6534 38.9093 38.6534 32.9923C38.6534 29.6795 38.6534 26.369 38.6534 23.0562C38.6534 22.6516 38.6534 22.247 38.6534 21.6233V21.6211Z"
                fill="#111111"
              />
              <path
                d="M36.3486 3.04992C39.8337 2.71238 43.3145 2.24295 46.808 2.0686C52.8825 1.76682 58.9676 1.68635 65.0463 1.44046C70.5632 1.21693 76.0759 0.921861 81.5886 0.602205C83.1939 0.508321 84.7906 0.211019 86.3916 0.0143079C86.6282 -0.0147517 86.869 0.00983718 86.9999 0.00983718C86.6324 9.69338 86.267 19.3009 85.9101 28.6603C85.2912 26.7201 84.7315 24.4847 83.8803 22.3835C81.1451 15.6394 76.566 10.7418 70.2633 7.6838C64.8224 5.04385 59.0584 3.76299 53.1085 3.55063C47.7014 3.35839 42.2859 3.41204 36.8724 3.35616C36.7014 3.35616 36.5303 3.35616 36.3592 3.35616C36.355 3.25333 36.3529 3.15051 36.3486 3.04992Z"
                fill="#111111"
              />
              <path
                d="M15.4263 120.656C15.4263 123.095 15.3735 125.514 15.4495 127.93C15.4855 129.043 15.1137 129.372 14.121 129.287C13.2149 129.211 12.3003 129.271 11.2738 129.271C11.2464 128.793 11.2041 128.402 11.202 128.008C11.1725 121.418 11.1619 114.829 11.1028 108.239C11.0943 107.219 11.3288 106.752 12.3764 106.754C14.4484 106.754 16.5289 106.5 18.5924 106.607C22.352 106.801 24.5634 109.095 24.8317 112.81C25.0851 116.326 22.9033 119.407 19.488 120.178C18.1996 120.468 16.8562 120.495 15.4242 120.656H15.4263ZM15.4305 110.476V116.588C17.059 116.711 18.6537 116.979 19.7942 115.387C20.4786 114.431 20.5293 112.66 19.866 111.701C18.7234 110.049 17.0843 110.327 15.4305 110.474V110.476Z"
                fill="#111111"
              />
              <path
                d="M73.4957 127.02C73.1979 127.452 73.0458 127.754 72.8261 127.982C70.564 130.317 67.2902 130.029 65.4168 127.344C63.3194 124.338 63.18 119.389 65.1337 116.288C66.2764 114.476 67.9049 113.391 69.96 113.344C72.2031 113.293 74.4483 113.49 76.6935 113.541C77.4306 113.559 77.3187 114.073 77.3229 114.543C77.3377 117.442 77.3123 120.343 77.3715 123.243C77.4053 124.872 77.532 126.504 77.6989 128.122C77.7791 128.896 77.5827 129.265 76.8477 129.271C76.6724 129.271 76.4971 129.271 76.3218 129.271C74.3955 129.265 74.2814 129.186 73.4957 127.018V127.02ZM73.2993 117.042C72.5642 117.042 72.0404 117.037 71.5166 117.042C69.4657 117.06 68.2703 118.074 67.8774 120.124C67.474 122.225 68.4773 124.834 69.9536 125.536C71.1132 126.086 73.2317 125.136 73.276 123.944C73.3563 121.696 73.2993 119.442 73.2993 117.042Z"
                fill="#111111"
              />
              <path
                d="M30.8346 123.372C30.8832 124.763 31.5823 125.339 32.5835 125.608C34.2288 126.048 35.8235 125.851 37.2555 124.899C38.1912 124.278 38.7066 124.421 39.26 125.435C40.3477 127.429 40.3942 127.4 38.4046 128.467C34.5288 130.545 29.9496 129.649 27.9431 126.2C26.0696 122.981 26.0527 119.532 27.7678 116.215C28.9654 113.897 32.0322 112.79 34.928 113.385C37.4984 113.912 39.3022 115.801 39.7711 118.466C40.0774 120.194 39.5831 121.647 38.0307 122.212C36.3325 122.829 34.495 123.035 32.7102 123.357C32.1336 123.462 31.5253 123.372 30.8346 123.372ZM31.0268 120.102C32.3575 120.024 33.6184 120.03 34.8456 119.827C35.2237 119.764 35.7876 119.118 35.7834 118.747C35.777 118.231 35.4349 117.473 35.0251 117.252C33.0587 116.19 31.0564 117.563 31.0268 120.102Z"
                fill="#111111"
              />
              <path
                d="M42.9156 117.274C41.2639 116.968 41.2238 116.966 41.3674 115.399C41.4033 115.012 41.7223 114.505 42.0433 114.33C42.6938 113.979 43.0276 113.563 42.8903 112.781C42.7445 111.954 43.0973 111.462 43.8154 111.156C44.4638 110.879 45.0806 110.517 45.7142 110.199C46.7111 109.701 46.9202 109.839 46.9435 111.044C46.9583 111.851 46.9456 112.658 46.9456 113.55C47.9362 113.55 48.7768 113.568 49.6153 113.546C50.3292 113.525 50.6503 113.867 50.6355 114.616C50.6207 115.392 50.6313 116.168 50.6313 117.091H47.0956C47.0956 119.753 47.0385 122.268 47.1251 124.778C47.1568 125.71 47.9256 126.037 48.7515 125.952C49.4062 125.885 50.0504 125.728 50.8024 125.594C50.9713 126.555 51.172 127.456 51.2586 128.368C51.2818 128.612 50.9671 129.108 50.7812 129.121C49.1887 129.242 47.5623 129.499 45.9994 129.285C44.2632 129.048 43.1395 127.485 43.0149 125.464C42.8839 123.316 42.9389 121.155 42.9156 118.998C42.9093 118.414 42.9156 117.831 42.9156 117.274Z"
                fill="#111111"
              />
              <path
                d="M53.6756 129.269C53.6756 125.362 53.6756 121.642 53.6756 117.92C53.6756 117.212 53.6692 116.505 53.6671 115.797C53.6587 113.467 54.0811 113.119 56.2503 113.615C57.2747 113.85 57.7203 114.545 57.7245 115.633C59.2601 114.797 60.7555 113.984 62.4748 113.049C62.4748 114.645 62.5233 115.902 62.441 117.147C62.422 117.444 62.0101 117.869 61.7059 117.958C60.9329 118.188 60.107 118.211 59.3234 118.412C58.1111 118.725 57.7647 119.239 57.771 120.542C57.7816 123.075 57.7795 125.608 57.8301 128.14C57.847 128.956 57.5915 129.305 56.8058 129.276C55.83 129.24 54.852 129.267 53.6756 129.267V129.269Z"
                fill="#111111"
              />
            </svg>
            <ul className="flex justify-center items-center gap-10 pt-10">
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
                      fill="black"
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
                      fill="black"
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
                      fill="black"
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
                      fill="black"
                    />
                    <path
                      d="M10.6163 5.14795C7.77985 5.14795 5.47852 7.58336 5.47852 10.5854C5.47852 13.5874 7.77985 16.0228 10.6163 16.0228C13.4528 16.0228 15.754 13.5874 15.754 10.5854C15.754 7.58336 13.4528 5.14795 10.6163 5.14795ZM10.6163 14.1125C8.77614 14.1125 7.28353 12.533 7.28353 10.5854C7.28353 8.63777 8.77614 7.05826 10.6163 7.05826C12.4565 7.05826 13.949 8.63777 13.949 10.5854C13.949 12.533 12.4565 14.1125 10.6163 14.1125Z"
                      fill="black"
                    />
                    <path
                      d="M17.1578 4.93297C17.1578 5.63397 16.6207 6.20236 15.9582 6.20236C15.2959 6.20236 14.7588 5.63397 14.7588 4.93297C14.7588 4.2318 15.2959 3.66357 15.9582 3.66357C16.6207 3.66357 17.1578 4.2318 17.1578 4.93297Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <Typography type="body1">Services</Typography>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Development services
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    I.T Services
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Design and more
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Surveillance and cameras
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Security services
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <Typography type="body1">Links</Typography>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Our Services
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Portfolio
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Contact Us
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography type="body2" className="opacity-70">
                    Blog
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div className="w-full p-3 bg-[#B4B4B4] flex justify-center items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.88 7.14C11.16 7.2 11.49 8.29 11.51 8.8H13.3C13.22 6.82 11.81 5.61 9.85 5.61C7.64 5.61 6 7 6 10.14C6 12.08 6.93 14.38 9.84 14.38C12.06 14.38 13.25 12.73 13.28 11.43H11.49C11.46 12.02 11.04 12.81 9.86 12.87C8.55 12.83 8 11.81 8 10.14C8 7.25 9.28 7.16 9.88 7.14ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
            fill="black"
          />
        </svg>
        <Typography type="body2">
          Petra Company - all rights reserved
        </Typography>
      </div>
    </footer>
  );
}
