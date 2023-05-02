import { Table } from '@mantine/core';
import React from 'react';
import { US_Currency } from '../config/Helper';
import { leftSideStyle } from '../utils/styles/GlobalStyle';
import AddRemoveQuantity from './AddRemoveQuantity';


interface ItemProps {
  item: string;
  quantity: number;
  unitPrice: number;
}

const ExtraItemList = (extraItems: any) => {
    const { classes: leftsideClasses } = leftSideStyle();

    const updatedQuantity = (value: number) => {
    //   console.log("pp", value);
    };

  const rows = extraItems.extraItems?.map((element: any, id: number) => (
    <tr key={id}>
      <td align='left' >{element.item}</td>
      <td align='left'>{US_Currency(element.unitPrice)}</td>
      <td align='left'><AddRemoveQuantity quantity={element.quantity} newQuantity={updatedQuantity} /></td>
    </tr>
  ));

  return (
    <>
      <Table fontSize={"11px"} verticalSpacing='sm'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Unit Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default ExtraItemList