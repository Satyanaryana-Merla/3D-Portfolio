import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-5 justify-center items-center place-items-center p-3 md:p-6 lg:p-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
}

export default Services;
