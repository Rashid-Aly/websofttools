/* eslint-disable react/no-unescaped-entities */
import { NextSeo } from "next-seo";
import { Breadcrumb, GetInTouch, PageHeading } from "../../components";

export default function ContactUs() {
  return (
    <>
      <NextSeo
        title="Contact us | Web Soft Tools"
        description="Contact us anytime for any issue, Your feedback matters, and we're just a message away."
        canonical="https://www.websofttools.com/contact-us"
      />
      <div className="bg-Gradient p-6">
        <div className="px-3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Contact us", href: "/contact-us", current: false },
              ]}
            />
          </div>
          <div className="mx-auto my-10 md:w-1/2 ">
            <div className="text-center">
              <PageHeading
                headings={[
                  {
                    name: (
                      <h2 className="font-roboto text-h2 text-Primary">
                        Get in touch
                      </h2>
                    ),
                    description: (
                      <p className="font-roboto text-Body1 text-[#828181]">
                        Feel free to reach out to us anytime you have questions,
                        suggestions, or need assistance. We're here to listen
                        and help you make the most of Websofttools. Your
                        feedback matters, and we're just a message away.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <GetInTouch />
      </div>
    </>
  );
}
