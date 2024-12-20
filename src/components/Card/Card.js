/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Button from "../reusable/Button/Button";

const Card = ({ data }) => {
  const router = useRouter();
  return (
    <div className="z-10 grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-[8px] border bg-[#F9FFFF] drop-shadow-sm"
        >
          <div className="mt-8 flex justify-center">
            {item.imageUrl && (
              <Image
                src={item.imageUrl}
                width={100}
                height={100}
                className={`h-12 w-12 ${
                  index === 1
                    ? "w-16"
                    : index === 4
                      ? "w-28"
                      : index === 5
                        ? "w-16"
                        : ""
                }`}
                alt={`${item.name} Icon`}
              />
            )}
          </div>

          <h1 className="mt-8 text-center text-h5 text-Primary ">
            {item.name}
          </h1>
          <p className="m-auto mt-3 px-[48px]  text-center font-roboto text-Body1 text-[#828181]">
            {item.description}
          </p>
          <div className="mb-[30px] mt-4 flex h-[60px] w-full items-center justify-center px-[20px]">
            <Button
              rounded
              lg
              full
              onClick={() => {
                router.push(item.href);
              }}
            >
              {item.name}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.any,
    name: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
  }),
};
