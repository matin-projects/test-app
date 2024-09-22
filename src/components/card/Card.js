import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameSimple,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ image, title, description, price, priceHot, priceIced }) => {
  return (
    <div className="bg-white text-[#203732] rounded-xl shadow-lg overflow-hidden border-2 border-[#203732] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center space-x-4">
          {price && <p className="text-[#203732] font-bold text-lg">{price}</p>}
          {priceHot && (
            <div className="flex items-center text-[#203732] font-bold text-lg">
              <FontAwesomeIcon icon={faFireFlameSimple} className="mr-2" />
              {priceHot}
            </div>
          )}
          {priceIced && (
            <div className="flex items-center text-[#203732] font-bold text-lg">
              <FontAwesomeIcon icon={faSnowflake} className="mr-2" />
              {priceIced}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
