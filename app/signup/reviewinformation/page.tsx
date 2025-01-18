import FormButton from "@/app/signup/utilities/ui/components/form-components/FormButton";
import FormLegend from "../utilities/ui/components/form-components/FormLegend";

export default function ReviewInformation() {
    return (
        <div className="flex py-24 min-h-full justify-center items-center">
            <div className="w-3/4 flex flex-col gap-12">
                <FormLegend legend="Review & Submit Details" description="Confirm all provided details to proceed" />
                <form className="flex flex-col gap-11" id="form-wrapper">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            <div className="text-black text-2xl font-semibold leading-normal">Personal Information</div>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-6">
                                    <div className="flex flex-col gap-1.5 w-6/12">
                                        <label
                                            htmlFor="firstName"
                                            className="text-slate-700 text-sm font-semibold leading-tight"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="Enter First Name"
                                            className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5 w-6/12">
                                        <label
                                            htmlFor="lastName"
                                            className="text-slate-700 text-sm font-semibold leading-tight"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Enter Last Name"
                                            className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex flex-col gap-1.5 w-6/12">
                                        <label
                                            htmlFor="phoneNumber"
                                            className="text-slate-700 text-sm font-semibold leading-tight"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            pattern="\d{3}-\d{3}-\d{4}"
                                            placeholder="+234 | Enter your phone number"
                                            className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5 w-6/12">
                                        <label
                                            htmlFor="emailAddress"
                                            className="text-slate-700 text-sm font-semibold leading-tight"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="emailAddress"
                                            placeholder="Enter Email"
                                            className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className="w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            <div className="text-black text-2xl font-semibold leading-normal">Community Information</div>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-6">
                                    <div className="flex flex-col gap-1.5 w-6/12">
                                        <label
                                            htmlFor="communityName"
                                            className="text-slate-700 text-sm font-semibold leading-tight"
                                        >
                                            Community Name
                                        </label>
                                        <input
                                            type="text"
                                            id="communityName"
                                            placeholder="Enter Community Name"
                                            className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5 w-6/12">
                                        <label
                                            htmlFor="communityAddress"
                                            className="text-slate-700 text-sm font-semibold leading-tight"
                                        >
                                            Community Address <span className="text-gray-500 text-sm font-semibold leading-tight">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="communityAddress"
                                            placeholder="Enter Community Address"
                                            className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="communityCatchphrase"
                                        className="text-slate-700 text-sm font-semibold leading-tight"
                                    >
                                        Community Catchphrase
                                    </label>
                                    <input
                                        type="text"
                                        id="communityCatchphrase"
                                        placeholder="Enter Community Catchphrase e.g “Life is good”"
                                        className="py-3 px-3.5 items-center text-gray-500 bg-white rounded-lg shadow border border-gray-300 text-base font-normal leading-normal"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className="w-full" />
                        </div>
                    </div>
                    <div className="place-self-end w-1/4">
                        <FormButton />
                    </div>
                </form>
            </div>
        </div>
    )
}