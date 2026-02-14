import aboutImg from "../assets/img/about.png";
import dishImg1 from "../assets/img/img1.png";
import dishImg2 from "../assets/img/img2.png";
import dishImg3 from "../assets/img/img3.png";
import dishImg4 from "../assets/img/img4.png";
import dishImg5 from "../assets/img/img5.png";
import dishImg6 from "../assets/img/img6.png";
import dishImg7 from "../assets/img/menu1.jpg";
import dishImg8 from "../assets/img/menu2.jpg";
import dishImg9 from "../assets/img/menu3.webp";
import reviewerImg from "../assets/img/pic1.png";

export const heroContent = {
    headline: "Crafted with Passion, Served with Love.",
    subheadline: "Experience a fusion of traditional flavors and modern culinary art. Book your table today for an unforgettable dining experience.",
    ctaLabel: "Order Now!"
};

export const aboutContent = {
    title: "About Us",
    image: aboutImg,
    paragraphs: [
        "Founded with a passion for great food, MenuJS brings together fresh local ingredients and world-class chefs to create a menu that speaks to the soul.",
        "From intimate dinners to family celebrations, every visit is crafted to be warm, welcoming, and memorable."
    ],
    creator: {
        panelTitle: "About the Creator",
        name: "Towfique Kabir Pranto",
        email: "towfique.pranto@gmail.com",
        phone: "+8801677105201",
        github: "https://github.com/towfique-pranto"
    }
};

export const dishSections = [
    { key: "desi", title: "Desi Cuisine" },
    { key: "vegetarian", title: "Vegetarian" },
    { key: "fastfood", title: "Fast Food" }
];

export const menuItems = [
    {
        id: 1,
        img: dishImg1,
        title: "Aromatic Zafran Biryani",
        description: "Fragrant basmati rice layered with tender marinated chicken, saffron, and traditional spices.",
        price: 640,
        category: "desi"
    },
    {
        id: 2,
        img: dishImg2,
        title: "Classic Chicken Tikka Masala",
        description: "Roasted marinated chicken chunks in a creamy, spiced tomato sauce with fresh bell peppers.",
        price: 690,
        category: "desi"
    },
    {
        id: 3,
        img: dishImg3,
        title: "Butter Chicken Royale",
        description: "A rich, velvety tomato-based curry simmered with butter and a blend of secret spices.",
        price: 760,
        category: "desi"
    },
    {
        id: 4,
        img: dishImg4,
        title: "Golden Crisp Samosas",
        description: "Flaky pastry triangles stuffed with spiced potatoes and peas, served with tangy chutney.",
        price: 320,
        category: "vegetarian"
    },
    {
        id: 5,
        img: dishImg5,
        title: "Signature Makhani Gravy",
        description: "Our smoothest curry yet, finished with a swirl of fresh cream and aromatic herbs.",
        price: 560,
        category: "vegetarian"
    },
    {
        id: 6,
        img: dishImg6,
        title: "Zesty Gobhi Adraki",
        description: "Tender cauliflower and garden peas tossed in a ginger-infused turmeric masala.",
        price: 480,
        category: "vegetarian"
    },
    {
        id: 7,
        img: dishImg7,
        title: "The MenuJS Ultimate Burger",
        description: "Double-stacked premium beef patty with melted cheddar, fresh greens, and house sauce.",
        price: 820,
        category: "fastfood"
    },
    {
        id: 8,
        img: dishImg8,
        title: "Chef's Special",
        description: "A rotating house favorite crafted daily from fresh seasonal ingredients.",
        price: 740,
        category: "fastfood"
    },
    {
        id: 9,
        img: dishImg9,
        title: "Crunchy Southern Drumsticks",
        description: "Deep-fried herb-crusted chicken served with golden fries and a side of spicy dip.",
        price: 680,
        category: "fastfood"
    }
];

export const reviewContent = {
    title: "Customer's Review",
    items: [
        {
            id: 1,
            img: reviewerImg,
            name: "Sarah J.",
            review: "The atmosphere was incredible and the signature steak was the best I've ever had. A must-visit in the city!"
        },
        {
            id: 2,
            img: reviewerImg,
            name: "David R.",
            review: "The atmosphere was incredible and the signature steak was the best I've ever had. A must-visit in the city!"
        },
        {
            id: 3,
            img: reviewerImg,
            name: "Maya K.",
            review: "The atmosphere was incredible and the signature steak was the best I've ever had. A must-visit in the city!"
        }
    ]
};

export const footerContent = {
    brandName: "MenuJS",
    brandTagline: "Bringing people together, one meal at a time.",
    linksTitle: "Links",
    links: [
        { id: 1, label: "Dishes", to: "dishes" },
        { id: 2, label: "About", to: "about" },
        { id: 3, label: "Home", to: "home" },
        { id: 4, label: "Reviews", to: "review" }
    ],
    contactTitle: "Contact Us",
    contacts: [
        { id: 1, label: "towfique.pranto@gmail.com", href: "mailto:towfique.pranto@gmail.com" },
        { id: 2, label: "+8801677105201", href: "tel:+8801677105201" },
        { id: 3, label: "Social Media", href: "https://github.com/towfique-pranto", newTab: true }
    ]
};