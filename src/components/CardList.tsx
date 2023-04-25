import { Card, createStyles, Grid, Image, Text, Title, Group, Button, Rating } from '@mantine/core';
import React from 'react'
import scanIcon from "../assets/logos/scan.svg";
import locationIcon from "../assets/logos/location-icon.svg";
import { wrap } from 'module';

interface ResturentProps {
  image: string;
  category: string;
  title: string;
  rating: number;
  ratingCount: number;
  openingTime: string;
  closingTime: string;
  distance: string;
  address: string;
  categoryItem: Array<TemplateStringsArray>;
}
const useStyle = createStyles(() => ({
    list_item: {
        margin: 0,
        padding: 0,
        display: 'flex',
        listStyle: 'none',
        flexWrap: 'wrap',
        li: {
            padding: '2px 5px 0px 0px',
            fontSize: 11,
            margin: 1
        },
        title: {
            fontSize: 11,
        }
    },
    textStyle: {
        fontSize: 11
    },
    addressStyle: {
        gap: 4,
        fontSize: 11
    },

}))


const CardList = ({ image, category, title, rating, ratingCount, openingTime, closingTime, distance, address, categoryItem }: ResturentProps) => {
    const { classes } = useStyle();
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" key={title} withBorder>
        <Card.Section>
          <Grid>
            <Grid.Col span={4}>
              <Image src={image} height={120} width={120} alt="Norway" />
            </Grid.Col>
            <Grid.Col span={8} pl='xs'>
              <Title order={5} align='left'>{title}</Title>
              <Group position="left" className={classes.textStyle}>
                <Rating size={'xs'} value={rating} fractions={2} readOnly />
                <Text fw={'bold'}>({ratingCount})</Text>
              </Group>
              <Group className={classes.textStyle} position="left">
                <>
                  <Text variant="outline">We're open :</Text>
                  <Text variant="outline">
                    {openingTime} - {closingTime}
                  </Text>
                </>
              </Group>
              <ul className={classes.list_item}>
                <Text component="li" fz="sm" color="dimmed">
                  {category}
                </Text>
                {categoryItem.length &&
                  categoryItem.map((data: any) => (
                    <Text component="li" key={data} fz="sm" color="dimmed">
                      {data}
                    </Text>
                  ))}
              </ul>
              <Group className={classes.addressStyle} position="left">
                  <Image width="auto" height="auto" src={locationIcon} />
                  <Text variant="outline">{distance}</Text> |
                  <Text variant="outline">{address}</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </>
  );
};

export default CardList;