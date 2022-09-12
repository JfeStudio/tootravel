import udDestination from "./assets/path/ud_destination.svg";
import udAircraft from "./assets/path/ud-aircraft.svg";
import udRide from "./assets/path/ud-ride.svg";
import udSchedule from "./assets/path/ud-schedule.svg";
import udTravelers from "./assets/path/ud-travelers.svg";
import udSearch from "./assets/path/ud-search.svg";
import udEvent from "./assets/path/ud-events.svg";
import udChoose from "./assets/path/ud-choose.svg";
import udField from "./assets/path/ud-field.svg";
import udApprove from "./assets/path/ud-approve.svg";
import udPayments from "./assets/path/ud-payments.svg";
import udConfirmed from "./assets/path/ud-confirmed.svg";
import udKnowledge from "./assets/path/ud-knowledge.svg";

// ========= data navigation
export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Booking Form",
    path: "/booking",
  },
  {
    name: "Category",
    path: "/category",
  },
  {
    name: "About Us",
    path: "/about",
  },
];

// ======== data card
export const cardVocation = [
  {
    id: 1,
    link: "/detailsFirst",
    image: require("./assets/images/hero-images-1.jpg"),
    title: "Mount Bromo",
    price: "Rp 217.500",
    preview:
      "Mount Bromo or in the Tengger language spelled *Brama*, also called the Tengger Caldera, is a...",
  },
  {
    id: 2,
    link: "/detailsSecond",
    image: require("./assets/images/hero-images-2.jpg"),
    title: "Padar Island",
    price: "Rp 3.750.000",
    preview:
      "Padar Island is the third largest island in the Komodo National Park area, after Komodo Island...",
  },
  {
    id: 3,
    link: "/detailsThird",
    image: require("./assets/images/bali-4.jpg"),
    title: "Nusa Penida",
    price: "Rp 280.000",
    preview:
      "Nusa Penida is an island part of the Republic of Indonesia which is located southeast of Bali...",
  },
  {
    id: 4,
    image: require("./assets/images/vacation-4.jpg"),
    title: "Kelingking Beach",
    price: "Rp 330.000",
    preview:
      "Located in Bunga Mekar Village, Nusa Penida District, Klungklung, Bali, Kelingking beach...",
  },
  {
    id: 5,
    image: require("./assets/images/vacation-5.jpg"),
    title: "Tegallalang",
    price: "Rp 120.000",
    preview:
      "Pupuan Village is one of the villages in the Tegallalang sub-district, Gianyar Regency, Bali province, Indonesia...",
  },
  {
    id: 6,
    image: require("./assets/images/vacation-6.jpg"),
    title: "Borobudur",
    price: "Rp 50.000",
    preview:
      "Borobudur Temple is a Buddhist temple located in Borobudur, Magelang, Central Java, Indonesia...",
  },
  // {
  //   id: 7,
  //   image: require("./assets/images/hero-images-3.jpg"),
  //   title: "title ke 7",
  //   price: "$77.99",
  //   preview:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum iste consequatur, repellat nemo repellendus.",
  // },
];

// ===== data fate

export const introduction = [
  {
    id: 1,
    vektor: `${udDestination}`,
    title: "Safely Saved Lists",
    description:
      "Neatly arranged for your ease of access Go to Saved at the top navigation bar, where we save your saved items, Wegroup them based on category, Just a few clicks away from starting your journey! When you want to make a purchase from Saved.",
    button: "Read More",
  },
  {
    id: 2,
    vektor: `${udAircraft}`,
    title: "Flight Price Alert",
    description:
      "Instant Notifications You will get alerted as soon as the flight's prices match your budget, so you will be able to book the right flight at the right time, You only need to fill in the details of your desired flight, such as time of departure.",
    button: "Find It Here",
  },
  {
    id: 3,
    vektor: `${udRide}`,
    title: "Passenger Quick Pick",
    description:
      "Fill in passenger details now, pick passengers quickly later. Passenger Quick Pick saves you the hassle of entering the same passenger details every time you book.",
    button: "Check It Out",
  },
  {
    id: 4,
    vektor: `${udSchedule}`,
    title: "Easy Reschedule",
    description:
      "No more chasing after the airline. Changing your flight is only a matter of a few clicks, Easy Reschedule ultimately saves your time! Open your e-ticket Through My Bookig, Open the e-tiket of the flight you want to reschedule",
    button: "Read More",
  },
  {
    id: 5,
    vektor: `${udTravelers}`,
    title: "Stay Guarantee",
    description:
      "How to Claim Stay Guarantee with Ease Follow the 4 steps below, Open your TooTravel App (minimum version 2.9) On the homepage, tap the My Booking menu at the bottom of the page.",
    button: "Read More",
  },
];

