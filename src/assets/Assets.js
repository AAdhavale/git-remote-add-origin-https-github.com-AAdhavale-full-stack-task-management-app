import logo from './logo.jpg'
import basket from './basket-icon.png'
import search from './search-icon.png'



import menu_1 from './salad-menu.jpg'
import menu_2 from './rolls-menu.jpg'
import menu_3 from './dessert-menu.jpg'
import menu_4 from './sandwich-menu.jpg'
import menu_5 from './cake-menu.avif'
import menu_6 from './vegfood-menu.jpg'
import menu_7 from './pasta-menu.jpg'
import menu_8 from './noodles-menu.jpg'


import food_1 from './assetsImg/Greek-salad.jpg'
import food_2 from  './assetsImg/cobb-salad.jpg'
import food_3 from './assetsImg/caesar-salad.jpg';
import food_4 from './assetsImg/caprese-salad.jpg';
import food_5 from './assetsImg/garden-salad.jpg';
import food_6 from './assetsImg/quinoa-salad.jpg';
import food_7 from './assetsImg/spinach-salad.jpg';

import food_8 from './assetsImg/chicken-roll.jpg';
import food_9 from './assetsImg/paneer-roll.jpg';
import food_10 from './assetsImg/egg-roll.jpg';
import food_11 from './assetsImg/spring-roll.jpg';
import food_12 from './assetsImg/shawarma-roll.jpg';
import food_13 from './assetsImg/cheese-roll.jpg';
import food_14 from './assetsImg/potato-roll.jpg';

import food_15 from './assetsImg/chocolate-brownie.jpg';
import food_16 from './assetsImg/gulab-jamun.jpg';
import food_17 from './assetsImg/icecream.jpg';
import food_18 from './assetsImg/Tiramisu.jpg';
import food_19 from './assetsImg/cheesecake.jpg';
import food_20 from './assetsImg/Apple-pie.jpg';
import food_21 from './assetsImg/Mousse.jpg';

import food_22 from './assetsImg/grilled-sandwich.jpg';
import food_23 from './assetsImg/club-sandwich.jpg';
import food_24 from './assetsImg/veggie-sandwich.jpg';
import food_25 from './assetsImg/blt-sandwich.jpg';
import food_26 from './assetsImg/chicken-sandwich.jpg';
import food_27 from './assetsImg/egg-sandwich.jpg';
import food_28 from './assetsImg/caprese-sandwich.jpg';



import food_29 from './assetsImg/food_29.jpg';
import food_30 from './assetsImg/food_30.jpg';
import food_31 from './assetsImg/food_31.jpg';
import food_32 from './assetsImg/food_32.jpg';
import food_33 from './assetsImg/food_33.jpg';
import food_34 from './assetsImg/food_34.jpg';
import food_35 from './assetsImg/food_35.jpg';
import food_36 from './assetsImg/food_36.jpg';
import food_37 from './assetsImg/food_37.jpg';
import food_38 from './assetsImg/food_38.jpg';
import food_39 from './assetsImg/food_39.jpg';
import food_40 from './assetsImg/food_40.jpg';
import food_41 from './assetsImg/food_41.jpg';
import food_42 from './assetsImg/food_42.jpg';
import food_43 from './assetsImg/food_43.jpg';
import food_44 from './assetsImg/food_44.jpg';
import food_45 from './assetsImg/food_45.jpg';
import food_46 from './assetsImg/food_46.jpg';
import food_47 from './assetsImg/food_47.jpg';
import food_48 from './assetsImg/food_48.jpg';
import food_49 from './assetsImg/food_49.jpg';
import food_50 from './assetsImg/food_50.jpg';
import food_51 from './assetsImg/food_51.jpg';
import food_52 from './assetsImg/food_52.jpg';
import food_53 from './assetsImg/food_53.jpg';
import food_54 from './assetsImg/food_54.jpg';
import food_55 from './assetsImg/food_55.jpg';
import food_56 from './assetsImg/food_56.jpg';




export const assets = {
    logo,
    basket,
    search
}

