interface ChatBubbleProps {
    id?: string,
    isLeft?: boolean,
    isRight?: boolean,
    isCenter?: boolean,
    className?: string,
    children?: any | any[],
}

export default function ChatBubble(props: ChatBubbleProps) {
    let className = "w-fit max-w-[300px] shadow-lg p-4 my-1 bg-gray-100 dark:bg-gray-800 rounded border-2 border-gray-400 dark:border-gray-600"
    if (props.className) {
        className = className + " " + props.className
    }
    if (props.isLeft) {
        className = className + " self-start"
    }
    if (props.isRight) {
        className = className + " self-end"
    }
    if (props.isCenter) {
        className = className + " self-center"
    }
    return (
        <div id={props.id} className={className}>
            {props.children}
        </div>
    )
}