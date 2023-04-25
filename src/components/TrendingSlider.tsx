import { Carousel } from '@mantine/carousel';
import { Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import { SliderCard } from './SliderCard';


const TrendingSlider = ({sliderArray}: any) => {
  
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides =
      sliderArray &&
      sliderArray.map((item: any) => (
        <Carousel.Slide key={item.title}>
          <SliderCard {...item} />
          {/* <Text>{ item.category }</Text> */}
        </Carousel.Slide>
      ));
  
  return (
    <>
      <Carousel
        // loop={true}
        slideSize={mobile? '35%' : '15%'}
        // breakpoints={[{ maxWidth: "sm", slideSize: "30%", slideGap: 2 }]}
        // slideGap="xl"
        align="center"
        // slidesToScroll={1}
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {slides}
      </Carousel>
    </>
  );
}

export default TrendingSlider;