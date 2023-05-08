import { Card, Container, Grid, Text, Image, Badge, Group, ScrollArea, createStyles, useMantineTheme, LoadingOverlay } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'
import CardList from '../../components/CardList';
import { customLoader } from '../../components/CustomLoader';
import SearchScan from '../../components/SearchScan';
import TrendingSlider from '../../components/TrendingSlider';
import { resturentData, sliderItem, tagList } from "../../utils/sliderData";
// import { leftSideStyle } from '../../utils/styles/GlobalStyle';



const ResturentList = () => {
//   const { classes } = leftSideStyle();
const theme = useMantineTheme();
const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
const [active, setActive] = useState(null);
const [showLoader, setShowLoader] = useState(false);
  
  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000)
  }, [])

const searchInput = (value: any) => {
  console.log(value);
};

  return (
    <div>
      <LoadingOverlay loader={customLoader} visible={showLoader} />
      <Container>
        <SearchScan searchInput={searchInput} />
        <Grid>
          <Grid.Col span={3}>
            <Text fz="15px" fw={500} color={mobile ? "#FFFFFF" : "red"}>
              TRENDING TODAY
            </Text>
          </Grid.Col>
          <Grid.Col span={9}>
            <TrendingSlider sliderArray={sliderItem} />
          </Grid.Col>
        </Grid>

        <ScrollArea w={"100%"} h={50} pt={10} type="never">
          <Group position="left" noWrap={true}>
            {tagList.length &&
              tagList.map((item: any) => (
                <Badge
                  key={item.id}
                  variant={active === item ? "filled" : "outline"}
                  onClick={() => setActive(item)}
                  color="red"
                >
                  {item.name}
                </Badge>
              ))}
          </Group>
        </ScrollArea>

        <Grid>
          <Grid.Col span={3}>
            <Text fz="15px" pb="15px" fw={500} color="#FFFFFF">
              RESTAURANTS NEARBY
            </Text>
          </Grid.Col>
          {/* <Grid.Col span={9}>
            <TrendingSlider sliderArray={sliderItem} />
          </Grid.Col> */}
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
    </div>
  );
}

export default ResturentList;