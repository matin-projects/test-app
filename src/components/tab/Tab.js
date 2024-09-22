import { useState } from "react";
import Card from "../card/Card";

const Tab = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(categories)[0]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Pill-Shaped Tab Header */}
      <div className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 justify-center mb-6">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg ${
              activeTab === category
                ? "bg-gradient-to-r from-[#203732] to-[#4a7d76] text-white shadow-xl scale-105"
                : "bg-white text-[#203732] border-2 border-[#203732] hover:bg-[#203732] hover:text-white hover:border-transparent"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories[activeTab].map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
            priceHot={item.priceHot}
            priceIced={item.priceIced}
          />
        ))}
      </div>
    </div>
  );
};

export default Tab;
