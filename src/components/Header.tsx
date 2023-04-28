import React from "react";
import navArrow from "../assets/logos/back.svg";
import logo from "../assets/logos/logoicon.svg";
import logoText from "../assets/logos/logotext.png";
import cart from "../assets/logos/shoppingcart.svg";
import hamburger from "../assets/logos/hamburger.svg";
import { useNavigate } from "react-router-dom";

import { Container, ActionIcon, Group, Image } from "@mantine/core";

const Header = () => {
  const navigate = useNavigate();

  	const goBack = () => {
      navigate(-1);
    };

  return (
    <>
      <Container p="20px 10px">
        <Group position="apart">
          <ActionIcon onClick={goBack}>
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
