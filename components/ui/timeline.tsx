import React from "react";

const Timeline = () => {
  const steps = [
    {
      heading: "1. Understanding Client Needs",
      paragraph:
        "The first step is to clearly understand what the client wants to achieve and who their customers are. We are the leading digital marketing company in Coimbatore, creating personalized strategies that match the client's specific goals.",
    },
    {
      heading: "2. Market Research and Competitor Analysis:",
      paragraph:
        "We conduct thorough market research and competitor analysis to find opportunities, helping Nixensoft, a professional digital marketing agency in Coimbatore, craft strategies that offer a competitive edge.",
    },
    {
      heading: "3. Strategy Development:",
      paragraph:
        "Using the insights gathered, we create a digital marketing strategy covering SEO, social media, content marketing, and more, all aimed at maximizing ROI. Nixensoft, a top online marketing company in Coimbatore, ensures every tactic is optimized for success.",
    },
    {
      heading: "4. Implementation",
      paragraph:
        "We are an expert team that precisely executes the strategy, handling everything from content creation to social media, ensuring our clients' success.",
    },
    {
      heading: "5. Monitoring and Optimization",
      paragraph:
        "We continuously monitor campaigns with advanced analytics, adjusting strategies in real-time to ensure the best outcomes.",
    },
    {
      heading: "6. Reporting and Feedback",
      paragraph:
        "We provide detailed reports that highlight successes and areas for improvement, and use client feedback to refine our approach.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Our Digital Marketing Process:
      </h2>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-8">
        At Nixensoft, our digital marketing workflow turns smart strategies into
        real results that help your business succeed. We concentrate on targeted
        campaigns, use data to make decisions, and continuously improve to
        ensure long-term growth.
      </p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {steps.map((step, index) => (
          <li key={index} className={`mb-10 ms-4`}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {step.heading}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {step.paragraph}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
