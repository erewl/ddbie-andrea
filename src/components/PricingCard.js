import React from 'react';
import Card from './Card';

const PricingCard = ({ pricingModel }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold">{pricingModel.title}</p>
    <p className="mt-6">{pricingModel.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={pricingModel.customerImage}
        alt={pricingModel.customerName}
      />
      <div>
        <p>{pricingModel.customerName}</p>
        <p className="text-sm text-gray-600">{pricingModel.customerTitle}</p>
      </div>
    </div>
  </Card>
);

export default PricingCard;
