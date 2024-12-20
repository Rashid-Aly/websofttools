import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Button from "../../reusable/Button/Button";
import Input from "../../Input/Input";

const GetInTouch = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative w-full">
      <Image
        src="/images/Rectangle.png"
        alt="Background Image "
        className="absolute -z-10 h-auto "
        layout="fill"
      />
      <div className="px-3 py-36 sm:container">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="w-full md:w-[40%]">
            <h1 className="font-roboto text-h2 text-Primary">Get in touch</h1>
            <p className="mt-4 font-roboto text-Body1 text-[#828181] ">
              Feel free to reach out to us anytime you have questions,
              suggestions, or need assistance. We&apos;re here to listen and
              help you make the most of Websofttools. Your feedback matters, and
              we&apos;re just a message away.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-Cyanblue bg-opacity-75">
                <IoIosCall className=" h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-h6 text-Primary">PHONE</h4>
                <p className="mt-1 font-roboto text-Body1 text-[#828181]">
                  Lorem, ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-Cyan">
                <MdEmail className=" h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-h6 text-Primary">EMAIL</h4>
                <p className="mt-1 font-roboto text-Body1 text-[#828181]">
                  Lorem, ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-[#5800FF80] bg-opacity-50">
                <HiLocationMarker className=" h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-h6 text-Primary">LOCATION</h4>
                <p className="mt-1 font-roboto text-Body1 text-[#828181]">
                  Lorem, ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <Input
                type="text"
                full
                roundedmd
                xl
                className="capitalize"
                placeholder="Full Name"
              />
              <Input
                type="text"
                full
                roundedmd
                xl
                className="capitalize"
                placeholder="Phone"
              />
              <Input
                type="text"
                full
                roundedmd
                xl
                className="capitalize"
                placeholder="Email"
              />
              <textarea
                cols="30"
                rows="5"
                placeholder="Message"
                className="w-full rounded-md border-[2px] border-opacity-10 p-5 font-roboto text-[#000000] shadow outline-none placeholder:font-roboto placeholder:text-[#828181] hover:border-Secondary"
              />
              <Button roundedmd full xl onClick={handleClick}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
