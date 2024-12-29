

import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import aboutus from "./aboutus.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import artisanLogo from "./artisanLogo.png";
import artisanLogo1 from "./artisanLogo1.png";
import firstImage from "./firstImage.jpg";
import email from "./email.png"
import location from "./location.png"
import shape from "./shape.png"
import phone from "./phone.png"
import loginlogo from "./loginlogo.png"
export const assets = {

  loginlogo,
  phone,
  shape,
  location,
  artisanLogo,
  artisanLogo1,
  firstImage,
  email,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  aboutus,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};

export const products = [
  // Men's Watches
  {
    _id: "m001",
    name: "Men's Luxury Chronograph Watch",
    description:
      "A premium luxury chronograph watch designed for men, featuring precise timekeeping and a stylish design.",
    price: 300,
    image: ["mens_luxury_chronograph.jpg"],
    category: "Men's Watches",
    subCategory: "Luxury Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "m002",
    name: "Men's Wooden Casual Watch",
    description:
      "A handcrafted wooden watch for men, combining style and sustainability.",
    price: 180,
    image: ["mens_wooden_watch.jpg"],
    category: "Men's Watches",
    subCategory: "Wooden Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "m003",
    name: "Men's Minimalist Leather Watch",
    description:
      "A minimalist watch with a sleek leather strap, perfect for both casual and formal attire.",
    price: 200,
    image: ["mens_minimalist_watch.jpg"],
    category: "Men's Watches",
    subCategory: "Minimalist Designs",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "m004",
    name: "Men's Vintage-Inspired Military Watch",
    description:
      "A rugged, vintage-inspired military watch designed for durability and style.",
    price: 220,
    image: ["mens_vintage_watch.jpg"],
    category: "Men's Watches",
    subCategory: "Vintage-Inspired",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "m005",
    name: "Men's Fashion Digital Watch",
    description:
      "A modern digital watch with vibrant design and advanced features for the fashion-conscious man.",
    price: 150,
    image: ["mens_fashion_digital_watch.jpg"],
    category: "Men's Watches",
    subCategory: "Fashion Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },

  // Women's Watches
  {
    _id: "w001",
    name: "Women's Luxury Diamond Watch",
    description:
      "A luxurious diamond-encrusted watch for women, combining elegance and high performance.",
    price: 500,
    image: ["womens_luxury_watch.jpg"],
    category: "Women's Watches",
    subCategory: "Luxury Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "w002",
    name: "Women's Wooden Eco Watch",
    description:
      "A beautifully crafted wooden watch for women, perfect for eco-conscious individuals.",
    price: 200,
    image: ["womens_wooden_watch.jpg"],
    category: "Women's Watches",
    subCategory: "Wooden Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "w003",
    name: "Women's Minimalist Rose Gold Watch",
    description:
      "A stunning minimalist rose gold watch, a versatile addition to your wardrobe.",
    price: 250,
    image: ["womens_minimalist_watch.jpg"],
    category: "Women's Watches",
    subCategory: "Minimalist Designs",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "w004",
    name: "Women's Vintage-Inspired Bracelet Watch",
    description:
      "A charming bracelet watch with vintage-inspired details, perfect for a classic look.",
    price: 230,
    image: ["womens_vintage_watch.jpg"],
    category: "Women's Watches",
    subCategory: "Vintage-Inspired",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "w005",
    name: "Women's Fashion Crystal Watch",
    description:
      "A fashionable crystal watch adorned with sparkling details for women.",
    price: 300,
    image: ["womens_fashion_crystal_watch.jpg"],
    category: "Women's Watches",
    subCategory: "Fashion Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },

  // Unisex Watches
  {
    _id: "u001",
    name: "Unisex Luxury Smartwatch",
    description:
      "A cutting-edge luxury smartwatch suitable for all, blending style and functionality.",
    price: 400,
    image: ["unisex_luxury_smartwatch.jpg"],
    category: "Unisex Watches",
    subCategory: "Luxury Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "u002",
    name: "Unisex Wooden Nature Watch",
    description:
      "A sustainable and stylish wooden watch, crafted for both men and women.",
    price: 220,
    image: ["unisex_wooden_watch.jpg"],
    category: "Unisex Watches",
    subCategory: "Wooden Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "u003",
    name: "Unisex Minimalist All-Black Watch",
    description:
      "A bold all-black minimalist watch designed for unisex appeal and versatility.",
    price: 300,
    image: ["unisex_minimalist_watch.jpg"],
    category: "Unisex Watches",
    subCategory: "Minimalist Designs",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "u004",
    name: "Unisex Vintage-Inspired Chronograph",
    description:
      "A sophisticated vintage-inspired chronograph for collectors and enthusiasts.",
    price: 350,
    image: ["unisex_vintage_watch.jpg"],
    category: "Unisex Watches",
    subCategory: "Vintage-Inspired",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "u005",
    name: "Unisex Fashion Sport Watch",
    description:
      "A dynamic fashion-forward sports watch for active and stylish individuals.",
    price: 180,
    image: ["unisex_fashion_watch.jpg"],
    category: "Unisex Watches",
    subCategory: "Fashion Watches",
    sizes: ["Adjustable"],
    date: Date.now(),
    bestseller: true,
  },
];



