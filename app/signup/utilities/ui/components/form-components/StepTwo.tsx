import FormInput from "@/app/signup/utilities/ui/components/form-components/FormInput";
import FormLegend from "@/app/signup/utilities/ui/components/form-components/FormLegend";

export default function StepTwo() {
    return (
        <div className="flex flex-col w-full gap-12 form-step" id="community-information">
            <FormLegend legend="Community Information" description="Provide the following details below" />
            <div className="flex flex-col gap-11" >
                <div className="flex gap-6">
                    <FormInput
                        id="communityName"
                        label={`Community Name`}
                        placeholder={`Enter Community Name`}
                    />
                    <FormInput
                        id="communityAddress"
                        placeholder={`Enter Community Address`}
                        label={
                            <>
                                Community Address{' '}
                                <span className="text-gray-500 text-sm font-semibold leading-tight">
                                    (Optional)
                                </span>
                            </>
                        }
                    />
                </div>
                <FormInput
                    fullWidth
                    id="communityCatchphrase"
                    label={`Community Catchphrase`}
                    placeholder="Enter Community Catchphrase e.g “Life is good”"
                />
            </div>
        </div>
    )
}