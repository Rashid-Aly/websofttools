import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import Button from "../reusable/Button/Button";

export default function SignUp() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/background.jpg"
        alt="Background Image "
        className="absolute -z-10 h-auto "
        layout="fill"
      />
      <div className="py-[100px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="px-4 py-2 text-h5">Signup For Our Newsletter</p>
          <p className="text-Body1 opacity-60">
            Sign up to get the latest articles from our cleaning programs
          </p>
        </div>
        <div className="mt-7">
          <div className="m-auto flex justify-between rounded-full border-2 px-3 py-3 md:w-full lg:w-[709px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full bg-transparent pl-2 text-Body1 outline-none"
            />
            <Button xl roundedfull icon={<FaLocationArrow />}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
