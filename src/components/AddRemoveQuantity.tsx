import { Container, createStyles, Group, Image, Text } from '@mantine/core';
import React, { useState } from 'react'
import addIcon from '../assets/logos/add.svg';
import removeIcon from '../assets/logos/remove.svg';

interface ItemProps {
  quantity: number;
  newQuantity: Function;
}

const useStyle = createStyles((theme) => ({
    groupStyle: {
        flexWrap: 'nowrap',
    },
    imageStyle: {
        cursor: 'pointer'
    }
}));

const AddRemoveQuantity = ({quantity, newQuantity}: ItemProps) => {
    const { classes } = useStyle();
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const removeQuantity = () => {
        if (itemQuantity > 0) {
            setItemQuantity(itemQuantity - 1);
            newQuantity(itemQuantity - 1);
        }
        
    };   
    const addQuantity = () => {
        if (itemQuantity < 10) {
            setItemQuantity(itemQuantity + 1);
            newQuantity(itemQuantity + 1);
        }
    }; 
  return (
    <>
      {/* <Container p={0}> */}
          <Group position="right" className={classes.groupStyle}>
            <Image onClick={removeQuantity} className={classes.imageStyle} width="auto" height="auto" src={removeIcon} />
            <Text>{ itemQuantity }</Text>
            <Image onClick={addQuantity} className={classes.imageStyle} width="auto" height="auto" src={addIcon} />
          </Group>
      {/* </Container> */}
    </>
  );
}

export default AddRemoveQuantity