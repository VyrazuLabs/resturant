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


const ResturentDetails = () => {
  const { classes } = useDetailsStyle();
  // const { classes: leftsideClasses } = leftSideStyle();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [active, setActive] = useState(null);

  return (
    <>
      <Container fluid p={0} pos="relative">
        {/* className={classes.sideBar} */}
        <Box mx="auto" pos="relative">
          {/* <Image src={restaurantDetails.image} /> */}
          <Image src={foodDetails} />
          <Card padding="lg" className={classes.cardStyle}>
            <Card.Section p={10}>
              <Title order={3} fs="20px" align="left" color="red">
                {restaurantDetails.title}
              </Title>
              <Group position="left" className={classes.textStyle}>
                <Rating
                  size={"xs"}
                  value={restaurantDetails.rating}
                  fractions={2}
                  readOnly
                />
                <Text fw={"bold"}>({restaurantDetails.ratingCount})</Text>
              </Group>

              <Group className={classes.textStyle} position="apart">
                <>
                  <Group position="left">
                    <Text variant="outline">We're open :</Text>
                    <Text variant="outline" color="#2A72DF">
                      {restaurantDetails.openingTime} -{" "}
                      {restaurantDetails.closingTime}
                    </Text>
                  </Group>
                  <Group position="right">
                    <Image width="auto" height="auto" src={direction} />
                  </Group>
                </>
              </Group>
              <ul className={classes.list_item}>
                <Text component="li" fz="sm" color="dimmed">
                  {restaurantDetails.category}
                </Text>
                {restaurantDetails?.categoryItem.length &&
                  restaurantDetails?.categoryItem.map((data: any, id) => (
                    <>
                      <IndicatorIcon key={id} foodCategory="CategoryList" />
                      <Text component="li" key={data} fz="sm" color="dimmed">
                        {data}
                      </Text>
                    </>
                  ))}
              </ul>
              <Group className={classes.addressStyle} position="left">
                <Image width="auto" height="auto" src={locationIcon} />
                <Text variant="outline">{restaurantDetails.distance}</Text> |
                <Text variant="outline" lineClamp={1}>
                  {/* {restaurantDetails?.address} */}
                  {mobile
                    ? restaurantDetails?.address.substring(0, 40).concat("...")
                    : restaurantDetails?.address.substring(0, 80).concat("...")}
                </Text>
              </Group>
            </Card.Section>
          </Card>
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
                  specialList.map((item: any, id) => (
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
              {/* <div className={classes.underline}></div> */}
            </ScrollArea>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={2}>
            <Text fz="15px" pb="15px" fw={500} color="#FFFFFF">
              SNACK ITEMS
            </Text>
          </Grid.Col>
        </Grid>
        {specialFoodItems?.length &&
          specialFoodItems.map((item) => (
            <FoodList key={item.foodName} {...item} />
          ))}
      </Container>
    </>
  );
}

export default ResturentDetails;
