import { FieldError } from "react-hook-form";

type inputFieldProps = {
    label: string,
    type?: string,
    register?: any,
    name: string,
    defaultValue?: string,
    error?: FieldError,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps
}: inputFieldProps) => {
    return (
        <div className="flex flex-col gap-4 w-full md:w-1/4">
            <label htmlFor="" className="text-xs text-gray-500">{label}</label>
            <input type={type} {...register(name)} {...inputProps} defaultValue={defaultValue}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" />
            {error?.message && <p className="text-xs text-red-400 -mt-1">{error?.message.toString()}</p>}
        </div>
    )
}

export default InputField;