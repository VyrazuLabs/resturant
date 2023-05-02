import { createStyles, Badge } from '@mantine/core';
import React, { useState } from 'react'
import { foodCategoryColor } from '../utils/detailsData';
import { foodCategoryType } from "../utils/Types/enumType";


const useStyle = createStyles((theme) => ({
  circle: {
    borderRadius: "50%",
    width: "7px",
    height: "7px",
    padding: 0
  },
}));

interface FoodCategoryProps {
  foodCategory: string;
}

const IndicatorIcon = ({ foodCategory }: FoodCategoryProps) => {
    const { classes } = useStyle();
    const [categoryType, setCategoryType] = useState(Object.keys(foodCategoryType).filter((v) => isNaN(Number(v))));
    // const [categoryType, setCategoryType] = useState(Object.values(foodCategoryType));
    
    return (
      <>
        {categoryType.length &&
          categoryType.map((item, id) => (
              <>
                {item === foodCategory && (
                  <Badge
                    key={id}
                    className={classes.circle}
                    bg={foodCategoryColor[id]}
                  ></Badge>
                )}
              </>
          ))}
      </>
    );
};

export default IndicatorIcon;