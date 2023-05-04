import { Carousel } from '@mantine/carousel';
import { Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import { SliderCard } from './SliderCard';


const TrendingSlider = ({sliderArray}: any) => {
  
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = sliderArray && sliderArray.map((item: any) => (
        <Carousel.Slide gap={25} key={item.title}>
          <SliderCard {...item} />
        </Carousel.Slide>
      ));
  
  return (
    <>
      <Carousel
        loop
        slideSize={mobile? '35%' : '15%'}
        // breakpoints={[{ maxWidth: "sm", slideSize: "30%", slideGap: 2 }]}
        // slideGap="md"
        align="start"
        // slidesToScroll={3}
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