import { Card, Container, Grid, Text, Image, Badge, Group, ScrollArea } from '@mantine/core';
import React from 'react'
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchScan from '../components/SearchScan';
import TrendingSlider from '../components/TrendingSlider';
import { resturentData, sliderItem, tagList } from "../utils/sliderData";

const ResturentList = () => {

const searchInput = (value: any) => {
  console.log(value);
};

  return (
    <div>
      <h3>Resturent List Page</h3>
      <Container>
        <Header />
        <SearchScan searchInput={searchInput} />
        <Grid>
          <Grid.Col span={3}>
            <h4>TRENDING TODAY</h4>
          </Grid.Col>
          <Grid.Col span={9}>
            <TrendingSlider sliderArray={sliderItem} />
          </Grid.Col>
        </Grid>

      <ScrollArea w={'100%'} h={50} pt={10}>
        <Group position='left' noWrap={true}>
          {tagList.length && tagList.map((item: any) => (
                  <Badge
                    key={item.id}
                    variant="outline"
                    color="red"
                    
                  >
                    {item.name}
                  </Badge>
            ))}
        </Group>
      </ScrollArea>

        <Grid>
          <Grid.Col span={3}>
            <h4>RESTAURANTS NEARBY</h4>
          </Grid.Col>
          {/* <Grid.Col span={9}>
            <TrendingSlider sliderArray={sliderItem} />
          </Grid.Col> */}
        </Grid>

        {resturentData.length &&
          resturentData.map((item: any) => (
            <CardList key={item.title} {...item} />
          ))}
      </Container>
    </div>
  );
}

export default ResturentList;