import { BackgroundImage, Box, Center, Container, Text, Card, Image } from '@mantine/core';
import React from 'react'
import Header from '../components/Header';

const ResturentDetails = () => {
  return (
    <>
      <Header />
      <Container p={0}>
        <Box maw={800} mx="auto">
          <Image src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" />
        </Box>
      </Container>
        <Card bg="rgb(221 158 158 / 74%)" padding="lg" radius="md">
          {/* bg="rgba(255, 255, 255, 0.74)" */}
          <Center p="md">
            <Text color="#000">
              BackgroundImage component can be used to add any content on image.
              It is useful for hero headers and other similar sections
            </Text>
          </Center>
        </Card>



      {/* <BackgroundImage
        p={0}
        w="100%"
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
      >
        <Card bg="rgba(255, 255, 255, 0.74)" padding="lg" radius="md">
          <Center p="md">
            <Text color="#fff">
              BackgroundImage component can be used to add any content on image.
              It is useful for hero headers and other similar sections
            </Text>
          </Center>
        </Card>
      </BackgroundImage> */}
    </>
  );
}

export default ResturentDetails;