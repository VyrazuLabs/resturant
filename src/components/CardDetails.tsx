import { Container, Text, Card, Image, Rating, useMantineTheme, Title, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import { useDetailsStyle } from '../pages/category/style';
import locationIcon from "../assets/logos/location-icon.svg";
import direction from "../assets/logos/direction-icon.svg";
import IndicatorIcon from "../components/IndicatorIcon";


const CardDetails = (restaurantDetails: any) => {
  const { classes } = useDetailsStyle();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
        

  return (
    <>
      <Container p={0}>
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
              {restaurantDetails?.categoryItem?.length &&
                restaurantDetails?.categoryItem.map((data: any, id: number) => (
                  <>
                    <IndicatorIcon key={id} foodCategory="CategoryList" />
                    <Text component="li" key={id} fz="sm" color="dimmed">
                      {data}
                    </Text>
                  </>
                ))}
            </ul>
            <Group className={classes.addressStyle} position="left">
              <Image width="auto" height="auto" src={locationIcon} />
              <Text variant="outline">{restaurantDetails.distance}</Text> |
              <Text variant="outline" lineClamp={1}>
                {mobile
                  ? restaurantDetails?.address.substring(0, 40).concat("...")
                  : restaurantDetails?.address.substring(0, 80).concat("...")}
              </Text>
            </Group>
          </Card.Section>
        </Card>
      </Container>
    </>
  );
};

export default CardDetails;