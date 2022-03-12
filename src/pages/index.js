import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import SvgCharts from '../svg/SvgCharts';

import data from "../data/content-data";

import inspection from "../svg/inspection.jpg"
import repairs from "../svg/repairs.webp" 
import AndreaLogo from '../svg/andrea_logo_circle.png';
import PricingCard from '../components/PricingCard';

import { StaticImage } from "gatsby-plugin-image"


const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            {/* <img src={AndreaLogo} alt="A hand palming a building, Andrea stands below that logo." /> */}
            {data.mainTitle}
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            { data.subTitle }
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
        <div className="lg:w-1/2">
          <StaticImage src='../svg/inspection.jpg' alt="Inspection Image" />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">We offer</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {data.features.map(feature => {
            return <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">{ feature.title}</p>
                <p className="mt-4">
                  { feature. description }
                </p>
              </Card>
            </div>
          })}
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Customizable Inspection Forms</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<img src={repairs} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Integration with repair platforms
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<img src={inspection} />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<img src={inspection} />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>


    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Subscription & Pricing</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {data.pricing.map(pricingModel => (
            <div key={pricingModel.customerName} className="flex-1 px-3">
              <PricingCard pricingModel={pricingModel} />
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to level up?</h3>
      <p className="mt-8 text-xl font-light">

        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
