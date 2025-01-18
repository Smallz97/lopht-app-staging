import FormInput from "@/app/signup/utilities/ui/components/form-components/FormInput";
import FormLegend from "@/app/signup/utilities/ui/components/form-components/FormLegend";

export default function StepOne() {
    return (
        <div className="flex flex-col w-full gap-12 form-step" id="personal-information">
            <FormLegend legend="Personal Information" description="Provide the following details below" />
            <div className="flex gap-6">
                <FormInput
                    type="tel"
                    id="phoneNumber"
                    label={`Phone Number`}
                    placeholder={`+234 | Enter your phone number`}
                />
                <FormInput
                    id="email"
                    type="email"
                    label={`Email`}
                    placeholder={`Enter your email`}
                />
            </div>
        </div>
    )
}