// Using aliases to define types
import { StaticImageData } from "next/image";

export type ResponsiveImageProps = {
  alt: string;
  imageSm: StaticImageData;
  imageMd: StaticImageData;
};

export type Feature = {
  alt: string;
  points: {
    first: string;
    second: string;
    third: string;
  };
  feature: string;
  highlight: string;
  imageSm: StaticImageData;
  imageMd: StaticImageData;
};

export type FeatureCardProps = {
  feature: Feature;
  className?: string;
};

export type TeamMember = {
  name: string;
  position: string;
  description: string;
  image: StaticImageData;
};

export type TeamMemberCardProps = {
  member: TeamMember;
};

export type CompanyValue = {
  value: string;
  description: string;
  icon: React.ReactNode;
};

export type CompanyValueCardProps = {
  value: CompanyValue;
};

export type Blogpost = {
  title: string;
  nameDate: string;
  description: string;
  image: StaticImageData;
};

export type PageHeadingProps = {
  heading: string;
  pageName: string;
  subHeading: string;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
