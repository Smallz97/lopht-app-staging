import { NavLinkProps } from "@/app/(landing-pages)/utilities/lib/definitions"

import Olivia from "@/app/(landing-pages)/about/ui/images/employee-cards-images/olivia.png";
import Phoenix from "@/app/(landing-pages)/about/ui/images/employee-cards-images/phoenix.png";
import Lana from "@/app/(landing-pages)/about/ui/images/employee-cards-images/lana.png";
import Demi from "@/app/(landing-pages)/about/ui/images/employee-cards-images/demi.png";
import Candice from "@/app/(landing-pages)/about/ui/images/employee-cards-images/candice.png";
import Natali from "@/app/(landing-pages)/about/ui/images/employee-cards-images/natali.png";
import Drew from "@/app/(landing-pages)/about/ui/images/employee-cards-images/drew.png";
import Orlando from "@/app/(landing-pages)/about/ui/images/employee-cards-images/orlando.png";


import FirstFeatureImage from "@/app/(landing-pages)/home/ui/images/first-feature-image.png";
import SecondFeatureImage from "@/app/(landing-pages)/home/ui/images/second-feature-image.png";
import ThirdFeatureImage from "@/app/(landing-pages)/home/ui/images/third-feature-image.png";

import { CompanyValue } from "@/app/(landing-pages)/utilities/lib/definitions";

import { Users, Heart, TrendingUp, Smile, Flag, Zap } from "@/app/(landing-pages)/utilities/lib/icons";

const links: NavLinkProps[] = [
  {
    href: "/",
    children: "Home"
  },
  {
    href: "/about",
    children: "About us"
  },
  {
    href: "/blog",
    children: "Blog"
  },
];

const pageHeadings = [
  {
    pageName: "About us",
    heading: "About Lopht",
    subHeading: "Learn more about the company and the team behind it.",
  },
  {
    pageName: "Our blog",
    heading: "Stories and interviews",
    subHeading:
      "Subscribe to learn about new product features, the latest in technology, solutions, and updates.",
  },
  {
    pageName: "Privacy Policy",
    heading: "Lopht Privacy Policy",
    subHeading: "Thank you for showing interests in our Privacy policy",
  },
  {
    pageName: "Terms of Service",
    heading: "Lopht Terms of Service",
    subHeading: "Thank you for showing interests in our Terms of service",
  },
];

const features = [
  {
    alt: "",
    feature: "Manage estates & residences",
    highlight:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    points: {
      first: "Leverage automation to move fast",
      second: "Always give customers a human to chat to",
      third: "Automate customer support and close leads faster",
    },
    image: FirstFeatureImage,
  },
  {
    alt: "",
    feature: "Deliver instant answers",
    highlight:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    points: {
      first: "Keep your customers in the loop with live chat",
      second: "Embed help articles right on your website",
      third: "Customers never have to leave the page to find an answer",
    },
    image: SecondFeatureImage,
  },
  {
    alt: "",
    feature: "Manage your team with reports",
    highlight:
      "Measure what matters with Lopht's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    points: {
      first: "Filter, export, and drilldown on the data quickly",
      second: "Save, schedule, and automate reports to your inbox",
      third: "Connect the tools you already use with 100+ integrations",
    },
    image: ThirdFeatureImage,
  },
];

const teamMembers = [
  {
    name: "Olivia Rhye",
    position: "Founder & CEO",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: Olivia,
  },
  {
    name: "Phoenix Baker",
    position: "Engineering Manager",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: Phoenix,
  },
  {
    name: "Lana Steiner",
    position: "Product Manager",
    description: "Former PM for Linear, Lambda School, Texton and On Deck.",
    image: Lana,
  },
  {
    name: "Demi Wilkinson",
    position: "Frontend Developer",
    description:
      "Former frontend developer for Linear, Coinbase, and Postscript.",
    image: Demi,
  },
  {
    name: "Candice Wu",
    position: "Backend Developer",
    description: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    image: Candice,
  },
  {
    name: "Natali Craig",
    position: "Product Designer",
    description:
      "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    image: Natali,
  },
  {
    name: "Drew Cano",
    position: "UX Researcher",
    description:
      "Lead user research for Slack. Contractor for Netflix and Udacity.",
    image: Drew,
  },
  {
    name: "Orlando Diggs",
    position: "Customer Success",
    description: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
    image: Orlando,
  },
];

const companyValues: CompanyValue[] = [
  {
    value: "Care about our team",
    icon: <Users />,
    description:
      "Understand what matters to our employees. Give them what they need to do their best work.",
  },
  {
    value: "Be excellent to each other",
    icon: <Heart />,
    description:
      "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
  },
  {
    value: "Pride in what we do",
    icon: <TrendingUp />,
    description:
      "Value quality and integrity in everything we do. At all times. No exceptions.",
  },
  {
    value: "Don't #!&$ the customer",
    icon: <Smile />,
    description:
      "Understand customers' stated and unstated needs. Make them wildly successful.",
  },
  {
    value: "Do the impossible",
    icon: <Flag />,
    description:
      "Understand customers' stated and unstated needs. Make them wildly successful.",
  },
  {
    value: "Sweat the small stuff",
    icon: <Zap />,
    description:
      "We believe the best products come from the best attention to detail. Sweat the small stuff.",
  },
];

export { links, features, teamMembers, companyValues, pageHeadings };
