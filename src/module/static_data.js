const states = [
  "All",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra Nagar Haveli and Daman Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam	Dispur",
  "Bihar",
  "Chhattisgarh",
  "Goa	Panaji",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const notiType = [
  { id: "p", title: "Push Notification only" },
  { id: "s", title: "SMS only" },
  { id: "w", title: "Whatsapp Notification only" },
  { id: "pw", title: "Push and Whatsapp" },
  { id: "sw", title: "SMS and Whatsapp" },
  { id: "sp", title: "SMS and Push" },
  { id: "psw", title: "All" },
];

const bidType = [
  { id: "o", title: "Open Bid" },
  { id: "c", title: "Closed Bid" },
  { id: "b", title: "Blint Bid" },
];

const transport = [
  { id: "i", title: "Include" },
  { id: "n", title: "Not Include" },
  { id: "b", title: "Can Choose Customer" },
];

const langages = [
  "All",
  "Hindi",
  "Tamil",
  "Malayalam",
  "Kannada",
  "Telngu",
  "English",
];

const units = ["Kg", "Gram", "Liter", "Milli Litter", "Ton", "Number", "Other"];

export { states, bidType, langages, transport, units, notiType };
