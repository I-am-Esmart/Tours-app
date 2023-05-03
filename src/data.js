import image1 from "./images/tour-1.jpeg"
import image2 from "./images/tour-2.jpeg"
import image3 from "./images/tour-3.jpeg"
import image4 from "./images/tour-4.jpeg"

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
]

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", className: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", className: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", className: "fab fa-squarespace" },
]

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, officia.",
  },
]

export const tours = [
  {
    id: 1,
    image: image1,
    date: "august 26th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "China",
    days: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: image2,
    date: "october 1th, 2023",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: " indonesia",
    price: "from $1400",
    days: "11 days",
  },
  {
    id: 3,
    image: image3,
    date: "september 15th, 2023",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: " hong kong",
    price: "from $2100",
    days: "8 days",
  },
  {
    id: 4,
    image: image4,
    date: "december 5th, 2023",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: " kenya",
    price: "from $3300",
    days: "20 days",
  },
]
