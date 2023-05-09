export const cartList = [
  {
    title: "Embers Restaurant",
    address: "1122 CA-41, Fish Camp, CA, Australia, Opera house, 55411",
    generalNote: "Please make it less spicy and give me 2 napkins extra.",
    items: [
      {
        id: "chicken001",
        foodName: "Chicken Cheese Burger",
        foodPrice: 30,
        foodQuantity: 2,
        notes:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        extraItems: [
          {
            id: 1,
            item: "Double Quarter Pounder with Cheese Meal [Large]",
            unitPrice: 5,
            quantity: 1,
          },
          {
            item: "Single Quarter Pounder with Cheese Meal [Large]",
            unitPrice: 5,
            quantity: 3,
            id: 2,
          },
          {
            item: "Sizzle",
            unitPrice: 2,
            quantity: 2,
            id: 3,
          },
          {
            item: "Side",
            unitPrice: 3,
            quantity: 4,
            id: 4,
          },
        ],
      },
      {
        id: "loaf001",
        foodName: "Loaf Omlette",
        foodPrice: 15,
        foodQuantity: 3,
        notes:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        extraItems: [
          {
            item: "Sizzle",
            unitPrice: 2,
            quantity: 2,
            id: 7,
          },
          {
            item: "Side",
            unitPrice: 3,
            quantity: 4,
            id: 8,
          },
        ],
      },
    ],
  },

  // {
  //   title: "Savory Falvors",
  //   address: "1122 CA-41, Fish Camp, CA, Australia, Opera house, 55411",
  //   generalNote: "Please make it less spicy and give me 2 napkins extra.",
  //   items: [
  //     {
  //       id: "chicken002",
  //       foodName: "Chicken Cheese Burger",
  //       foodPrice: 30,
  //       foodQuantity: 2,
  //       notes:
  //         "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  //       extraItems: [
  //         {
  //           id: 1,
  //           item: "Double Quarter Pounder with Cheese Meal [Large]",
  //           unitPrice: 5,
  //           quantity: 1,
  //         },
  //         {
  //           item: "Single Quarter Pounder with Cheese Meal [Large]",
  //           unitPrice: 5,
  //           quantity: 3,
  //           id: 2,
  //         },
  //         {
  //           item: "Sizzle",
  //           unitPrice: 2,
  //           quantity: 2,
  //           id: 3,
  //         },
  //         {
  //           item: "Side",
  //           unitPrice: 3,
  //           quantity: 4,
  //           id: 4,
  //         },
  //       ],
  //     },
  //     {
  //       id: "loaf002",
  //       foodName: "Loaf Omlette",
  //       foodPrice: 15,
  //       foodQuantity: 3,
  //       extraItems: [
  //         {
  //           item: "Sizzle",
  //           unitPrice: 2,
  //           quantity: 2,
  //           id: 7,
  //         },
  //         {
  //           item: "Side",
  //           unitPrice: 3,
  //           quantity: 4,
  //           id: 8,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export const cartPriceDetails = {
  foodAmount: 100,
  restaurentAmount: 15,
  couponApplied: 2,
  otherDiscount: 3,
  totalPrice: 110
}
