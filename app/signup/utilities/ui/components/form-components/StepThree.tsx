'use client'

import { useRef } from "react";
import { inter } from "@/app/fonts";
import { UploadIcon } from "@/app/signup/utilities/lib/icons";
import FormLegend from "@/app/signup/utilities/ui/components/form-components/FormLegend";
import Button from "@/app/(landing-pages)/utilities/ui-components/Button/Button";

export default function StepThree() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "copy";
    };

    const validateFileType = (file: File) => {
        const validTypes = [
            "text/csv",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ];
        return validTypes.includes(file.type);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (validateFileType(file)) {
                console.log("File accepted:", file);
            } else {
                console.error("Invalid file type.");
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (validateFileType(file)) {
                console.log("File selected:", file);
            } else {
                console.error("Invalid file type.");
            }
        }
    };

    return (
        <div
            className="w-full flex flex-col gap-12 form-step"
            id="community-members"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <FormLegend legend="Community Members" description="Add new members to your community" />
            <div className="h-72 px-6 py-7 bg-white rounded-2xl border-dashed border-2 border-gray-300 justify-center items-center flex">
                <div className="flex-col gap-6 flex w-full">
                    <div className="w-14 h-14 flex items-center justify-center place-self-center">
                        <UploadIcon />
                    </div>
                    <div className="flex-col justify-start items-center gap-0.5 flex">
                        <div className="justify-center items-center gap-1 flex">
                            <span className={`text-center text-orange-600 text-sm font-semibold ${inter.className}leading-tight`}>
                                Click to upload
                            </span>
                            <span className={`text-slate-600 text-sm font-normal ${inter.className} leading-tight`}>
                                or drag and drop
                            </span>
                        </div>
                        <div className={`self-stretch text-center text-gray-400 text-xs font-normal ${inter.className} leading-none`}>CSV or Excel (max. 800x400px)</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <hr className="w-1/2"></hr>
                        <span className={`${inter.className} leading-none text-gray-400 text-xs font-semibold`}>
                            OR
                        </span>
                        <hr className="w-1/2"></hr>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".csv, .xls, .xlsx"
                        onChange={handleFileChange}
                    />
                    <Button
                        onClick={handleButtonClick}
                        className={`rounded-md place-self-center bg-orange-400 py-2 px-4 text-white text-sm font-semibold leading-tight`}
                    >
                        {`Browse Files`}
                    </Button>
                </div>
            </div>
        </div>
    )
}