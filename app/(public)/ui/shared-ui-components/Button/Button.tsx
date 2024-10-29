import { ButtonProps } from "@/app/lib/definitions";

export default function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`flex items-center justify-center rounded-lg text-base font-bold ${className}`}
      {...rest}
    >
      {children && (
        <span className="flex items-center justify-start gap-2">{children}</span>
      )}
    </button>
  );
}
