import { WizardFormProps } from "@/app/signup/utilities/lib/definition";
import StepOne from "@/app/signup/utilities/ui/components/form-components/StepOne";
import StepTwo from "@/app/signup/utilities/ui/components/form-components/StepTwo";
import StepThree from "@/app/signup/utilities/ui/components/form-components/StepThree";
import FormButton from "@/app/signup/utilities/ui/components/form-components/FormButton";

export default function Form({ currentStep }: WizardFormProps) {
    return (
        <form className="w-3/4 gap-11 flex flex-col justify-center items-center">
            {currentStep === 1 && (<StepOne />)}
            {currentStep === 2 && (<StepTwo />)}
            {currentStep === 3 && (<StepThree />)}
            <div className="place-self-end w-1/4"><FormButton /></div>
        </form>
    )
}