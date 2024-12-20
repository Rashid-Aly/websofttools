import featuredData from "../../../../data/HomePage/homepage.json";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/router";
export default function Feature() {
  const { features } = featuredData;
  const router = useRouter();
  return (
    <div className="bg-[#39bbd2] bg-opacity-[6%] py-20">
      <div className="px-3 sm:container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-Secondary">
            Work faster
          </h2>
          <p className="px-16 py-2 text-h2">
            Explore Websofttools: All-in-One Toolkit
          </p>
          <p className="text-center text-Body1 text-[#828181]">
            Discover Websofttools: Your All-in-One Toolkit. Simplify media
            downloads, file conversion, and micro tool usage for effortless
            online tasks.
          </p>
        </div>
        <div className=" mt-16 px-3 sm:container ">
          <dl className="grid w-full gap-8 xs:grid-cols-1  md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded bg-white px-3 py-10 "
              >
                <div className="m-auto w-[70px]">
                  {feature.imageUrl && (
                    <Image
                      src={feature.imageUrl}
                      width="500"
                      height="400"
                      className="h-14 w-14 rounded bg-blue-200 p-4"
                      alt={`${feature.name} icon`}
                    />
                  )}
                </div>
                <dt className=" mt-6 text-center text-base font-bold leading-7 text-Primary">
                  {feature.name}
                </dt>
                <dd className="mt-3 text-center text-[#828181]">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <button
                      onClick={() => {
                        router.push(feature.href);
                      }}
                      className="text-sm font-semibold leading-6 text-Secondary"
                    >
                      <GoArrowUpRight className="m-auto rounded-full bg-[#00ACCC] bg-opacity-[10%] p-2 text-[30px] " />
                    </button>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
