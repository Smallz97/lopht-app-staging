import Button from "@/app/(landing-pages)/utilities/ui-components/Button/Button";

export default function FormButton() {
    return (
        <Button
            className={`w-full py-3 bg-orange-400 shadow border border-orange-400 text-white text-sm font-semibold leading-normal `}
        >
            {"Submit"}
        </Button>
    )
}
