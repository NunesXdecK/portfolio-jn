type InputMode = "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined
interface InputTextProps {
    id?: string,
    type?: string,
    value?: string,
    title?: string,
    pattern?: string,
    inputMode?: InputMode,
    placeholder?: string,
    titleEnglish?: string,
    placeholderEnglish?: string,
    isLoading?: boolean,
    isInvalid?: boolean,
    isEnglish?: boolean,
    className?: string,
    children?: any | any[],
    onSet?: (arg0: string) => void,
}

export default function InputText(props: InputTextProps) {
    let inputClassName = "w-full p-2 rounded-sm bg-gray-200 text-gray-800"
    let inputBorderClassName = " border-none focus:click:active:hover:border-none outline-none focus:click:active:hover:outline-none"
    if (props.isInvalid) {
        inputBorderClassName = " shadow shadow-red-500 border border-red-500 outline-none focus:click:active:hover:outline-none"
    }
    if (props.isLoading) {
        inputBorderClassName = " opacity-80"
    }
    const handleOnSet = (event: any) => {
        if (props.onSet) {
            const value = event.target?.value
            props.onSet(value)
        }
    }
    return (
        <div className="">
            <label
                className="text-gray-200"
            >
                {props.isEnglish ? props.titleEnglish : props.title}
            </label><br />
            <input
                id={props.id}
                value={props.value}
                pattern={props.pattern}
                disabled={props.isLoading}
                inputMode={props.inputMode}
                type={props.type ?? "text"}
                className={inputClassName + inputBorderClassName}
                placeholder={props.isEnglish ? props.placeholderEnglish : props.placeholder}
                onChange={(event) => {
                    handleOnSet(event)
                }}
            />
        </div>
    )
}