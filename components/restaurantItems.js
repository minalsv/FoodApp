// restaurant items with their names
// restaurantItems.js
// restaurantItems.js
export const restaurantItems = [
  {
    title: "Joe's Gelato",
    categories: [
      {
        category: "Desserts", // Gelato is a dessert
        items: [
          { title: "Vanilla Gelato", price: "€5" },
          { title: "Chocolate Gelato", price: "€5" },
          { title: "Strawberry Gelato", price: "€5" },
          { title: "Pistachio Gelato", price: "€6" }
        ]
      }
    ]
  },
  {
    title: "Burger Haven",
    categories: [
      {
        category: "Burgers",
        items: [
          { title: "Classic Cheeseburger", price: "€8" },
          { title: "Double Bacon Burger", price: "€10" }
        ]
      },
      {
        category: "Fries",
        items: [
          { title: "French Fries", price: "€3" },
          { title: "Sweet Potato Fries", price: "€4" }
        ]
      }
    ]
  },
  {
    title: "Pasta Paradise",
    categories: [
      {
        category: "Pizzas",
        items: [
          { title: "Margherita", price: "€10" },
          { title: "Pepperoni", price: "€12" }
        ]
      },
      {
        category: "Main Course",
        items: [
          { title: "Hawaiian", price: "€11" }
        ]
      },
      {
        category: "Pasta",
        items: [
          { title: "Spaghetti Carbonara", price: "€12" },
          { title: "Penne Arrabbiata", price: "€10" },
          { title: "Lasagna", price: "€14" },
          { title: "Fettuccine Alfredo", price: "€13" }
        ]
      }
    ]
  }
];

