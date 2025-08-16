import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you execute your plan and delivery results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Marketing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help your build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <Title
        title={"How can we help?"}
        desc={
          "From strategy to execution, we craft digital solutions that move your business forward."
        }
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
