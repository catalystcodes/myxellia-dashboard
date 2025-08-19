export const navIcon = [
  {
    icon: "/notificationicon.svg",
    label: "Notifications",
  },
  {
    icon: "/budgeticon.svg",
    label: "Budget",
  },
  {
    icon: "/calendaricon.svg",
    label: "Calendar",
  },
  {
    icon: "/messageIcon.svg",
    label: "Messages",
  },
  {
    icon: "/Avatar.png",
    label: "Profile",
  },
] as const;

export const headerData = [
  {
    icon: "/homeIcon.svg",
    label: "Dashboard",
    backgroundColor: "",
  },
  {
    icon: "/listingIcon.svg",
    label: "Listings",
    backgroundColor: "",
  },
  {
    icon: "/userIcon.svg",
    label: "Users",
    backgroundColor: "",
  },
  {
    icon: "/requestIcon.svg",
    label: "Request",
    backgroundColor: "",
  },
  {
    icon: "/applicationIcon.svg",
    label: "Applications",
    backgroundColor: "",
  },
];

export const overviewData = [
  {
    title: "Listings Overview",
    iconSrc: "/solar_home-linear.svg",
    totalValue: "1.8k",
    additionalItems: [
      { label: "Active", value: "80" },
      { label: "Archived", value: "1k" },
    ],
  },
  {
    title: "Users Overview",
    iconSrc: "/profile.svg",
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
    icon: "/tfIcon.svg",
    number: "₦120,000,000.00",
    text: "Total Inflow",
    numberColor: "#4545FE",
    percentageColor: "#12B76A",
  },
  {
    percentage: 2.5,
    icon: "/mrrIcon.svg",
    number: "₦50,000,000.00",
    text: "MRR",
    numberColor: "#12B76A",
    percentageColor: "#12B76A",
  },
  {
    percentage: 0.5,
    icon: "/crIcon.svg",
    number: "₦200,000,000.00",
    text: "Commission Revenue",
    numberColor: "#14B8A6",
    percentageColor: "#14B8A6",
  },
  {
    percentage: 0.5,
    icon: "/gmvIcon.svg",
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
    progression: "/progression1.svg",
    backgroundImg: "/MetricItem1.png",
  },
  {
    title: "MOST WATCHLISTED",
    text: "Urban Prime Plaza Premiere",
    progression: "/progression2.svg",
    backgroundImg: "/MetricItem2.png",
  },
  {
    title: "HOTTEST LISTING",
    text: "Urban Prime Plaza Premiere",
    progression: "/progression3.svg",
    backgroundImg: "/MetricItem3.png",
  },
];

export const modalContent = [
  {
    title: "Set up annual budgets by account category",
    desc: "Allocate funds across income and expense lines with full visibility.",
    icon: "/setting-4.svg",
  },
  {
    title: "Track actuals vs budget in real time",
    desc: "See how your community is performing against plan, month by month.",
    icon: "/trend-up.svg",
  },
  {
    title: "Adjust figures and forecast with ease",
    desc: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    icon: "/modalIcon3.svg",
  },
];
