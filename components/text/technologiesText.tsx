import Text from ".";

interface TechnologiesTextProps {
    id: string,
    text: string,
}

export default function TechnologiesText(props: TechnologiesTextProps) {
    let className = "text-[0.2em] sm:text-xs shadow rounded-sm px-2 py-1"

    switch (props.text) {
        case "Next.JS":
            className = className + " text-gray-400 hover:text-gray-200 bg-gray-200 hover:bg-gray-400"
            break
        case "TailwindCSS":
            className = className + " text-sky-400 hover:text-sky-200 bg-sky-200 hover:bg-sky-400"
            break
        case "Firebase":
            className = className + " text-yellow-400 hover:text-yellow-200 bg-yellow-200 hover:bg-yellow-400"
            break
        default:
            className = className + " bg-gray-200 hover:bg-gray-400"
            break
    }

    return (
        <Text
            text={props.text}
            className={className}
        />
    )
}