// ========== data customers

export const customers = [
  {
    id: 1,
    image: require("./assets/images/customer-1.jpg"),
    name: "John Syamsudin",
    job: "Bloger immediately",
    rating: "3,4",
    review:
      "I fell the ease when making choices tourist destination that i will choose when using TooTravel. and i can very easily determine it. TooTravel which is the best service",
  },
  {
    id: 2,
    image: require("./assets/images/customer-2.jpg"),
    name: "Brian FOX",
    job: "Indonesia tourists",
    rating: "4,5",
    review:
      "It's a shame i'm a new tourist who uses Alcazar. I feel the ease of access to traveling during the news i don't have any confusion at all. TooTravel which is the best service",
  },
  {
    id: 3,
    image: require("./assets/images/customer-3.png"),
    name: "Melda Zasky",
    job: "Malaysia tourists",
    rating: "3.4",
    review:
      "I really like the service offered TooTravel in organizing my travels, services that are easy to understand and very fast can solve various kinds of problems.",
  },
  {
    id: 4,
    image: require("./assets/images/customer-4.png"),
    name: "Maman BBC",
    job: "Bloger immediately",
    rating: "4.4",
    review:
      "It is very rare that there are applications or services service provider like this, that's why i feel helped by the presence of TooTravel. kinds of problems.",
  },
  {
    id: 5,
    image: require("./assets/images/customer-5.png"),
    name: "Andreas WOX",
    job: "Jepang tourists",
    rating: "4.0",
    review:
      "The services offered by TooTravel are very complete, that's why i think TooTravel is always reliable when traveling to tourist attractions around the world.",
  },
  {
    id: 6,
    image: require("./assets/images/customer-6.png"),
    name: "Natalia Lin",
    job: "Bloger immediately",
    rating: "3.8",
    review:
      "When i need material for my work blog tourist destinations, my mind goes straight on TooTravel which is the best service provider travel needs.",
  },
];

// ========== how to fxxking booking
export const howto = [
  {
    id: 1,
    vektor: `${udSearch}`,
    title: "1. Portal Booking Online",
    link: "https://bookingonline/tootravel.org",
    description: "Use google chrome browser for online booking registration",
  },
  {
    id: 2,
    vektor: `${udEvent}`,
    title: "2. Choose Schedule",
    description:
      "Choose your departure date and return date, make sure you fill it in correctly",
  },
  {
    id: 3,
    vektor: `${udChoose}`,
    title: "3. Select Booking Type",
    description:
      "Choose the type of booking you want, read the description conditions if confused",
  },
  {
    id: 4,
    vektor: `${udField}`,
    title: "4. Form Filling",
    description:
      "Complete the biodata, make sure the email address and cellphone number are correct, payment confirmation will be sent via email and sms, group leader.",
  },
  {
    id: 5,
    vektor: `${udApprove}`,
    title: "5. Check Booking Code",
    description:
      "After registering, check the booking code via email or online booking website page to get a *Virtual Account.",
  },
  {
    id: 6,
    vektor: `${udPayments}`,
    title: "6. Payment",
    description:
      "The payment deadline is 2 hours after registration, more than 2 hours the booking code is forfeited, payment is only made with *Virtual Account.",
  },
  {
    id: 7,
    vektor: `${udConfirmed}`,
    title: "7. Check Payment Confirmation",
    description:
      "The group leader will receive an SMS and email proof of payment",
  },
  {
    id: 8,
    vektor: `${udKnowledge}`,
    title: "8. Check Online Booking Confirmation at the Entrance",
    description:
      "The officer will check the payment confirmation by Scan QR Code on the Online Booking System",
  },
];

