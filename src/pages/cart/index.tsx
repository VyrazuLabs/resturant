import { Container, Grid, Group, Text, Title, Image, useMantineTheme, LoadingOverlay, Divider, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { cartList } from '../../utils/cartData';
import locationIcon from '../../assets/logos/location-icon.svg';
import { useCartStyle } from './style';
import CartItem from './CartItem';
import { customLoader } from '../../components/CustomLoader';
import noteIcon from "../../assets/logos/noteIcon.svg";
import deleteIcon from "../../assets/logos/deleteIcon.svg";
import editAction from "../../assets/logos/editActionIcon.svg";
import BillDetails from './BillDetails';

const CartList = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const { classes } = useCartStyle();
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
      // console.log(cartList);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }, []);
  
    return (
      <>
        <LoadingOverlay loader={customLoader} visible={showLoader} />
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
                  <Title
                    size="20px"
                    fw={350}
                    pt="15px"
                    align="left"
                    color="red"
                  >
                    {data.title}
                  </Title>
                  <Group
                    position="left"
                    pt="10px"
                    className={classes.addressStyle}
                  >
                    <Image width="auto" height="auto" src={locationIcon} />
                    <Text variant="outline" lineClamp={2} color="black">
                      {data.address}
                    </Text>
                  </Group>

                  <CartItem selectedItem={data.items} />
                </div>
                <Divider p={0} size="xs" />
                <Group position="apart">
                  <Image src={noteIcon} width={"auto"} height={"auto"} />
                  <Group position="left" w={"55%"}>
                    <Text align="left" lineClamp={2} fz="11px">
                      <span style={{ fontWeight: "500" }}>General Notes: </span>
                      {data.generalNote}
                    </Text>
                  </Group>
                  <Group spacing={2} position="right">
                    <ActionIcon>
                      <Image src={editAction} width={"auto"} height={"auto"} />
                    </ActionIcon>{" "}
                    <Divider size='sm' orientation="vertical" />
                    <ActionIcon>
                      <Image src={deleteIcon} width={"auto"} height={"auto"} />
                    </ActionIcon>
                  </Group>
                </Group>
                <Divider p={0} size="xs" />
              </>
            ))}
          <BillDetails />
        </Container>
      </>
    );
}

export default CartList;