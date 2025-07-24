import { FaCoffee, FaAward, FaLeaf, FaMugHot } from 'react-icons/fa';

const FeatureSection = () => {
  const features = [
    {
      icon: <FaCoffee className="text-5xl text-[#4B2E2E]" />,
      title: "Awesome Aroma",
      desc: "You will definitely be a fan of the design & aroma of your coffee"
    },
    {
      icon: <FaAward className="text-5xl text-[#4B2E2E]" />,
      title: "High Quality",
      desc: "We served the coffee to you maintaining the best quality"
    },
    {
      icon: <FaLeaf className="text-5xl text-[#4B2E2E]" />,
      title: "Pure Grades",
      desc: "The coffee is made of the green coffee beans which you will love"
    },
    {
      icon: <FaMugHot className="text-5xl text-[#4B2E2E]" />,
      title: "Proper Roasting",
      desc: "Your coffee is brewed by first roasting the green coffee beans"
    }
  ];

  return (
    <div className="bg-[#EFE9E4] py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
        {features?.map((feature, idx) => (
          <div key={idx} className="text-center space-y-3">
            <div className="flex justify-center">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-[#4B2E2E] rancho-regular">{feature.title}</h2>
            <p className="text-sm text-gray-700 rancho-regular">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
