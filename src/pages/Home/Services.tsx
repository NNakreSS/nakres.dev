import React from "react";
import ICard from "../../interfaces/ICard";

const ServiceCard: React.FC<ICard> = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services">
      <div className="flex mb-5">
        <h3 className="text-2xl lg:text-4xl font-semibold ">Hizmetler</h3>
      </div>
      <div>
        <div className="services-container">
          <ServiceCard
            imgSrc=""
            title="Mobile App Development"
            description="We offer top-notch mobile app development services tailored to your business needs."
          />
          <ServiceCard
            title="Web Development"
            description="Create stunning websites with our expert web development services."
          />
          <ServiceCard
            title="FiveM Development"
            description="Explore the limitless possibilities of FiveM development with our experienced team."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
