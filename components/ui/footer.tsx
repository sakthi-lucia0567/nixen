import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Who We Are
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Retail & E-Commerce
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Information Technology
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Finance & Insurance
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Services
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Translation
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Proofreading & Editing
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                Content Creation
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Contact Us
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                +880 768 473 4978
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-blue-500"
              >
                info@merakiui.com
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link href="#">
            <Image
              className="w-auto h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt="Logo"
              width={100}
              height={28}
            />
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
