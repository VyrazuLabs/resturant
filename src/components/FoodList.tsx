import { Box, Card, Flex, Group, Image, Title, Text, createStyles, Badge, Grid } from '@mantine/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { US_Currency } from '../config/Helper';
import IndicatorIcon from './IndicatorIcon';

interface FoodProps {
  image: string;
  foodCategory: string;
  foodName: string;
  power: string;
  price: number
}

const useStyle = createStyles((theme) => ({
  cardStyle: {
    background: theme.colors.white,
    padding: 10,
  },
  categoryStyle: {
    position: 'relative',
    right: '7px'
  },
  badgeStyle: {
    textTransform: 'capitalize'
  }

}));

const FoodList = ({ image, foodName, foodCategory, power, price }: FoodProps) => {
    const { classes } = useStyle();

    return (
      <>
        <Card
          shadow="md"
          radius="20px"
          mb="sm"
          withBorder
          key={foodName}
          className={classes.cardStyle}
        >
          <Card.Section p="0">
            <Flex p="sm">
              <Box mr="xs">
                <Image height={60} width={60} src={image} radius={12} />
              </Box>
              <Flex direction="column" w="100%">
                <Flex justify="space-between" align="center">
                  <Title order={5} fz="12px" align="left" lineClamp={2}>
                    {foodName}
                  </Title>
                  <Text fz="20px" fw="350px" color="red" ml="xs">
                    {/* ${price.toFixed(2)} */}
                    {US_Currency(price)}
                  </Text>
                </Flex>
                <Group position="apart" pt="7px">
                  <Group>
                    <IndicatorIcon foodCategory={foodCategory} />
                    <Text
                      className={classes.categoryStyle}
                      fz="11px"
                      color="dimmed"
                    >
                      {foodCategory}
                    </Text>
                    <IndicatorIcon foodCategory="Calory" />
                    <Text
                      className={classes.categoryStyle}
                      fz="11px"
                      color="dimmed"
                    >
                      {power}
                    </Text>
                  </Group>
                  <NavLink
                    to={`/items/${foodName.replace(/\s+/g, "")}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Badge
                      size="8px"
                      className={classes.badgeStyle}
                      fz="11px"
                      variant="outline"
                      color="red"
                    >
                      Details
                    </Badge>
                  </NavLink>
                </Group>
              </Flex>
            </Flex>
          </Card.Section>
        </Card>
      </>
    );
};

export default FoodList