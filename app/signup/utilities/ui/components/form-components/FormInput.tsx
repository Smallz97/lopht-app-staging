import { FormInputProps } from "@/app/signup/utilities/lib/definition";

export default function FormInput({ label, id, type = 'text', fullWidth, ...props }: FormInputProps) {
    return (
        <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-12/12' : 'w-6/12'}`}>
            <label
                htmlFor={id}
                className="text-slate-700 text-sm font-semibold leading-tight"
            >
                {label}
            </label>
            <input
                id={id}
                required
                {...props}
                type={type}
                className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
            />
        </div>
    )
}