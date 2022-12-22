interface InputTextAreaProps {
    id?: string,
    title?: string,
    value?: string,
    placeholder?: string,
    titleEnglish?: string,
    placeholderEnglish?: string,
    isInvalid?: boolean,
    isEnglish?: boolean,
    isLoading?: boolean,
    className?: string,
    children?: any | any[],
    onSet?: (arg0: string) => void,
}

export default function InputTextArea(props: InputTextAreaProps) {
    let inputClassName = "w-full min-h-[100px] p-2 text-gray-800 rounded-sm bg-gray-200 resize-y"
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
            <textarea
                id={props.id}
                value={props.value}
                disabled={props.isLoading}
                className={inputClassName + inputBorderClassName}
                placeholder={props.isEnglish ? props.placeholderEnglish : props.placeholder}
                onChange={(event) => {
                    handleOnSet(event)
                }}
            />
        </div>
    )
}