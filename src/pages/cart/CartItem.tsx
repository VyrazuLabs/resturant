import { Box, Table, Text, Accordion, Image, Divider, Group, ActionIcon } from "@mantine/core";
import React from 'react'
import AddRemoveQuantity from '../../components/AddRemoveQuantity';
import { US_Currency } from '../../config/Helper';
import { useCartStyle } from "./style";
import noteIcon from "../../assets/logos/noteIcon.svg";
import deleteIcon from "../../assets/logos/deleteIcon.svg";
import editAction from "../../assets/logos/editActionIcon.svg";

const CartItem = ({ selectedItem }: any) => {

    // console.log(selectedItem);
    const { classes } = useCartStyle();

    const updatedQuantity = (value: number) => {
      //  console.log("tt", value);
    };

    const updatedExtraQuantity = (value: number) => {
        // console.log("new", value);
    };
    
    const rows =
      selectedItem.length &&
      selectedItem.map((element: any, id: number) => (
        <>
          <tr key={id}>
            <td align="left">{element.foodName}</td>
            <td align="left">{US_Currency(element.foodPrice)}</td>
            <td align="left">
              <AddRemoveQuantity
                quantity={element.foodQuantity}
                newQuantity={updatedQuantity}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={3} style={{'paddingLeft': '0', paddingBottom: '0', paddingTop: '0'}}>
              <Accordion variant="filled" classNames={classes}>
                <Accordion.Item value="customization">
                  <Accordion.Control p={0}>
                    <Text size="12px" color="red">
                      Add Ons
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Table fontSize={"11px"} verticalSpacing="sm">
                      <tbody>
                        {element.extraItems.length &&
                          element.extraItems.map((data: any, id: number) => (
                            <tr key={data.id}>
                              <td width={"70%"} align="left">
                                {data.item}
                              </td>
                              <td width={"65%"} align="left">
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
                    <Divider p={0} size="xs" />

                    <Table fontSize={"11px"}>
                      <tbody>
                        <tr>
                          <td colSpan={3} style={{ 'paddingLeft': '0'}} align="left">
                            <Image src={noteIcon} width={"auto"} height={"auto"} />
                          </td>
                          <td width={"55%"} align="left">
                            <Text lineClamp={2} fz="11px">
                              {element.notes}
                            </Text>
                          </td>
                          <td width={"25%"}>
                            <Group spacing={2} position="right">
                              <ActionIcon>
                                <Image src={editAction} width={"auto"} height={"auto"} />
                              </ActionIcon>{" "}
                              |
                              <ActionIcon>
                                <Image
                                  src={deleteIcon}
                                  width={"auto"}
                                  height={"auto"}
                                />
                              </ActionIcon>
                            </Group>
                          </td>
                        </tr>
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