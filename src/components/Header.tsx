import React from "react";
import navArrow from "../assets/logos/back.svg";
import logo from "../assets/logos/logoicon.svg";
import logoText from "../assets/logos/logotext.png";
import cart from "../assets/logos/shoppingcart.svg";
import hamburger from "../assets/logos/hamburger.svg";

import { Container, ActionIcon, Group, Image } from "@mantine/core";

const Header = () => {
  return (
    <>
      <Container p="70px 0px 35px 0px">
        <Group position="apart">
          <ActionIcon>
            <Image width="auto" height="auto" src={navArrow} />
          </ActionIcon>
          <Group position="center" spacing="2px">
            <Image width="auto" height="auto" src={logo} />
            <Image width="auto" height="auto" src={logoText} />
          </Group>
          <Group>
            <ActionIcon>
              <Image width="auto" height="auto" src={cart} />
            </ActionIcon>
            <ActionIcon>
              <Image width="auto" height="auto" src={hamburger} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </>
  );
};

export default Header;
