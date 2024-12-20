import StatsData from "../../../../data/HomePage/homepage.json";

export default function Stats() {
  const { stats } = StatsData;

  return (
    <div className="bg-Cyanblue bg-opacity-5 py-28 sm:py-32">
      <div className="px-3 sm:container">
        <div className="px-3 sm:container">
          <div className="text-center">
            <h2 className="font-roboto text-h2 tracking-tight text-Primary sm:text-4xl">
              Trusted by Users Worldwide
            </h2>
            <p className="mt-6 font-roboto text-Body1 text-[#828181]">
              Websofttools: Earning a Trusted Reputation Globally as Your
              Reliable Online Toolkit Partner
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col p-8">
                <dd className="border-first mt-2 font-roboto text-h1 tracking-tight text-Primary ">
                  {stat.value}
                </dd>
                <dt className="mt-2 font-roboto text-Body1 text-[#828181]">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
