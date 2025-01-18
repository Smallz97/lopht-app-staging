import { NavLinkProps } from "@/app/(landing-pages)/utilities/lib/definitions";

// Navbar components type defintions
export type NavLinksProps = {
  label: string;
  description: string;
};

export type WizardFormStepsProps = NavLinkProps & { step: number };

// Form constituent components type definitons
export type FormLegendProps = {
  legend: string;
  description: string;
};

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
  label: React.ReactNode;
};

// Wizard form type defintion
export type WizardFormProps = {
  currentStep: number;
};
