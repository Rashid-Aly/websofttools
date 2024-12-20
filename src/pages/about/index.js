import Image from "next/image";
import NextLink from "../../components/reusable/Link/NextLink";
import { NextSeo } from "next-seo";
import { Breadcrumb } from "../../components";
import { TestimonialSlider } from "../../components";

/* eslint-disable react/no-unescaped-entities */
const timeline = [
  {
    name: "Founded company",
    description:
      "Websofttools was founded in September 2023, marking the beginning of our journey to simplify digital tasks and enhance productivity.",
    date: "Sep 2023",
    dateTime: "2023-09",
    imageUrl: "/images/blogs/company.jpg",
  },
  {
    name: "YouTube and TikTok Downloader",
    description:
      "In September 2023, we introduced our YouTube and TikTok downloader, offering users the ability to download their favorite videos from these popular platforms.",
    date: "Sep 2023",
    dateTime: "2023-09",
    imageUrl: "/images/blogs/download.png",
  },
  {
    name: "Released Beta",
    description:
      "Websofttools reached a significant milestone in October 2023 when we released the beta version of our platform, allowing users to experience our suite of tools.",
    date: "Oct 2023",
    dateTime: "2023-10",
    imageUrl: "/images/blogs/release.png",
  },
  {
    name: "Multi-Language Support",
    description:
      "We continued to expand our offerings in November 2023 by introducing multi-language support, making our tools accessible to a global audience.",
    date: "Nov 2023",
    dateTime: "2023-11",
    imageUrl: "/images/blogs/Multi.png",
  },
];

const jobOpenings = [
  {
    id: 1,
    role: "HR Manager",
    href: "#",
    description:
      "We are seeking an HR Manager to join our team. In this role, you will lead our human resources department, ensuring a positive and productive work environment. If you're passionate about fostering a collaborative workplace and have experience in HR management, we'd love to hear from you.",
    salary: "Negotiable",
    location: "On-site",
  },
  {
    id: 2,
    role: "SEO Expert",
    href: "#",
    description:
      "Are you an SEO expert with a proven track record of driving organic growth? Join our team and lead our search engine optimization efforts. You'll work closely with content creators, developers, and marketers to maximize our online visibility and user engagement.",
    salary: "Negotiable",
    location: "Remote",
  },
  {
    id: 3,
    role: "Front-end Developer",
    href: "#",
    description:
      "We're looking for a skilled Front-end Developer to join our development team. In this role, you will be responsible for creating and optimizing user interfaces for our suite of online tools. If you have a passion for clean and responsive web design, we want to hear from you.",
    salary: "Negotiable",
    location: "Remote",
  },
];

