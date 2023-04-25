import { Paper, Text } from '@mantine/core';
import React from 'react'
import { useStyles } from '../utils/styles/GlobalStyle';


interface CardProps {
    image: string;
    category: string;
}

export const SliderCard = ({ image, category }: CardProps) => {
  const { classes } = useStyles()

    return (
      <>
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          sx={{ backgroundImage: `url(${image})` }}
          className={classes.card}
        >
        </Paper>
        <Text>{category}</Text>
      </>
    );
};
