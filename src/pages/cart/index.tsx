import { Container, Grid, Group, Text, Title, Image, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect } from 'react';
import { cartList } from '../../utils/cartData';
import locationIcon from '../../assets/logos/location-icon.svg';
import { useCartStyle } from './style';
import CartItem from './CartItem';


const CartList = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const { classes } = useCartStyle();

    useEffect(() => {
        console.log(cartList);        
    }, [])

    return (
      <>
        <Container>
          <Grid>
            <Grid.Col span={2}>
              <Text fz="16px" fw={500} color="#FFFFFF">
                CART
              </Text>
            </Grid.Col>
          </Grid>
          {cartList.length &&
            cartList.map((data: any, id: number) => (
            <>
                <div key={id}>
                <Title size="20px" fw={350} pt='15px' align="left" color="red">
                  {data.title}
                </Title>
                <Group position="left" pt='10px' className={classes.addressStyle}>
                  <Image width="auto" height="auto" src={locationIcon} />
                    <Text variant="outline" lineClamp={2} color='black'>
                    {data.address}
                  </Text>
                </Group>
                        
                <CartItem selectedItem={data.items}  />
                </div>                    

              </>
            ))}
        </Container>
      </>
    );
}

export default CartList;