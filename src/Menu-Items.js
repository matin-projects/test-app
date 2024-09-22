const menuItems = {
  Coffee: [
    {
      name: "Single Espresso",
      description:
        "A bold, concentrated shot of rich black coffee, perfect for a quick caffeine boost.",
      priceHot: "MYR 7.00",
      image: "/espresso.jpeg",
    },
    {
      name: "Double Espresso",
      description:
        "Twice the intensity with two powerful shots of robust black coffee, delivering a fuller flavor.",
      priceHot: "MYR 9.00",
      image: "/espresso.jpeg",
    },
    {
      name: "Americano",
      description:
        "A smooth blend of espresso diluted with water for a lighter, yet full-bodied coffee experience.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 11.00",
      image: "/americano.jpg",
    },
    {
      name: "Aerocano",
      description:
        "Aeropress-brewed coffee combined with water, offering a cleaner, richer taste.",
      priceIced: "MYR 13.00",
      image: "/aerocano.jpg",
    },
    {
      name: "Caffe Latte",
      description:
        "A classic combination of espresso and creamy steamed milk, balanced for a smooth and comforting coffee.",
      priceHot: "MYR 12.00",
      priceIced: "MYR 13.00",
      image: "/latte.jpg",
    },
    {
      name: "Matcha Latte",
      description:
        "Vibrant matcha mixed with steamed milk for a creamy and energizing drink.",
      priceHot: "MYR 12.00",
      priceIced: "MYR 13.00",
      image: "/matcha-latte.webp",
    },
    {
      name: "Salted Caramel Latte",
      description:
        "Rich espresso with steamed milk, highlighted by a sweet and salty caramel twist.",
      priceHot: "MYR 13.00",
      priceIced: "MYR 14.00",
      image: "/latte.jpg",
    },
    {
      name: "Cream Brulee Latte",
      description:
        "Indulge in espresso with a luscious crème brûlée syrup and steamed milk for a dessert-like coffee.",
      priceHot: "MYR 13.00",
      priceIced: "MYR 14.00",
      image: "/latte.jpg",
    },
    {
      name: "Roasted Hazelnut Latte",
      description:
        "Nutty roasted hazelnut syrup blended with espresso and steamed milk for a smooth, rich flavor.",
      priceHot: "MYR 13.00",
      priceIced: "MYR 14.00",
      image: "/latte.jpg",
    },
    {
      name: "Vanilla Latte",
      description:
        "Espresso infused with velvety vanilla syrup and creamy steamed milk for a subtly sweet coffee.",
      priceHot: "MYR 13.00",
      priceIced: "MYR 14.00",
      image: "/latte.jpg",
    },
    {
      name: "Coconut Latte",
      description:
        "A tropical twist of coconut syrup blended with espresso and steamed milk, offering a unique flavor.",
      priceHot: "MYR 13.00",
      priceIced: "MYR 14.00",
      image: "/latte.jpg",
    },
    {
      name: "Cappuccino",
      description:
        "A classic, airy coffee with a strong espresso base and a layer of velvety steamed milk foam.",
      priceHot: "MYR 12.00",
      image: "/cappuccino.jpg",
    },
    {
      name: "Affogato",
      description:
        "A delightful dessert drink—bold espresso poured over a scoop of creamy vanilla ice cream with our unique Merci twist",
      priceIced: "MYR 13.00",
      image: "/affogato.jpg",
    },
    {
      name: "Mocha",
      description:
        "Espresso meets rich chocolate and steamed milk in this indulgent and comforting coffee blend.",
      priceHot: "MYR 14.00",
      priceIced: "MYR 15.00",
      image: "/mocha.jpg",
    },
    {
      name: "Salted Caramel Macchiato",
      description:
        "Espresso topped with steamed milk foam, tasty cream and a hint of sweet and salty caramel.",
      priceHot: "MYR 14.00",
      priceIced: "MYR 15.00",
      image: "/latte.jpg",
    },
    {
      name: "Saffron Latte",
      description:
        "A luxurious blend of espresso, steamed milk, and the exotic flavor of saffron extract for a unique treat.",
      priceHot: "MYR 16.00",
      priceIced: "MYR 17.00",
      image: "/latte.jpg",
    },
  ],
  Tea: [
    {
      name: "English Breakfast Tea",
      description:
        "A robust and traditional black tea, perfect for a strong start to your day.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
    {
      name: "Jasmine Green Tea",
      description:
        "A delicate and aromatic green tea infused with the subtle fragrance of jasmine flowers.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
    {
      name: "Seasonal Fruit Tea",
      description:
        "A vibrant and refreshing tea infused with the flavors of seasonal fruits.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
    {
      name: "Chamomile Tea",
      description:
        "A soothing herbal tea known for its calming and relaxing properties.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
    {
      name: "Earl Grey Tea",
      description:
        "A bold black tea infused with the distinctive essence of bergamot citrus.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
    {
      name: "Green Tea",
      description:
        "A pure and refreshing tea, rich in antioxidants with a clean, mild flavor.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
    {
      name: "Mint Tea",
      description:
        "A cool and invigorating tea with a refreshing minty flavor, perfect for a light pick-me-up.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
    {
      name: "Milk Tea",
      description:
        "A creamy and indulgent blend of tea and milk for a smooth, rich experience.",
      priceHot: "MYR 10.00",
      priceIced: "MYR 10.00",
    },
  ],
  Milkshakes: [
    {
      name: "Saffron Shake",
      description: "A delicious saffron milkshake.",
      priceIced: "MYR 20.00",
      image: "/saffron-shake.jpg",
    },
    {
      name: "Avocado Shake",
      description: "A delicious avocado milkshake.",
      priceIced: "MYR 20.00",
      image: "/avocado-shake.jpg",
    },
    {
      name: "Biscoff Caramel Shake",
      description: "A delicious biscoff caramel milkshake.",
      priceIced: "MYR 20.00",
      image: "/biscoff-shake.jpg",
    },
    {
      name: "Nutella Shake",
      description: "A delicious Nutella milkshake.",
      priceIced: "MYR 18.00",
      image: "/nutella-shake.jpg",
    },
    {
      name: "Mocha Shake",
      description: "A delicious mocha milkshake.",
      priceIced: "MYR 18.00",
      image: "/mocha-shake.jpg",
    },
    {
      name: "Mango Shake",
      description: "A delicious mango milkshake.",
      priceIced: "MYR 18.00",
      image: "/mango-shake.jpg",
    },
    {
      name: "Strawberry Shake",
      description: "A delicious strawberry milkshake.",
      priceIced: "MYR 17.00",
      image: "/strawberry-shake.jpg",
    },
    {
      name: "Coconut Shake",
      description: "A delicious coconut milkshake.",
      priceIced: "MYR 16.00",
      image: "/coconut-shake.jpg",
    },
    {
      name: "Banana Shake",
      description: "A delicious banana milkshake.",
      priceIced: "MYR 16.00",
      image: "/banana-shake.jpg",
    },
    {
      name: "Matcha Shake",
      description: "A delicious matcha milkshake.",
      priceIced: "MYR 16.00",
      image: "/matcha-shake.jpg",
    },
  ],
  Chocolate: [
    {
      name: "Merci Signature Cocoa",
      description:
        "A rich and indulgent cocoa drink, crafted with premium chocolate for a luxurious treat.",
      priceHot: "MYR 15.00",
      priceIced: "MYR 15.00",
      image: "/chocolate.jpg",
    },
    {
      name: "Roasted Hazelnut Cocoa",
      description:
        "A smooth and velvety cocoa infused with the nutty flavor of roasted hazelnuts.",
      priceHot: "MYR 15.00",
      priceIced: "MYR 15.00",
      image: "/chocolate.jpg",
    },
    {
      name: "Salted Caramel Cocoa",
      description:
        "A decadent cocoa drink with a perfect blend of rich chocolate and sweet, salted caramel.",
      priceHot: "MYR 15.00",
      priceIced: "MYR 15.00",
      image: "/chocolate.jpg",
    },
    {
      name: "Vanilla Cocoa",
      description:
        "A creamy cocoa infused with the subtle sweetness of vanilla for a comforting and delightful experience.",
      priceHot: "MYR 15.00",
      priceIced: "MYR 15.00",
      image: "/chocolate.jpg",
    },
  ],
  Food: [
    {
      name: "Chicken & Mushroom Pie",
      description: "A savory pie with chicken and mushrooms.",
      price: "MYR 18.00",
      image: "/Chicken-mushroom-pie.webp",
    },
    {
      name: "Turkey Spinach Quiche",
      description: "A savory pie with turkey and spinach.",
      price: "MYR 19.00",
      image: "/Spinach-Quiche.webp",
    },
    {
      name: "Beef Lasagna",
      description: "A classic lasagna with beef.",
      price: "MYR 22.00",
      image: "/Lasagna.jpg",
    },
    {
      name: "Beef Bolognese",
      description: "A classic pasta dish with beef.",
      price: "MYR 20.00",
      image: "/Spaghetti-Bolognese.jpg",
    },
    {
      name: "Chicken & Mushroom Carbonara",
      description: "A classic pasta dish with chicken and mushrooms.",
      price: "MYR 20.00",
      image: "/carbonara.jpeg",
    },
  ],
  Pizza: [
    {
      name: "Merci Special Pizza",
      description:
        "A savoury blend of beef salami, beef pepperoni, chicken pepperoni, capsicum, mushroom, house-made tomato and garlic butter sauce, topped with mozzarella, cheddar, and parmesan cheese.",
      price: "MYR 39.00",
      image: "/pizza.png",
    },
    {
      name: "Triple Cheese Pizza",
      description:
        "A rich, cheesy delight with mozzarella, cheddar, and parmesan cheese, enhanced with house-made tomato and garlic butter sauce.",
      price: "MYR 32.00",
      image: "/pizza1.webp",
    },
  ],
  Specials: [
    {
      name: "Mango Matcha Latte",
      description: "Matcha latte with mango.",
      priceIced: "MYR 18.00",
      image: "/mango-matcha-latte.jpg",
    },
    {
      name: "Raspberry Latte",
      description: "Latte with raspberry syrup.",
      priceIced: "MYR 18.00",
      image: "/raspberry-latte.jpg",
    },
    {
      name: "French Ice Cream Latte",
      description: "Latte with French ice cream.",
      priceIced: "MYR 20.00",
      image: "/french-ice-cream-latte.jpg",
    },
    {
      name: "Avocado Milkshake",
      description: "Avocado milkshake with ice cream.",
      priceIced: "MYR 20.00",
      image: "/avocado-milkshake.jpg",
    },
    {
      name: "Mango Milkshake",
      description: "Mango milkshake with ice cream.",
      priceIced: "MYR 18.00",
      image: "/mango-milkshake.jpg",
    },
    {
      name: "Saffron Milkshake",
      description: "Saffron milkshake with ice cream.",
      priceIced: "MYR 20.00",
      image: "/saffron-milkshake.jpg",
    },
    {
      name: "Strawberry Frappuccino",
      description: "Strawberry frappuccino with whipped cream.",
      priceIced: "MYR 18.00",
      image: "/strawberry-frappuccino.jpg",
    },
    {
      name: "Banana Frappuccino",
      description: "Banana frappuccino with whipped cream.",
      priceIced: "MYR 18.00",
      image: "/banana-frappuccino.webp",
    },
    {
      name: "Strawberry Soda",
      description: "A delicious carbonated strawberry drink.",
      priceIced: "MYR 12.00",
      image: "/strawberry-soda.jpg",
    },
  ],
  Waffles: [
    {
      name: "Nutella Dream Waffle",
      description: "Waffle with Nutella and whipped cream.",
      price: "MYR 22.00",
      image: "/waffle.jpg",
    },
    {
      name: "Berry Kiss Waffle",
      description: "Waffle with mixed berries and whipped cream.",
      price: "MYR 22.00",
      image: "/waffle.jpg",
    },
    {
      name: "Mr.Oreo Waffle",
      description: "Waffle with Oreo and whipped cream.",
      price: "MYR 22.00",
      image: "/waffle.jpg",
    },
    {
      name: "Biscoff Crunch Waffle",
      description: "Waffle with Biscoff and whipped cream.",
      price: "MYR 22.00",
      image: "/waffle.jpg",
    },
    {
      name: "Nutella Dream Croffle",
      description: "Waffle with Nutella and whipped cream.",
      price: "MYR 14.50",
      image: "/croffle.webp",
    },
    {
      name: "Berry Kiss Croffle",
      description: "Waffle with mixed berries and whipped cream.",
      price: "MYR 14.50",
      image: "/croffle.webp",
    },
    {
      name: "Mr.Oreo Croffle",
      description: "Waffle with Oreo and whipped cream.",
      price: "MYR 14.50",
      image: "/croffle.webp",
    },
    {
      name: "Biscoff Crunch Croffle",
      description: "Waffle with Biscoff and whipped cream.",
      price: "MYR 14.50",
      image: "/croffle.webp",
    },
    {
      name: "Pistachio Wonder Croffle",
      description: "Waffle with pistachio and whipped cream.",
      price: "MYR 14.50",
      image: "/croffle.webp",
    },
  ],
  "Add-Ons": [
    {
      name: "Espresso Shot",
      description: "Extra shot of espresso.",
      price: "MYR 4.00",
    },
    {
      name: "Almond Milk",
      description: "Almond milk instead of regular milk.",
      price: "MYR 4.00",
    },
    {
      name: "Oat Milk",
      description: "Oat milk instead of regular milk.",
      price: "MYR 4.00",
    },
    {
      name: "Whipped Cream",
      description: "Whipped cream on top.",
      price: "MYR 4.00",
    },
    {
      name: "Syrup",
      description: "Extra syrup.",
      price: "MYR 2.00",
    },
  ],
};

export default menuItems;
