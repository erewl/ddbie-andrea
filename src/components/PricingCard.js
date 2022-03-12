import React from 'react';
import Card from './Card';

const PricingCard = ({ pricingModel }) => (
  <Card className="mb-8">
    <p className="text-3xl font-semibold">{pricingModel.title}</p>
    <p className="mt-6">{pricingModel.content}</p>
    {/* <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={pricingModel.customerImage}
        alt={pricingModel.customerName}
      />
      <div>
        <p>{pricingModel.customerName}</p>
        <p className="text-sm text-gray-600">{pricingModel.customerTitle}</p>
      </div>
    </div> */}
    <div className="flex items-center">
      <div className='text-5xl font-bold'>
        { pricingModel.price}
      </div>
      <div className='text-2xl pl-2'>
        / {pricingModel.pricingUnit}
      </div>
    </div>
    <div>
      <ul>
        {pricingModel.features.map(feature => {
          let isBold = feature.includes("ALL");
          console.log(isBold)
          if (isBold) return <div className='pt-2'>✅ &nbsp; &nbsp; <b>{feature}</b></div>
           else return <div className='pt-2'>✅ &nbsp; &nbsp; {feature}</div>
        })}
      </ul>
    </div>
  </Card>
);

export default PricingCard;
