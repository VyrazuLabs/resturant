import React from 'react';
import navArrow  from "../assets/logos/back.svg";
import logo from "../assets/logos/logoicon.svg";
import logoText from "../assets/logos/logotext.png";
import cart from "../assets/logos/shoppingcart.svg";
import hamburger from "../assets/logos/hamburger.svg";


import { Group, Image } from '@mantine/core';


const Header = () => {
  return (
    <>
      <Group position="center">
        <div>
          <Image width="auto" height="auto" src={navArrow} />
        </div>
        <div>
          <Image width="auto" height="auto" src={logo} />
        </div>
        <div>
          <Image width="auto" height="auto" src={logoText} />
        </div>
        <div>
          <Image width="auto" height="auto" src={cart} />
        </div>
        <div>
          <Image width="auto" height="auto" src={hamburger} />
        </div>
      </Group>
    </>
  );
}

export default Header