import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

import data from "../../data/content-data"

const Header = () => (
  <header className="sticky top-0 shadow bg-primary-100">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        { data.mainTitle }
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          About Us
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Technologies & Articial Intelligence
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Pricing
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Request Demo</Button>
      </div>
    </div>
  </header>
);

export default Header;