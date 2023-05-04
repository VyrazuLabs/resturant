import {  Box, Center, Container, Text, Card, Image, createStyles, Title, Group, Rating, useMantineTheme, Grid, ActionIcon, ScrollArea, Badge, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react'
import { restaurantDetails, specialFoodItems, specialList } from '../../utils/detailsData';
import { leftSideStyle } from '../../utils/styles/GlobalStyle';
import locationIcon from "../../assets/logos/location-icon.svg";
import direction from "../../assets/logos/direction-icon.svg";
import searchIcon from "../../assets/logos/search-icon.svg";
import FoodList from '../../components/FoodList';
import foodDetails from "../../assets/images/DetailsImage.svg";
import IndicatorIcon from '../../components/IndicatorIcon';
import { useDetailsStyle } from './style';
import CardDetails from '../../components/CardDetails';

const RestaurentItems = () => {
  const { classes } = useDetailsStyle();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [active, setActive] = useState(null);
    
    return (
      <>
        <Container fluid p={0} pos="relative">
          <Box mx="auto" pos="relative">
            {/* <Image src={restaurantDetails.image} /> */}
            <Image height={mobile ? 180 : 280} src={foodDetails} />

            <CardDetails {...restaurantDetails} />
          </Box>
        </Container>
        <Container>
          <Grid mt={100}>
            <Grid.Col span={2}>
              <ActionIcon>
                <Image width="auto" height="auto" src={searchIcon} />
              </ActionIcon>
            </Grid.Col>
            <Grid.Col span={10}>
              <ScrollArea w={"100%"} h={50} type="never">
                <Group position="left" noWrap={true}>
                  {specialList.length &&
                    specialList.map((item: any, id: number) => (
                      <>
                        <Text
                          onClick={() => setActive(item)}
                          className={
                            active === item ? `${classes.underline}` : ""
                          }
                          key={id}
                          color="red"
                          fz="12px"
                          fw={500}
                        >
                          {item.name}
                        </Text>
                      </>
                    ))}
                </Group>
              </ScrollArea>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={2}>
                        <Text fz="15px" pb="15px" fw={500} color={mobile? "#FFFFFF": 'red'}>
                SNACK ITEMS
              </Text>
            </Grid.Col>
          </Grid>

          <Grid>
            {specialFoodItems?.length &&
              specialFoodItems.map((item: any, id: number) => (
                <Grid.Col md={6}>
                  <FoodList key={id} {...item} />
                </Grid.Col>
              ))}
          </Grid>
        </Container>
      </>
    );
}

export default RestaurentItems