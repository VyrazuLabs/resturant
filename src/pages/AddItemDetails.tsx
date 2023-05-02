import { Card, Container, createStyles, Group, Rating, Title, Text, Image, Grid, useMantineTheme, Divider, Input, Box, Button } from '@mantine/core';
import React, { useState } from 'react'
import { itemDetails, restaurantDetails, specialFoodItems } from '../utils/detailsData';
import { leftSideStyle } from '../utils/styles/GlobalStyle';
import direction from "../assets/logos/direction-icon.svg";
import locationIcon from "../assets/logos/location-icon.svg";
import { useMediaQuery } from '@mantine/hooks';
import FoodList from '../components/FoodList';
import ExtraItemList from '../components/ExtraItemList';
import AddRemoveQuantity from '../components/AddRemoveQuantity';
import { US_Currency } from '../config/Helper';


const useStyle = createStyles((theme) => ({
  cardStyle: {
    background: "rgba(255, 255, 255, 0.74)",
    backdropFilter: "blur(9px)",
    borderRadius: theme.defaultRadius,
  },
  addressStyle: {
    gap: 4,
    fontSize: 11,
  },
  requestInput: {
    background: "#FFFFFF",
    borderRadius: "10px",
    input: {
      border: "1px solid #7E7E7E",
      fontSize: '12px',
    },
    'input:: placeholder': {
      fontSize: '12px'
    }
  },
}));

const AddItemDetails = () => {

  const { classes } = useStyle();
  const { classes: leftsideClasses } = leftSideStyle();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [chefInput, setChefInput] = useState('');

  const requestInput = (value: any) => {
    setChefInput(value);
  };

  const updatedItemQuantity = (value: any) => {
    console.log('item', value);
    
  }
  return (
    <>
      <Container className={leftsideClasses.sideBar} pos="relative" fluid>
        <Card padding="lg" className={classes.cardStyle}>
          <Card.Section p={10}>
            <Title order={3} fs="20px" align="left" color="red">
              {restaurantDetails.title}
            </Title>

            <Group position="apart" className={leftsideClasses.textStyle}>
              <Group position="left">
                <Rating
                  size={"xs"}
                  value={restaurantDetails.rating}
                  fractions={2}
                  readOnly
                />
                <Text fw={"bold"}>({restaurantDetails.ratingCount})</Text>
              </Group>

              <Group position="right">
                <Image width="auto" height="auto" src={direction} />
              </Group>
            </Group>

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

        <Grid m={0}>
          <Grid.Col span={2}>
            <Text fz="16px" fw={500} color="#FFFFFF">
              SNACK ITEMS
            </Text>
          </Grid.Col>
        </Grid>

        <FoodList {...specialFoodItems[0]} />
      </Container>

      <Divider p={0} size="xs" />
      <Container>
        <Title align="left" size={"12px"} weight={500} pt="5px">
          Item Description
        </Title>
        <Text fz="11px" fw={325} align="left" lineClamp={2} p="5px 0 5px 0">
          {itemDetails.description}
        </Text>
      </Container>
      <Divider p={0} size="xs" />
      {/* {itemDetails?.extraItems?.length &&
        itemDetails?.extraItems.map((item, id) => (
          <ExtraItemList key={id} {...item} />
        ))} */}
      <ExtraItemList extraItems={itemDetails?.extraItems} />

      <Divider p={0} size="xs" />
      <Container>
        <Title align="left" size={"11px"} weight={325} pt="5px" color="red">
          Request to Chef
        </Title>
        <Box pt="5px" pb="5px">
          <Input
            color="#7E7E7E"
            placeholder="Type in ..."
            className={classes.requestInput}
            size="xl"
            radius={10}
            onChange={(e) => {
              requestInput(e.target.value);
            }}
          />
        </Box>
      </Container>
      <Divider p={0} size="xs" />

      <Container pt='10px'>
        <Group position="apart">
          <Group position='left'>
            <AddRemoveQuantity quantity={1} newQuantity={updatedItemQuantity} />
          </Group>
          <Button variant="filled" color="red" radius="11px">
            Add {US_Currency(42)}
          </Button>
        </Group>
      </Container>
    </>
  );
}

export default AddItemDetails;