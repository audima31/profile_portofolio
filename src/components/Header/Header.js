import React from "react";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header>
      {/* Buat Web */}
      {/* <nav
        className=" flex items-center justify-center p-6 pb-10 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div
          //  flex-1 lg:hidden
          className="lg:hidden ml-auto"
        >
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className={
              location.pathname === "/"
                ? "font-semibold leading-6 sm:text-base text-warna1 afterAccess"
                : "font-semibold leading-6 sm:text-base text-warna1 beforeAccess "
            }
          >
            Home
          </a>
          <a
            href="/project"
            className={
              location.pathname === "/project"
                ? "font-semibold leading-6 sm:text-base text-warna1 afterAccess"
                : "font-semibold leading-6 sm:text-base text-warna1 beforeAccess "
            }
          >
            Project
          </a>
          <a
            href="/about"
            className={
              location.pathname === "/about"
                ? "font-semibold leading-6 sm:text-base text-warna1 afterAccess"
                : "font-semibold leading-6 sm:text-base text-warna1 beforeAccess "
            }
          >
            About
          </a>
        </Popover.Group>
      </nav> */}
      / {/*  */}
      {/* Ini buat mobile */}
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Project
                </a>
                <a
                  href="#/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
      {/* Logo */}
      <nav
        className=" flex items-center justify-start p-4 pb-8 lg:px-8"
        aria-label="Global"
      >
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <h1
            className="logo font-semibold italic text-3xl underline"
            style={{ color: "#323030" }}
          >
            AO
          </h1>
        </Popover.Group>
      </nav>
    </header>
  );
}
