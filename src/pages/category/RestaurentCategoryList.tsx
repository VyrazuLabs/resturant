import { Container, Text, useMantineTheme, Grid, } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react'
import { useDetailsStyle } from './style';
import SearchScan from '../../components/SearchScan';
import { resturentData } from '../../utils/sliderData';
import CardList from '../../components/CardList';

const RestaurentCategoryList = () => {
  const { classes } = useDetailsStyle();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  
  const searchInput = (value: any) => {
    console.log(value);
  };
    
    return (
      <>
        <Container>
          <SearchScan searchInput={searchInput} />
          <Grid>
            <Grid.Col span={2}>
              <Text fz="16px" pb="15px" fw={500} color={mobile? "#ffffff": 'red'}>
                COFFEE SHOPS
              </Text>
            </Grid.Col>
          </Grid>
          <Grid>
            {resturentData?.length &&
              resturentData.map((item: any) => (
                <Grid.Col md={6}>
                  <CardList key={item.title} {...item} />
                </Grid.Col>
              ))}

          </Grid>
        </Container>
      </>
    );
}

export default RestaurentCategoryList;