import Image from "next/image";
import footerData from "../../../data/HomePage/homepage.json";
import Link from "next/link";

export default function Footer() {
  const { footer } = footerData;

  return (
    <footer className="bg-Primary pb-20 pt-20" aria-labelledby="footer-heading">
      <div className="px-3 sm:container  ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-36 ">
          <div>
            <Image
              src="/images/logo white .png"
              alt="Company name"
              width={200}
              height={100}
            />
            <p className="mt-6 w-[80%] font-roboto text-Body2 text-white">
              All-in-One Free Online Suite: Download Media, Convert Files, and
              Access Micro Tools in a Single Click, Anytime, Anywhere.
            </p>
          </div>
          <div className="mt-16 grid gap-8 xs:grid-cols-1 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-h6 text-white">Home</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footer.downloaders.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="font-roboto text-Body2 text-white hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-h6 text-white">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footer.quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="font-roboto text-Body2 text-white hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-h6 text-white">Our Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footer.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-Body2 text-white hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-h6 text-white">Find us on</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerData.footer.sociallinks.map((link, index) => (
                    <div key={index} className="-ml-[6px] text-white">
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Image
                          src={`/socialicon/${link.name.toLowerCase()}.png`}
                          alt={link.name}
                          width={50}
                          height={50}
                          className="h-6 w-6"
                        />
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
