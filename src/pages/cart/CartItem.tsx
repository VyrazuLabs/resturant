import { Box, Table, Text, Accordion, rem } from "@mantine/core";
import React from 'react'
import AddRemoveQuantity from '../../components/AddRemoveQuantity';
import { US_Currency } from '../../config/Helper';
import { useCartStyle } from "./style";

const CartItem = ({ selectedItem }: any) => {

    console.log(selectedItem);
    const { classes } = useCartStyle();

    const updatedQuantity = (value: number) => {
       console.log("tt", value);
    };

    const updatedExtraQuantity = (value: number) => {
        console.log("new", value);
    };
    
    const rows =
      selectedItem.length &&
      selectedItem.map((element: any, id: number) => (
        <>
          <tr>
            <td align="left">{element.foodName}</td>
            <td align="left">{US_Currency(element.foodPrice)}</td>
            <td align="left">
              <AddRemoveQuantity
                quantity={element.foodQuantity}
                newQuantity={updatedQuantity}
              />
            </td>
          </tr>
          {/* <Text size="12px" color="red" align="left">Add Ons</Text> */}
          <tr>
            <td colSpan={3}>
              <Accordion variant="filled" classNames={classes}>
                <Accordion.Item value="customization">
                  <Accordion.Control fz="12px" p={0}>
                    Add Ons
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Table fontSize={"11px"} verticalSpacing="sm">
                      <tbody>
                        {element.extraItems.length &&
                          element.extraItems.map((data: any, id: number) => (
                            <tr>
                              <td align="left">{data.item}</td>
                              <td width={65} align="left">
                                {US_Currency(data.unitPrice)}
                              </td>
                              <td align="left">
                                <AddRemoveQuantity
                                  quantity={data.quantity}
                                  newQuantity={updatedExtraQuantity}
                                />
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </td>
          </tr>
        </>
      ));

  return (
    <>
      <Box pt="20px">
        <Text size="12px" color="red" align="left">
          Main Item
        </Text>
        <Table fontSize={"11px"} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Unit Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Box>
    </>
  );
};

export default CartItem