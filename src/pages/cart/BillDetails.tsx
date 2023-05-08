import { Title, Text, Box, Input, Divider, Group, Button } from '@mantine/core';
import React, { useState } from 'react'
import { US_Currency } from '../../config/Helper';
import { cartPriceDetails } from '../../utils/cartData';
import { useCartStyle } from './style';


const BillDetails = () => {
    const { classes } = useCartStyle();
    const [couponCode, setCouponCode] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    const couponInput = (value: any) => {
    setCouponCode(value);
    };
    
    const submitPayment = () => {
      console.log("submit");
      setButtonLoading(true);
      setTimeout(() => {
        setButtonLoading(false);
      }, 2000);
    };

    return (
      <>
        <Title align="left" size={"12px"} weight={500} pt="10px" color="red">
          Coupon Code
        </Title>
        <Text size="11px" color="red" align="left" p={"5px 0 2px 0"}>
          Do you have any coupon code?
        </Text>
        <Box pt="5px" pb="10px">
          <Input
            color="#7E7E7E"
            placeholder="Type in ..."
            className={classes.couponInput}
            size="xl"
            radius={10}
            value={couponCode}
            onChange={(e) => {
              couponInput(e.target.value);
            }}
          />
        </Box>
        <Divider p={0} size="xs" />

        <Title align="left" size={"12px"} weight={500} pt="10px" color="red">
          Bill Details
        </Title>
        <Group position="apart">
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            Food Items
          </Text>
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            {US_Currency(cartPriceDetails.foodAmount)}
          </Text>
        </Group>
        <Group position="apart">
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            Restaurent Amount
          </Text>
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            {US_Currency(cartPriceDetails.restaurentAmount)}
          </Text>
        </Group>
        <Group position="apart">
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            Coupon Apply
          </Text>
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            {" "}
            -{US_Currency(cartPriceDetails.couponApplied)}
          </Text>
        </Group>
        <Group position="apart" pb={'20px'}>
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            Other Discount
          </Text>
          <Text size="11px" p={"5px 0 2px 0"} fw={400}>
            {" "}
            -{US_Currency(cartPriceDetails.otherDiscount)}
          </Text>
        </Group>
        <Group position="center" pb={"10px"}>
          <Button variant="filled" color="red" radius="11px" onClick={submitPayment} loading={buttonLoading}>
            Checkout {US_Currency(cartPriceDetails.totalPrice)}
          </Button>
        </Group>
      </>
    );
}

export default BillDetails