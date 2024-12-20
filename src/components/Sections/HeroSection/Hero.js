import Image from "next/image";
import NextLink from "../../reusable/Link/NextLink";
import { PiTiktokLogoLight } from "react-icons/pi";
import Button from "../../reusable/Button/Button";
export default function Hero() {
  return (
    <div>
      <section className="bg-Gradient ">
        <div className="lg:flex lg:w-full lg:items-center">
          <div className="grid h-screen grid-cols-1 items-center gap-20 sm:container lg:grid-cols-2 ">
            <div className="mx-auto mt-[180px] p-4 text-center sm:p-0 md:mt-[220px] lg:mt-[0px] lg:text-left ">
              <div className="flex w-full items-center justify-center lg:justify-start">
                <h4 className="flex w-[67%] items-center gap-2 rounded-[4px] bg-white bg-opacity-[36%] p-0.5 px-3 font-roboto text-Body1 text-[#20A2F5] sm:w-[75%] md:w-[67%] lg:w-full xl:w-[67%]">
                  <PiTiktokLogoLight class=" text-[#20A2F5] xs:h-12 xs:w-12 sm:h-8 sm:w-8 md:h-6 md:w-6" />
                  Download TikTok Videos with or Without Watermark
                </h4>
              </div>
              <h1 className="mt-[16px] w-[100%] text-center font-roboto text-h3 text-Primary lg:text-left xl:text-h1">
                Want to Download TikTok videos? We Made Simple For You Anytime,
                Anywhere
              </h1>
              <p className="mb-[30px] mt-[30px] w-[100%] font-roboto text-Body1 text-[#828181] lg:w-[64%] ">
                Your TikTok Video Download Solution: Get Your Favorite Videos
                with or Without Watermark, Anytime, Anywhere.
              </p>
              <div className="w-full">
                <Button xl roundedfull className="mx-auto lg:mx-0">
                  <NextLink
                    href="/video/tiktok-downloader"
                    title={"Download TikTok Videos"}
                  />
                </Button>
              </div>
            </div>

            <div className="w-full px-0 lg:px-2 xl:ml-20 xl:px-12">
              <Image
                src="/Headerimg.png"
                width={500}
                height={500}
                layout="responsive"
                alt="Picture of the author"
                className="hidden px-0 lg:block lg:px-2 xl:px-12 "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
