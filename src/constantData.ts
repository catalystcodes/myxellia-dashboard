export const navIcon = [
  {
    icon: "/src/assets/notificationicon.svg",
    label: "Notifications",
  },
  {
    icon: "/src/assets/budgeticon.svg",
    label: "Budget",
  },
  {
    icon: "/src/assets/calendaricon.svg",
    label: "Calendar",
  },
  {
    icon: "/src/assets/messageIcon.svg",
    label: "Messages",
  },
  {
    icon: "/Avatar.png",
    label: "Profile",
  },
] as const;

export const headerData = [
  {
    icon: "/src/assets/homeIcon.svg",
    label: "Dashboard",
    backgroundColor: "",
  },
  {
    icon: "/src/assets/listingIcon.svg",
    label: "Listings",
    backgroundColor: "",
  },
  {
    icon: "/src/assets/userIcon.svg",
    label: "Users",
    backgroundColor: "",
  },
  {
    icon: "/src/assets/requestIcon.svg",
    label: "Request",
    backgroundColor: "",
  },
  {
    icon: "/src/assets/applicationIcon.svg",
    label: "Applications",
    backgroundColor: "",
  },
];

export const overviewData = [
  {
    title: "Listings Overview",
    iconSrc: "/src/assets/solar_home-linear.svg",
    totalValue: "1.8k",
    additionalItems: [
      { label: "Active", value: "80" },
      { label: "Archived", value: "1k" },
    ],
  },
  {
    title: "Users Overview",
    iconSrc: "/src/assets/profile.svg",
    totalValue: "25.4k",
    additionalItems: [
      { label: "Riders", value: "8.5k" },
      { label: "Subscribers", value: "7.5k" },
    ],
  },
];

export const salesOverviewData = [
  {
    percentage: 2.5,
    icon: "/src/assets/tfIcon.svg",
    number: "₦120,000,000.00",
    text: "Total Inflow",
    numberColor: "#4545FE",
    percentageColor: "#12B76A",
  },
  {
    percentage: 2.5,
    icon: "/src/assets/mrrIcon.svg",
    number: "₦50,000,000.00",
    text: "MRR",
    numberColor: "#12B76A",
    percentageColor: "#12B76A",
  },
  {
    percentage: 0.5,
    icon: "/src/assets/crIcon.svg",
    number: "₦200,000,000.00",
    text: "Commission Revenue",
    numberColor: "#14B8A6",
    percentageColor: "#14B8A6",
  },
  {
    percentage: 0.5,
    icon: "/src/assets/gmvIcon.svg",
    number: "₦100,000,000.00",
    text: "GMV",
    numberColor: "#F04438",
    percentageColor: "#F04438",
  },
];

export const footerData = [
  {
    title: "MOST CLICKED",
    text: "Urban Prime Plaza Premiere",
    progression: "/src/assets/progression1.svg",
    backgroundImg: "/MetricItem1.png",
  },
  {
    title: "MOST WATCHLISTED",
    text: "Urban Prime Plaza Premiere",
    progression: "/src/assets/progression2.svg",
    backgroundImg: "/MetricItem2.png",
  },
  {
    title: "HOTTEST LISTING",
    text: "Urban Prime Plaza Premiere",
    progression: "/src/assets/progression3.svg",
    backgroundImg: "/MetricItem3.png",
  },
];

export const modalContent = [
  {
    title: "Set up annual budgets by account category",
    desc: "Allocate funds across income and expense lines with full visibility.",
    icon: "/src/assets/setting-4.svg",
  },
  {
    title: "Track actuals vs budget in real time",
    desc: "See how your community is performing against plan, month by month.",
    icon: "/src/assets/trend-up.svg",
  },
  {
    title: "Adjust figures and forecast with ease",
    desc: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    icon: "/src/assets/modalIcon3.svg",
  },
];
