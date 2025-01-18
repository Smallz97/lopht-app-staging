import Form from "@/app/signup/utilities/ui/components/form-components/Form"

export default function CommunityInformation() {
    return (
        <div className="flex min-h-full justify-center items-center">
            <Form 
                currentStep={2}
            />
        </div>
    )
}