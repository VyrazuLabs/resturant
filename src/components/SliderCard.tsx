import { Paper, Text } from '@mantine/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { routesName } from '../config/RoutesName';
import { useStyles } from '../utils/styles/GlobalStyle';


interface CardProps {
    image: string;
    category: string;
}

export const SliderCard = ({ image, category }: CardProps) => {
  const { classes } = useStyles()

    return (
      <>
        <NavLink
          to={`${routesName.Category}/${category.replace(/\s+/g, "")}`}
          style={{ textDecoration: "none" }}
        >
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
          ></Paper>
          <Text fw={500} fz="xs" color="black">
            {category}
          </Text>
        </NavLink>
      </>
    );
};