export const menu_list = [
   {
        menu_name: "Salad",
        menu_image: menu_1
    } , 
    {
        menu_name: "Rolls",
        menu_image: menu_2
    } ,
    {
        menu_name: "Desserts",
        menu_image: menu_3
    } ,
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    } ,
    {
        menu_name: "Cakes",
        menu_image: menu_5
    } ,
    {
        menu_name: "Vegfoods",
        menu_image: menu_6
    } ,
    {
        menu_name: "Pastas",
        menu_image: menu_7
    } ,
    {
        menu_name: "Noodles",
        menu_image: menu_8
    } ,

   
]

; export const food_list = [
    // Salad
    {
        _id: "1",
        name: "Greek Salad",
        image: food_1,
        price: 400,
        description: "A mix of fresh vegetables with feta cheese and olives.",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Caesar Salad",
        image: food_2,
        price: 350,
        description: "Romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        category: "Salad"
    },
    {
        _id: "3",
        name: "Cobb Salad",
        image: food_3,
        price: 450,
        description: "A hearty salad with chicken, avocado, bacon, and eggs.",
        category: "Salad"
    },
    {
        _id: "4",
        name: "Caprese Salad",
        image: food_4,
        price: 320,
        description: "Fresh tomatoes, mozzarella, basil, and balsamic glaze.",
        category: "Salad"
    },
    {
        _id: "5",
        name: "Garden Salad",
        image: food_5,
        price: 280,
        description: "A refreshing mix of seasonal vegetables with dressing.",
        category: "Salad"
    },
    {
        _id: "6",
        name: "Quinoa Salad",
        image: food_6,
        price: 400,
        description: "A protein-packed salad with quinoa, veggies, and dressing.",
        category: "Salad"
    },
    {
        _id: "7",
        name: "Spinach and Strawberry Salad",
        image: food_7,
        price: 350,
        description: "A sweet and savory blend of spinach, strawberries, and vinaigrette.",
        category: "Salad"
    },

    // Rolls
    {
        _id: "8",
        name: "Chicken Kathi Roll",
        image: food_8,
        price: 200,
        description: "Spiced chicken wrapped in a paratha with chutney.",
        category: "Rolls"
    },
    {
        _id: "9",
        name: "Paneer Tikka Roll",
        image: food_9,
        price: 180,
        description: "Grilled paneer and vegetables rolled in a flatbread.",
        category: "Rolls"
    },
    {
        _id: "10",
        name: "Egg Roll",
        image: food_10,
        price: 150,
        description: "Eggs and veggies rolled in a soft paratha.",
        category: "Rolls"
    },
    {
        _id: "11",
        name: "Veggie Spring Roll",
        image: food_11,
        price: 120,
        description: "Crispy rolls stuffed with stir-fried vegetables.",
        category: "Rolls"
    },
    {
        _id: "12",
        name: "Chicken Shawarma Roll",
        image: food_12,
        price: 250,
        description: "Succulent chicken and garlic sauce wrapped in pita.",
        category: "Rolls"
    },
    {
        _id: "13",
        name: "Cheese Roll",
        image: food_13,
        price: 140,
        description: "A cheesy delight rolled to perfection.",
        category: "Rolls"
    },
    {
        _id: "14",
        name: "Spicy Potato Roll",
        image: food_14,
        price: 130,
        description: "Mashed spiced potatoes rolled with tangy sauce.",
        category: "Rolls"
    },

    // Desserts
    {
        _id: "15",
        name: "Chocolate Brownie",
        image: food_15,
        price: 120,
        description: "Rich and gooey chocolate dessert.",
        category: "Desserts"
    },
    {
        _id: "16",
        name: "Gulab Jamun",
        image: food_16,
        price: 100,
        description: "Soft and sweet fried dough balls in sugar syrup.",
        category: "Desserts"
    },
    {
        _id: "17",
        name: "Ice Cream Sundae",
        image: food_17,
        price: 180,
        description: "Layered ice cream with toppings and syrups.",
        category: "Desserts"
    },
    {
        _id: "18",
        name: "Tiramisu",
        image: food_18,
        price: 300,
        description: "An Italian dessert with coffee-soaked layers and mascarpone.",
        category: "Desserts"
    },
    {
        _id: "19",
        name: "Cheesecake",
        image: food_19,
        price: 350,
        description: "A creamy and tangy dessert with a biscuit base.",
        category: "Desserts"
    },
    {
        _id: "20",
        name: "Apple Pie",
        image: food_20,
        price: 220,
        description: "Classic dessert with spiced apples in a flaky crust.",
        category: "Desserts"
    },
    {
        _id: "21",
        name: "Mousse",
        image: food_21,
        price: 200,
        description: "A light and airy dessert in various flavors.",
        category: "Desserts"
    },
        // Sandwich
        {
            _id: "22",
            name: "Grilled Cheese Sandwich",
            image: food_22,
            price: 150,
            description: "A classic sandwich with melted cheese and crispy bread.",
            category: "Sandwich"
        },
        {
            _id: "23",
            name: "Club Sandwich",
            image: food_23,
            price: 200,
            description: "A triple-layer sandwich with chicken, lettuce, and mayo.",
            category: "Sandwich"
        },
        {
            _id: "24",
            name: "Veggie Delight Sandwich",
            image: food_24,
            price: 140,
            description: "A healthy sandwich packed with fresh veggies and sauce.",
            category: "Sandwich"
        },
        {
            _id: "25",
            name: "BLT Sandwich",
            image: food_25,
            price: 220,
            description: "Bacon, lettuce, and tomato with a tangy spread.",
            category: "Sandwich"
        },
        {
            _id: "26",
            name: "Chicken Panini",
            image: food_26,
            price: 250,
            description: "A pressed sandwich filled with grilled chicken and cheese.",
            category: "Sandwich"
        },
        {
            _id: "27",
            name: "Egg Salad Sandwich",
            image: food_27,
            price: 180,
            description: "Creamy egg salad layered between soft bread slices.",
            category: "Sandwich"
        },
        {
            _id: "28",
            name: "Caprese Sandwich",
            image: food_28,
            price: 200,
            description: "Fresh mozzarella, tomatoes, and basil in a baguette.",
            category: "Sandwich"
        },
    
        // Cakes
        {
            _id: "29",
            name: "Chocolate Cake",
            image: food_29,
            price: 350,
            description: "Rich and moist chocolate cake topped with ganache.",
            category: "Cakes"
        },
        {
            _id: "30",
            name: "Red Velvet Cake",
            image: food_30,
            price: 400,
            description: "A vibrant red cake layered with cream cheese frosting.",
            category: "Cakes"
        },
        {
            _id: "31",
            name: "Vanilla Sponge Cake",
            image: food_31,
            price: 300,
            description: "A light and fluffy vanilla-flavored cake.",
            category: "Cakes"
        },
        {
            _id: "32",
            name: "Black Forest Cake",
            image: food_32,
            price: 450,
            description: "Chocolate sponge layered with cream and cherries.",
            category: "Cakes"
        },
        {
            _id: "33",
            name: "Carrot Cake",
            image: food_33,
            price: 380,
            description: "A moist cake with carrots and cream cheese frosting.",
            category: "Cakes"
        },
        {
            _id: "34",
            name: "Pineapple Cake",
            image: food_34,
            price: 300,
            description: "A tropical-flavored cake with pineapple chunks and cream.",
            category: "Cakes"
        },
        {
            _id: "35",
            name: "Lemon Drizzle Cake",
            image: food_35,
            price: 350,
            description: "A zesty and sweet cake with a lemon glaze.",
            category: "Cakes"
        },
    
        // Vegfoods
        {
            _id: "36",
            name: "Vegetable Biryani",
            image: food_36,
            price: 250,
            description: "Aromatic rice cooked with mixed vegetables and spices.",
            category: "Vegfoods"
        },
        {
            _id: "37",
            name: "Paneer Butter Masala",
            image: food_37,
            price: 300,
            description: "Cottage cheese in a rich and creamy tomato gravy.",
            category: "Vegfoods"
        },
        {
            _id: "38",
            name: "Chole Bhature",
            image: food_38,
            price: 200,
            description: "Spiced chickpeas served with deep-fried bread.",
            category: "Vegfoods"
        },
        {
            _id: "39",
            name: "Aloo Gobi",
            image: food_39,
            price: 180,
            description: "Potato and cauliflower cooked with Indian spices.",
            category: "Vegfoods"
        },
        {
            _id: "40",
            name: "Palak Paneer",
            image: food_40,
            price: 320,
            description: "Spinach and paneer curry seasoned with spices.",
            category: "Vegfoods"
        },

        
        {
            _id: "41",
            name: "Dal Tadka",
            image: food_41,
            price: 150,
            description: "Lentils tempered with garlic, cumin, and ghee.",
            category: "Vegfoods"
        },
        {
            _id: "42",
            name: "Vegetable Korma",
            image: food_42,
            price: 280,
            description: "A creamy curry made with mixed vegetables and nuts.",
            category: "Vegfoods"
        },
    
        // Pastas
        {
            _id: "43",
            name: "Penne Arrabbiata",
            image: food_43,
            price: 200,
            description: "Penne pasta tossed in a spicy tomato sauce.",
            category: "Pastas"
        },
        {
            _id: "44",
            name: "Spaghetti Carbonara",
            image: food_44,
            price: 300,
            description: "Spaghetti with creamy sauce, pancetta, and parmesan.",
            category: "Pastas"
        },
        {
            _id: "45",
            name: "Fettuccine Alfredo",
            image: food_45,
            price: 320,
            description: "Fettuccine pasta with rich and creamy Alfredo sauce.",
            category: "Pastas"
        },
        {
            _id: "46",
            name: "Mac and Cheese",
            image: food_46,
            price: 250,
            description: "Comfort food made with macaroni and melted cheese.",
            category: "Pastas"
        },
        {
            _id: "47",
            name: "Pesto Pasta",
            image: food_47,
            price: 280,
            description: "Pasta tossed in fresh basil pesto sauce.",
            category: "Pastas"
        },
        {
            _id: "48",
            name: "Lasagna",
            image: food_48,
            price: 400,
            description: "Layered pasta with meat or veggies, sauce, and cheese.",
            category: "Pastas"
        },
        {
            _id: "49",
            name: "Ravioli",
            image: food_49,
            price: 350,
            description: "Stuffed pasta served with a sauce of your choice.",
            category: "Pastas"
        },
    
        // Noodles
        {
            _id: "50",
            name: "Hakka Noodles",
            image: food_50,
            price: 200,
            description: "Stir-fried noodles with vegetables and soy sauce.",
            category: "Noodles"
        },
        {
            _id: "51",
            name: "Chow Mein",
            image: food_51,
            price: 220,
            description: "Crispy stir-fried noodles with chicken or vegetables.",
            category: "Noodles"
        },
        {
            _id: "52",
            name: "Pad Thai",
            image: food_52,
            price: 300,
            description: "Thai-style stir-fried rice noodles with tamarind sauce.",
            category: "Noodles"
        },
        {
            _id: "53",
            name: "Singapore Noodles",
            image: food_53,
            price: 280,
            description: "Spicy noodles with curry flavor and mixed vegetables.",
            category: "Noodles"
        },
        {
            _id: "54",
            name: "Udon Noodles",
            image: food_54,
            price: 320,
            description: "Thick Japanese noodles served in a flavorful broth.",
            category: "Noodles"
        },
        {
            _id: "55",
            name: "Ramen",
            image: food_55,
            price: 350,
            description: "Japanese noodle soup with toppings like egg and pork.",
            category: "Noodles"
        },
        {
            _id: "56",
            name: "Korean Spicy Noodles",
            image: food_56,
            price: 300,
            description: "Hot and spicy noodles with Korean flavors.",
            category: "Noodles"
        },
        
    ];
    

   

