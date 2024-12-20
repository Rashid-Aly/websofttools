import PropTypes from "prop-types";
import Image from "next/image";

export default function DownloadGuide({ Guides }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto my-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {Guides.map((feature, index) => (
            <div
              key={feature.name}
              className="flex flex-col rounded-lg border-2 border-indigo-100 bg-white px-8 pb-8 text-center"
            >
              <div className="flex items-center justify-center">
                {feature.imageUrl && (
                  <Image
                    src={feature.imageUrl}
                    width="500"
                    height="500"
                    className={`relative bottom-7 h-14 w-14 rounded-full bg-indigo-100 p-3 ${
                      index === 1
                        ? "bg-[#E3FFFF]"
                        : index === 2
                        ? "bg-[#E8DCFE]"
                        : ""
                    }`}
                    alt={`${feature.name} icon`}
                  />
                )}
              </div>
              <h2 className="text-center font-roboto text-h6 text-Primary">
                {feature.name}
              </h2>
              <dd className="mt-4 font-roboto text-Body1 text-[#828181]">
                <p>{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

DownloadGuide.propTypes = {
  Guides: PropTypes.array,
};
