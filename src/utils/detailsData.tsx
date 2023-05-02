export const restaurantDetails = {
  title: "Embers Restaurant",
  category: "Breakfast",
  rating: 4,
  ratingCount: 11,
  openingTime: "11.00 AM",
  closingTime: "8.00 PM",
  distance: "1.8 mile",
  address: "1122 CA-41, Fish Camp, CA, Australia, Opera house, 55411",
  categoryItem: ["Snack", "Continental", "Tandori"],
  image:
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
};

export const specialList = [
  { id: 1, name: "Snack" },
  { id: 2, name: "Breakfast" },
  { id: 3, name: "Recommended" },
  { id: 4, name: "Exclusive" },
  { id: 5, name: "Cafe" },
  { id: 6, name: "Chinese" },
];

export const specialFoodItems = [
  {
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ytkpjvllqsew1wtaezsu",
    foodName: "Chicken Cheese Burger",
    foodCategory: "Non Veg",
    power: "500 Cal",
    price: 30.0,  
  },
  {
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ezlyspar4r6gsoov6q6q",
    foodName: "Loaf Omlette",
    foodCategory: "Veg",
    power: "200 Cal",
    price: 20.0,
  },
  {
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lh2lyuhcvapx0jb7zjcp",
    foodName: "Cottage Cheese with Basil Noodles",
    foodCategory: "Non Alergic",
    power: "150 Cal",
    price: 25.0,
  },
  {
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cdzju71tjrbyg5d8ifel",
    foodName: "Chicken Sauce Burger",
    foodCategory: "Non Veg",
    power: "450 Cal",
    price: 45.0,
  },
];

// color code is comparing between value of enum foodCategoryType
export const foodCategoryColor = ["#FF1111", "#43B61A", "#5BC2B6", "#FF1111", '#975a16', "#FAC214", "#43B61A"];

export const itemDetails = {
  description:
    "A sandwich consisting of a patty made from ground chicken, served in a bun, typically hot and often with other ingredients.",
  extraItems: [
    {
      item: "Double Quarter Pounder with Cheese Meal [Large]",
      unitPrice: 5,
      quantity: 1,
    },
    {
      item: "Single Quarter Pounder with Cheese Meal [Large]",
      unitPrice: 5,
      quantity: 3,
    },
    {
      item: "Sizzle",
      unitPrice: 2,
      quantity: 2,
    },
    {
      item: "Side",
      unitPrice: 3,
      quantity: 4,
    },
  ],
};

