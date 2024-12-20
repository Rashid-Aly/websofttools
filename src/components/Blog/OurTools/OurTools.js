/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Button from "../../reusable/Button/Button";
import { useRouter } from "next/router";

const OurTools = ({ data }) => {
  const router = useRouter();
  return (
    <div className="z-10 mt-8 grid w-fit gap-5 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
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
          <div className="mb-[30px] mt-4 flex h-[60px] w-full items-center justify-center px-[20px]">
            <Button
              full
              roundedmd
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

export default OurTools;

OurTools.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.any,
    name: PropTypes.string,
    description: PropTypes.string,
    href: PropTypes.string,
  }),
};
