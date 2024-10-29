import EmailInputField from "../email-input-field/EmailInputField";
import Button from "@/app/(public)/ui/shared-ui-components/Button/Button";

export default function EmailForm() {
  return (
    <div
      className="flex flex-col gap-2 md:gap-4 md:flex-row md:justify-center md:px-24 lg:px-80"
      id="search-section"
    >
      <EmailInputField />
      <Button
        className={`py-3 px-5 md:px-8 lg:px-12 bg-orange-400 shadow border border-orange-400 text-white text-sm font-semibold leading-normal`}
      >
        Subscribe
      </Button>
    </div>
  );
}
