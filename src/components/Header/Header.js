import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
  Listbox,
} from "@headlessui/react";
import Image from "next/image";
import { classNames } from "../../utils/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import headerData from "../../../data/HomePage/header.json";
import Link from "next/link";
import NextLink from "../reusable/Link/NextLink";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { video, Calculators, Converters, Language } = headerData;
  const [selected, setSelected] = useState(Language[0]);

  const handleOptionChange = (option) => {
    setSelected(option);
  };
  return (
    <header className="fixed top-0 z-20 w-full bg-Cyanblue bg-opacity-0 transition-all duration-100 ">
      <nav
        className="flex items-center justify-between sm:container xs:px-4 sm:px-0"
        aria-label="Global"
      >
        <div className="flex w-32 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/logo.png"
              alt="Logo here"
              width={172}
              height={39}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:ml-6 lg:flex lg:gap-x-6">
          <Link
            href="/"
            className="font-roboto text-Subtile2 font-normal opacity-70"
          >
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-[2px] font-roboto text-Subtile2 font-normal opacity-70 outline-0">
              Video
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-Primary"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {({ close }) => (
                  <div className="p-4">
                    {video.map((item) => {
                      if (item.name.toLowerCase().includes("instagram")) {
                        return (
                          <div
                            key={item.name}
                            className="group relative flex cursor-not-allowed items-center gap-x-6 rounded-lg p-4 text-sm leading-6 text-gray-400 hover:bg-gray-50"
                          >
                            <span className="block font-roboto text-Caption font-normal">
                              {item.name}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded p-4 font-roboto text-Body2 hover:bg-[#20A2F5] hover:bg-opacity-10"
                        >
                          <div className="flex-auto">
                            <Link onClick={() => close()} href={item.href}>
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-[2px] font-roboto text-Subtile2 font-normal opacity-70 outline-0">
              Converters
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-Primary"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {({ close }) => (
                  <div className="p-4">
                    {Converters.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded p-4 font-roboto text-Body2 hover:bg-[#20A2F5] hover:bg-opacity-10"
                      >
                        <div className="flex-auto">
                          <Link onClick={() => close()} href={item.href}>
                            {item.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 font-roboto text-Subtile2 font-normal opacity-70 outline-0">
              Calculators
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-Primary"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {({ close }) => (
                  <div className="p-4">
                    {Calculators.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded p-4 font-roboto text-Body2 hover:bg-[#20A2F5] hover:bg-opacity-10"
                      >
                        <div className="flex-auto">
                          <Link onClick={() => close()} href={item.href}>
                            {item.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>

          <NextLink
            href="/blog"
            className="font-roboto text-Subtile2 font-normal opacity-70"
            title={"Blog"}
          />
          <NextLink
            href="/about"
            className="font-roboto text-Subtile2 font-normal opacity-70"
            title={"About"}
          />
          <NextLink
            href="/contact-us"
            className="font-roboto text-Subtile2 font-normal opacity-70"
            title={"Contact us"}
          />
        </Popover.Group>
        <div className="hidden w-14 lg:flex lg:flex-1 lg:justify-end">
          <Listbox value={selected} onChange={handleOptionChange}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-24 cursor-default rounded-full bg-white py-2 pl-3 text-left font-roboto text-Caption shadow-md focus:outline-none sm:text-sm">
                <span className="block truncate font-roboto text-Caption text-Primary">
                  {selected.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon
                    className="h-5 w-5 text-Primary"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full cursor-default overflow-auto rounded-md bg-white p-1 text-left font-roboto text-Caption shadow-md ring-gray-900/5 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300  sm:text-sm ">
                  {Language.map((lang, langId) => (
                    <Listbox.Option
                      key={langId}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-7 pr-4 text-Primary hover:bg-[#20A2F5] hover:bg-opacity-10 ${
                          active ? "font-medium" : "font-normal"
                        }`
                      }
                      value={lang}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {lang.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-[2px] text-gray-600">
                              <CheckIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <Image
                src="/images/logo.png"
                alt="Logo here"
                width={180}
                height={50}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 font-roboto text-Subtile2 font-normal text-[#000000] opacity-70 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-roboto text-Subtile2 font-normal text-[#000000] opacity-70 hover:bg-gray-50">
                        Video
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none text-Primary",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {video.map((item) => {
                          if (item.name.toLowerCase().includes("instagram")) {
                            return (
                              <div
                                key={item.name}
                                className="group relative block cursor-not-allowed items-center rounded-lg py-2 pl-6 pr-3 font-roboto text-Body2 text-sm text-gray-400 hover:bg-gray-50"
                              >
                                <span className="block font-roboto text-Caption font-normal">
                                  {item.name}
                                </span>
                              </div>
                            );
                          }

                          return (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              onClick={() => setMobileMenuOpen(false)}
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 font-roboto text-Body2 text-Primary hover:bg-[#20A2F5] hover:bg-opacity-10"
                            >
                              {item.name}
                            </Disclosure.Button>
                          );
                        })}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-roboto text-Subtile2 font-normal text-[#000000] opacity-70 hover:bg-gray-50">
                        Converters
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none text-Primary",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {Converters.map((item) => (
                          <Disclosure.Button
                            onClick={() => setMobileMenuOpen(false)}
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 font-roboto text-Body2 text-Primary hover:bg-[#20A2F5] hover:bg-opacity-10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-roboto text-Subtile2 font-normal text-[#000000] opacity-70 hover:bg-gray-50">
                        Calculators
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none text-Primary",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {Calculators.map((item) => (
                          <Disclosure.Button
                            onClick={() => setMobileMenuOpen(false)}
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 font-roboto text-Body2 text-Primary hover:bg-[#20A2F5] hover:bg-opacity-10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 font-roboto text-Subtile2 font-normal text-[#000000] opacity-70 hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 font-roboto text-Subtile2 font-normal text-[#000000] opacity-70 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 font-roboto text-Subtile2 font-normal text-[#000000] opacity-70 hover:bg-gray-50"
                  >
                    Contact us
                  </Link>
                </Disclosure>
              </div>
              <div className="py-6">
                <Listbox value={selected} onChange={handleOptionChange}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative z-10 w-24 cursor-default rounded-full bg-white py-2 pl-3 text-left font-roboto text-Caption shadow-md  focus:outline-none focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate font-roboto text-Caption text-Primary">
                        {selected.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon
                          className="h-5 w-5 text-Primary"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 font-roboto text-Caption shadow-lg ring-1 ring-black focus:outline-none sm:text-sm ">
                        {Language.map((lang, langId) => (
                          <Listbox.Option
                            key={langId}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-7 pr-4 text-Primary hover:bg-[#20A2F5] hover:bg-opacity-10 ${
                                active ? "font-medium" : "font-normal"
                              }`
                            }
                            value={lang}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-normal" : "font-normal"
                                  }`}
                                >
                                  {lang.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-[2px] text-Primary">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
