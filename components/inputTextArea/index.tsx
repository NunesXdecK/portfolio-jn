interface InputTextAreaProps {
    id?: string,
    title?: string,
    titleEnglish?: string,
    placeholder?: string,
    placeholderEnglish?: string,
    isEnglish?: boolean,
    className?: string,
    children?: any | any[],
}

export default function InputTextArea(props: InputTextAreaProps) {
    return (
        <div className="">
            <label
                className="text-gray-200"
            >
                {props.isEnglish ? props.titleEnglish : props.title}
            </label><br />
            <textarea
                placeholder={props.isEnglish ? props.placeholderEnglish : props.placeholder}
                className="min-h-[100px] w-full p-2 rounded-sm bg-gray-200 outline-gray-500 resize-y"
            />
        </div>
    )
}