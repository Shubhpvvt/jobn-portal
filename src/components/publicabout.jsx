const experiences = [
  {
    title: "Led implementation of Allegro 8.0 for a major European utility.",
    company: "Quantel Solutions",
    duration: "Jan 2021 - Present",
    description:
      "Successfully managed the end-to-end implementation of Allegro 8.0, integrating it with existing ERP and market data systems. Delivered the project on time and 10% under budget, resulting in significant improvements in trade capture and risk reporting accuracy.",
  },
  {
    title: "Optimized Openlink Endur environment for a global trading firm.",
    company: "EnergyCo Advisors",
    duration: "Mar 2017 - Dec 2020",
    description:
      "Designed and deployed performance enhancements for Openlink Endur, reducing daily processing times by 30%. Introduced automated reconciliation processes that reduced manual effort by 25% and improved data integrity.",
  },
  {
    title: "Developed custom modules for TriplePoint for a North American refiner.",
    company: "Commodity Solutions Inc.",
    duration: "Aug 2013 - Feb 2017",
    description:
      "Built custom modules to support crude oil blending and scheduling requirements, improving system flexibility and operational efficiency. Provided extensive user training and post-go-live support.",
  },
];

const PublicAbout = () => {
  return (

    <div className="bg-white border px-6 py-5 w-full space-y-6">

      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          About Me
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Jai Dev is a seasoned CTRM professional with over 10 years of experience
          in the energy and commodity trading sector. He has successfully led
          large-scale implementations, system upgrades, and production support
          initiatives for major oil & gas companies, utilities, and global
          trading firms.
        </p>

        <p className="text-sm text-gray-600 leading-relaxed mt-3">
          His expertise spans front, middle, and back office operations, enabling
          the delivery of robust and scalable CTRM solutions. Jai excels at
          managing complex project environments, collaborating with
          cross-functional teams, and translating business requirements into
          effective technical strategies. He remains committed to continuous
          learning and staying ahead of industry and technology trends.
        </p>
      </div>

      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Experience Highlights
        </h3>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            
            <div key={index} className="border px-4 py-3">
              <h4 className="text-sm font-semibold text-gray-900">
                {exp.title}
              </h4>

              <p className="text-xs text-gray-500 mt-1">
                {exp.company} • {exp.duration}
              </p>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PublicAbout;
