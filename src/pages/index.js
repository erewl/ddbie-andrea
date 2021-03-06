import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import data from "../data/content-data";

import PricingCard from '../components/PricingCard';


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
            {data.subTitle}
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink href="#contact" className='text-white'>
              <Button size="lg">Get Started</Button>
            </AnchorLink>
          </p>
          <p className="mt-4 text-gray-600">Go paperless today.</p>
        </div>
        <div className="lg:w-1/2">
          <img src={'https://i.imgur.com/pb0iktE.jpeg'} alt="Inspection Image" />
        </div>
      </div>
    </section>


    <section id="video-demo" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container text-center bg-gray-200 mx-auto pt-5 pb-10 pt-10 shadow-sm rounded-xl">
        {/* <h2 className="text-3xl lg:text-5xl font-semibold mb-5">Video Demo</h2> */}
        <div className='flex justify-center items-center'>
          <div>
            <iframe
              src="https://player.vimeo.com/video/687861989?h=48b7bfb86e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              className='rounded-xl shadow-xl'
              frameborder="0"
              width="900" height="500"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="Andrea.">
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </section>


    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">We Offer</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {data.features.map(feature => {
            return <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">{feature.title}</p>
                <p className="mt-4">
                  {feature.description}
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
            A complete and fully customizable solution to transform
            your paper forms into dynamic, mobile forms to save time and money.
          </p>
        </div>
      }
      secondarySlot={<img className="rounded-xl" src={'https://i.imgur.com/LyOYUAb.jpg'} alt="Repair image" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Integration with repair platforms
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            You can add a work order or maintenance job to the app at any time.
            Andrea makes the assignment available for handymen and within an hour you will have an offer
          </p>
        </div>
      }

      secondarySlot={<img src={'https://i.imgur.com/yf1qPMI.jpeg'} alt="Repair image" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Check energy efficiency
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            ANDREA will create anonymous baselines for you so a comparison can be made with your portfolio
            and the industry standard. <br></br>
            Are you on track to accomplish your energy efficieny goals?
          </p>
        </div>
      }
      secondarySlot={<img src={'https://i.imgur.com/DH32j52.jpg'} alt="Repair image" />}
    />

    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-2xl text-gray-600">Our customers get results</LabelText>
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
    </section> */}


    <section id="pricing" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="text-2xl mb-8 text-gray-600 text-center">Subscription & Pricing</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {data.pricing.map(pricingModel => (
            <div key={pricingModel.customerName} className="flex-1 px-3">
              <PricingCard pricingModel={pricingModel} />
            </div>
          ))}
        </div>
      </div>
    </section>


    <section id="contact" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">{data.contact.title}</h3>
      <p className="mt-8 text-xl font-light">
        <pre className='font-sans'>
          {data.contact.text}
        </pre>
      </p>
      <p className="mt-8">
        <Button size="xl">Contact Us Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
