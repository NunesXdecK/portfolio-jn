import Text from ".";

interface TechnologiesTextProps {
    id: string,
    text: string,
}

export default function TechnologiesText(props: TechnologiesTextProps) {
    let className = "text-[0.4em] sm:text-xs shadow rounded-sm px-2 py-1"

    switch (props.text) {
        case "Next.JS":
            className = className + " text-gray-400 bg-gray-200"
            break
        case "TailwindCSS":
            className = className + " text-sky-400 bg-sky-200"
            break
        case "Firebase":
            className = className + " text-yellow-400 bg-yellow-200 "
            break
        default:
            className = className + " text-gray-400 bg-gray-200"
            break
    }

    return (
        <Text
            text={props.text}
            className={className}
        />
    )
}