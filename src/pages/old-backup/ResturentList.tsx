import { Card, Container, Grid, Text, Image, Badge, Group, ScrollArea, createStyles } from '@mantine/core';
import React, { useState } from 'react'
import CardList from '../../components/CardList';
import SearchScan from '../../components/SearchScan';
import TrendingSlider from '../../components/TrendingSlider';
import { resturentData, sliderItem, tagList } from "../../utils/sliderData";
import { leftSideStyle } from '../../utils/styles/GlobalStyle';

const ResturentList = () => {
  const { classes } = leftSideStyle();
  
const [active, setActive] = useState(null);
const searchInput = (value: any) => {
  console.log(value);
};

  return (
    <div className={classes.sideBar}>
      {/* className={classes.sideBar} */}
      <Container>
        <SearchScan searchInput={searchInput} />
        <Grid>
          <Grid.Col span={3}>
            <Text fz='15px' fw={500} color='#FFFFFF'>TRENDING TODAY</Text>
          </Grid.Col>
          <Grid.Col span={9}>
            <TrendingSlider sliderArray={sliderItem} />
          </Grid.Col>
        </Grid>

        <ScrollArea w={"100%"} h={50} pt={10} type='never'>
          <Group position="left" noWrap={true}>
            {tagList.length &&
              tagList.map((item: any) => (
                <Badge key={item.id} variant={active === item? 'filled' : 'outline'} onClick={() => setActive(item)} color="red">
                  {item.name}
                </Badge>
              ))}
          </Group>
        </ScrollArea>

        <Grid>
          <Grid.Col span={3}>
            <Text fz='15px' pb='15px' fw={500} color='#FFFFFF'>RESTAURANTS NEARBY</Text>
          </Grid.Col>
          {/* <Grid.Col span={9}>
            <TrendingSlider sliderArray={sliderItem} />
          </Grid.Col> */}
        </Grid>

        {resturentData?.length &&
          resturentData.map((item: any) => (
            <CardList key={item.title} {...item} />
          ))}
      </Container>
    </div>
  );
}

export default ResturentList;