// ======= card category
export const cardINA = [
  {
    id: 1,
    link: "/detailsFirst",
    image: require("./assets/images/bromo-4.jpg"),
    title: "Mount Bromo",
    location: "Probolinggo, IDN",
    price: "217k/Pck",
    preview: "Beautiful lavenders wide spread here, suitable for relaxing",
  },
  {
    id: 2,
    link: "/detailsSecond",
    image: require("./assets/images/padar-island-5.jpg"),
    title: "Padar Island",
    location: "Manggarai, IDN",
    price: "3.075k/Pck",
    preview: "Beautiful lavenders wide spread here, suitable for relaxing",
  },
  {
    id: 3,
    link: "/detailsThird",
    image: require("./assets/images/bali-2.jpg"),
    title: "Nusa Penida",
    location: "Bali, INA",
    price: "280k/Pck",
    preview: "Beautiful lavenders wide spread here, suitable for relaxing",
  },
  {
    id: 4,
    image: require("./assets/images/vacation-4.jpg"),
    title: "Kelingking Beach",
    location: "Bali, INA",
    price: "150/Pck",
    preview: "Beautiful lavenders wide spread here, suitable for relaxing",
  },
  {
    id: 5,
    image: require("./assets/images/vacation-5.jpg"),
    title: "Tegallalang",
    location: "Bali, INA",
    price: "120k/Pck",
    preview: "Beautiful lavenders wide spread here, suitable for relaxing",
  },
  {
    id: 6,
    image: require("./assets/images/vacation-6.jpg"),
    title: "Borobudur",
    location: "Magelang, IDN",
    price: "50k/Pck",
    preview: "Beautiful lavenders wide spread here, suitable for relaxing",
  },
  {
    id: 7,
    image: require("./assets/images/vacation-8.jpg"),
    title: "Gili Trawangan",
    location: "Lombok, IDN",
    price: "350k/Pck",
    preview: "Beautiful lavenders wide spread here, suitable for relaxing",
  },
  {
    id: 8,
    image: require("./assets/images/bali-5.jpg"),
    title: "--------",
    location: "Surabaya, IDN",
    price: "----/Pck",
    preview: "---------------------------------------------------",
  },
];

export const cardJPN = [
  {
    id: 1,
    image: require("./assets/images/bali-5.jpg"),
    title: "--------",
    location: "Roma, ITA",
    price: "----/Pck",
    preview: "---------------------------------------------------",
  },
  {
    id: 2,
    image: require("./assets/images/bali-5.jpg"),
    title: "--------",
    location: "Tokyo, JPN",
    price: "----/Pck",
    preview: "---------------------------------------------------",
  },
  {
    id: 3,
    image: require("./assets/images/bali-5.jpg"),
    title: "--------",
    location: "Berlin, GER",
    price: "----/Pck",
    preview: "---------------------------------------------------",
  },
  {
    id: 4,
    image: require("./assets/images/bali-5.jpg"),
    title: "--------",
    location: "Seoul, KOR",
    price: "----/Pck",
    preview: "---------------------------------------------------",
  },
];

// ===== details customers
export const dataImage = [
  {
    id: 1,
    name: "images customer",
    image: require("./assets/images/customer-1.jpg"),
  },
  {
    id: 2,
    name: "images customer",
    image: require("./assets/images/customer-2.jpg"),
  },
  {
    id: 3,
    name: "images customer",
    image: require("./assets/images/customer-3.png"),
  },
  {
    id: 4,
    name: "images customer",
    image: require("./assets/images/customer-4.png"),
  },
  {
    id: 5,
    name: "images customer",
    image: require("./assets/images/customer-5.png"),
  },
];