function About() {
  return (
    <>
      <NextSeo
        title="About | Web Soft Tools"
        description="At Websoftskills, we're more than just a software provider; we're a team of passionate innovators dedicated to revolutionizing the way you work."
        canonical="https://www.websofttools.com/about"
      />
      <div>
        <main className="isolate">
          <div className="h-[50vh] bg-Gradient">
            <div className="px-3 sm:container">
              <div className="py-8 pt-32 ">
                <Breadcrumb
                  pages={[
                    { name: "About us", href: "/Aboutus", current: false },
                  ]}
                />
              </div>
              <div className="mx-auto mt-20 max-w-2xl text-center 2xl:mt-0">
                <h2 className="font-roboto text-h1 text-Primary">About Us</h2>
                <p className="mt-4 font-roboto text-Body1 text-[#828181]">
                  At Websoftskills, we're more than just a software provider;
                  we're a team of passionate innovators dedicated to
                  revolutionizing the way you work.
                </p>
              </div>
            </div>
          </div>

          {/* Hero section */}

          <div className="px-3 sm:container">
            <div className="mt-32 text-center">
              <h1 className="font-roboto text-h2 text-Primary">
                Discover Our Journey of Innovation and Efficiency
              </h1>
              <div className="mt-5 px-2 lg:px-20">
                <p className="font-roboto text-Body1 text-[#828181]">
                  At Websoftskills, we're more than just a software provider;
                  we're a team of passionate innovators dedicated to
                  revolutionizing the way you work. Our journey began with a
                  vision to simplify tasks, boost productivity, and empower
                  individuals and businesses alike. With a commitment to
                  excellence and a thirst for innovation, we've crafted a suite
                  of tools that not only streamline your work but also inspire
                  creativity and efficiency.
                  <br />
                  Our story is one of continuous evolution and unwavering
                  dedication to our users. As we grow, so does our commitment to
                  providing top-notch solutions that make a difference in your
                  daily tasks. Join us in shaping the future of work with
                  technology that works for you.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline section */}

          <div className="mt-16 px-3 sm:container">
            <div className="grid grid-cols-1 gap-8 overflow-hidden md:grid-cols-2 xl:grid-cols-4 ">
              {timeline.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border bg-white p-3 shadow-sm"
                >
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={100}
                      height={100}
                      className="h-52 w-full rounded-lg"
                    />
                  )}
                  <div className="flex items-center gap-4">
                    <time
                      dateTime={item.dateTime}
                      className="mt-4 text-Subtile2 text-Cyanblue"
                    >
                      {item.date}
                    </time>
                    <hr className="mt-4 h-[2px] w-[70%] rounded-full bg-Cyanblue" />
                  </div>
                  <p className="mt-4 text-h5 text-Primary">{item.name}</p>
                  <p className="m-1 font-roboto text-Body1 text-[#828181]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo cloud */}
          <div className="mt-32 px-3 sm:container">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our customers love us
              </h2>
              <p className="mx-auto mt-6 max-w-xl font-roboto text-Body1 text-white">
                At Websofttools, we are dedicated to providing exceptional
                solutions that our customers truly appreciate. Here are some of
                the companies that trust and love our services:
              </p>
              <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/logo/transistor.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/logo/reform.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/images/logo/tuple.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="/images/logo/savvycal.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="/images/logo/statamic.svg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
              <p className="mx-auto mt-20 max-w-xl font-roboto text-Body1 text-white">
                We value the trust our customers place in us and are committed
                to continuously exceeding their expectations.
              </p>
              <div
                className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                  style={{
                    clipPath:
                      "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="mt-32 overflow-hidden sm:mt-40">
            <div className="px-3 sm:container">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <h2 className="text-h1 font-bold text-Primary sm:text-h2">
                    Our people
                  </h2>
                  <p className="mt-6 font-roboto text-Body1 text-[#828181]">
                    Meet the heart and soul of Websofttools. We're a diverse and
                    passionate team united by a common goal: to simplify your
                    digital world. From developers to designers, each of us
                    contributes expertise and creativity to bring you innovative
                    solutions.
                  </p>
                  <p className="mt-6 font-roboto text-Body1 text-[#828181]">
                    Behind every line of code and customer interaction, there's
                    a human connection. We're not just passionate about
                    technology; we're committed to making your digital journey
                    smoother and more productive.
                    <br />
                    At Websofttools, people come first. Our mission is to
                    empower you with efficient and enjoyable tools. Thank you
                    for choosing us as your digital partner.
                  </p>
                  <p className="mt-6 font-roboto text-Body1 text-[#828181]">
                    Our relentless pursuit of excellence drives us to
                    continuously improve your digital experience, ensuring you
                    have the best tools at your fingertips.
                  </p>

                  <p className="mt-6 font-roboto text-Body1 text-[#828181]">
                    We take pride in being your trusted digital partner, and we
                    look forward to being with you every step of the way on your
                    digital journey.
                  </p>
                </div>
                <div className="flex flex-wrap items-start justify-between gap-12 sm:gap-8 lg:contents">
                  <div className="px-3 sm:container">
                    <div className="w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                        alt=""
                        width={500}
                        height={500}
                        className="h-[20rem] w-full rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>

                    <div className="mt-4 xl:flex xl:justify-between">
                      <Image
                        src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                        alt=""
                        width={500}
                        height={500}
                        className=" rounded-2xl bg-gray-50 object-cover md:w-full lg:w-[22rem] 2xl:h-[20rem] 2xl:w-[24rem]"
                      />
                      {/* </div> */}
                      {/* <div className="w-[37rem]h-[20rem]  "> */}
                      <Image
                        width={500}
                        height={500}
                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                        className="rounded-2xl bg-gray-50 object-cover xs:mt-4 md:w-full lg:w-[28rem] xl:mt-0 2xl:h-[20rem] 2xl:w-[32rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="mb-20 mt-16 px-3 sm:container">
            <div className="xl:px-58 mb-20 mt-36 px-6 text-center md:px-20 lg:px-24">
              <h2 className="font-roboto text-h2 text-Primary">
                We’re always looking for awesome people to join us
              </h2>
              <p className="mt-6 font-roboto text-Body1 text-[#828181]">
                Are you ready to be part of an innovative and dynamic team? At
                Websofttools, we're always on the lookout for talented
                individuals who share our passion for technology and innovation.
              </p>
            </div>
            <div className="flex flex-col gap-14 lg:flex-row">
              <div className="w-full">
                <Image
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-43.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-2xl bg-gray-50 object-cover md:h-[40rem] md:w-full lg:h-[47rem] xl:h-[41rem]"
                />
              </div>
              <div className="w-full lg:max-w-xl lg:flex-auto ">
                <h3 className="sr-only">Job openings</h3>
                <ul className="-my-8 divide-y divide-gray-100">
                  {jobOpenings.map((opening) => (
                    <li key={opening.id} className="py-8">
                      <dl className="relative flex flex-wrap gap-x-3">
                        <dt className="sr-only">Role</dt>
                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                          <NextLink href={opening.href}>
                            {opening.role}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                          </NextLink>
                        </dd>
                        <dt className="sr-only">Description</dt>
                        <dd className="mt-2 w-full flex-none font-roboto text-Body1 text-[#828181]">
                          {opening.description}
                        </dd>
                        <dt className="sr-only">Salary</dt>
                        <dd className="mt-4 text-h6 text-Primary">
                          {opening.salary}
                        </dd>
                        <dt className="sr-only">Location</dt>
                        <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                          <svg
                            viewBox="0 0 2 2"
                            className="h-0.5 w-0.5 flex-none fill-gray-300"
                            aria-hidden="true"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                          {opening.location}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex border-t border-gray-100 pt-8">
                  <NextLink
                    href="/jobs"
                    className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    View all openings <span aria-hidden="true">&rarr;</span>
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
          <TestimonialSlider />
        </main>
      </div>
    </>
  );
}

export default About;
