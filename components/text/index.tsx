interface TextProps {
    id?: string,
    text: string,
    className?: string,
    textEnglish?: string,
    isEnglish?: boolean,
}

export default function Text(props: TextProps) {
    let className = "text-gray-800 dark:text-gray-300"
    let text = props.text
    if (props.className) {
        className = props.className
    }
    if (props.isEnglish && props.textEnglish) {
        text = props.textEnglish
    }
    return (
        <span
            id={props.id}
            className={className}
        >
            {text}
        </span>
    )
}