// ====== data firstImage review gallery
export const firstImage = [
  {
    id: 0,
    value: require("./assets/images/bromo-1.jpg"),
  },
  {
    id: 1,
    value: require("./assets/images/bromo-2.jpg"),
  },
  {
    id: 2,
    value: require("./assets/images/bromo-3.jpg"),
  },
  {
    id: 3,
    value: require("./assets/images/bromo-4.jpg"),
  },
  {
    id: 4,
    value: require("./assets/images/bromo-5.jpg"),
  },
];

// ====== data secondImage review gallery
export const secondImage = [
  {
    id: 0,
    value: require("./assets/images/padar-island-1.jpg"),
  },
  {
    id: 1,
    value: require("./assets/images/padar-island-2.jpg"),
  },
  {
    id: 2,
    value: require("./assets/images/padar-island-3.jpg"),
  },
  {
    id: 3,
    value: require("./assets/images/padar-island-4.jpg"),
  },
  {
    id: 4,
    value: require("./assets/images/padar-island-5.jpg"),
  },
];

// ====== data thirdImage review gallery
export const thirdImage = [
  {
    id: 0,
    value: require("./assets/images/bali-1.jpg"),
  },
  {
    id: 1,
    value: require("./assets/images/bali-2.jpg"),
  },
  {
    id: 2,
    value: require("./assets/images/bali-3.jpg"),
  },
  {
    id: 3,
    value: require("./assets/images/bali-4.jpg"),
  },
  {
    id: 4,
    value: require("./assets/images/bali-5.jpg"),
  },
];

// ===== data specifications
export const textSpecificationFirst = [
  {
    id: 1,
    title: "Height",
    spec: "2.329 m",
  },
  {
    id: 2,
    title: "Relative altitude",
    spec: "586 m",
  },
  {
    id: 3,
    title: "Last eruption",
    spec: "2016",
  },
  {
    id: 4,
    title: "Province",
    spec: "East Java",
  },
  {
    id: 5,
    title: "-",
    spec: "-",
  },
];

// ===== data specificationsSecond
export const textSpecificationSecond = [
  {
    id: 1,
    title: "Type",
    spec: "Natural",
  },
  {
    id: 2,
    title: "Criteria",
    spec: "vii, ix",
  },
  {
    id: 3,
    title: "Identification number",
    spec: "609",
  },
  {
    id: 4,
    title: "UNESCO area",
    spec: "Asia Pacific",
  },
  {
    id: 5,
    title: "Year of Inauguration",
    spec: "1991",
  },
];

// ===== data specificationsThird
export const textSpecificationThird = [
  {
    id: 1,
    title: "Large",
    spec: "209,4 km",
  },
  {
    id: 2,
    title: "Width max 12km",
    spec: "South East Asia",
  },
  {
    id: 3,
    title: "Highest elevation",
    spec: "524 m (1719 ft)",
  },
  {
    id: 4,
    title: "Population",
    spec: "Klungkung",
  },
  {
    id: 5,
    title: "Province",
    spec: "Bali",
  },
];

// ======= related vacation
export const relatedVacation = [
  {
    id: 1,
    link: "/detailsFirst",
    image: require("./assets/images/bromo-4.jpg"),
    title: "Mount Bromo",
    location: "Probolinggo, IDN",
    price: "217k/Pck",
    preview:
      "Mount Bromo or in the Tengger language spelled *Brama*, also called the Tengger Caldera, is a...",
  },
  {
    id: 2,
    link: "/detailsSecond",
    image: require("./assets/images/padar-island-5.jpg"),
    title: "Padar Island",
    location: "Manggarai, IDN",
    price: "3.075k/Pck",
    preview:
      "Padar Island is the third largest island in the Komodo National Park area, after Komodo Island...",
  },
  {
    id: 3,
    link: "/detailsThird",
    image: require("./assets/images/bali-2.jpg"),
    title: "Nusa Penida",
    location: "Bali, INA",
    price: "280k/Pck",
    preview:
      "Nusa Penida is an island part of the Republic of Indonesia which is located southeast of Bali...",
  },
];
