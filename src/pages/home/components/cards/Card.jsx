import React from 'react';

const Card = ({ order, title, subtitle, price, features }) => {
  return (
    <div
      className="max-w-sm p-8 flex flex-col items-center text-center min-h-[420px] bg:hover:shadow-lg hover:scale-105 transition transform duration-300 rounded-lg mx-4"
      style={{ backgroundColor: 'rgb(249,249,255)' }}
    >
      <div
        className="w-32  h-32 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: 'rgb(226,229,255)' }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-black font-medium text-3xl"
          style={{ backgroundColor: 'rgb(237,239,255)' }}
        >
          {order}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
      <p className="text-gray-500 mb-8">{subtitle}</p>

      {features && features.length > 0 && (
        <div className="mb-6 w-full text-gray-500">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="border-t border-gray-200" />
              <div className="py-2">{feature}</div>
            </React.Fragment>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      )}

      <p className="text-3xl font-bold mt-auto">{price}</p>
    </div>
  );
};

export default Card;
