import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';

import data from "../../data/content-data"

const Header = () => (
  <header className="sticky top-0 shadow bg-primary-100">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <img src='https://i.imgur.com/S4sMFQl.png' alt="Andrea Logo, hand palming a building" width="75px" className='pr-2'/>
        <p className='text-white font-bold text-shadow' id='logo'>{data.mainTitle}</p>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          We Offer
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#pricing">
          Pricing
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Schedule Demo</Button>
      </div>
    </div>
  </header>
);

export default Header;
