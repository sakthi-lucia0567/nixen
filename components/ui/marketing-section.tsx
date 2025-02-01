import React from "react";

const DigitalMarketingSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Why We are the Best Digital Marketing Company in Coimbatore to take
            care of your business?
          </h2>
          <p className="mb-4 font-light">
            NixenSoft is a digital marketing company in Coimbatore that focuses
            on getting results for your business. We specialize in SEO (search
            engine optimization), SEM (search engine marketing), PPC
            (pay-per-click marketing), social media management, and content
            marketing.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Grow Your Business With Us
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <p className="mb-4 font-medium">
            At NixenSoft, we are known as the top digital marketing company in
            Coimbatore because we provide solutions that work for your business.
            Our team uses the latest methods in SEO, content marketing, social
            media, and paid ads to drive more traffic to your website, boost
            your brand visibility, and engage more people online.
          </p>
          <p className="mb-4 font-medium">
            We make marketing simple so you can focus on growing your business.
            With our clear and real-time tracking, we make sure every campaign
            is successful. Whether you want more visitors to your website or
            higher sales, Nixensoft is here to help your business grow online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
