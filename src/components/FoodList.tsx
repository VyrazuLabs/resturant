import { Box, Card, Flex, Group, Image, Title, Text, createStyles, Badge, Grid } from '@mantine/core';
import React from 'react'


interface FoodProps {
  image: string;
  foodCategory: string;
  foodName: string;
  power: string;
  price: number|string
}

const useStyle = createStyles((theme) => ({
    cardStyle: {
        background: theme.colors.white,
        padding: 10
    }
}))

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
                    ${price}
                  </Text>
                </Flex>
                <Group position="apart" pt="7px">
                  <Group>
                    <Text fz="11px" color="dimmed">
                      {foodCategory}
                    </Text>
                    <Text fz="11px" color="dimmed">
                      {power}
                    </Text>
                  </Group>
                  <Badge size="sm" variant="outline" color="red">
                    <Text transform="capitalize" fz="11px">
                      Details
                    </Text>
                  </Badge>
                </Group>
              </Flex>
            </Flex>
          </Card.Section>
        </Card>
      </>
    );
};

export default FoodList