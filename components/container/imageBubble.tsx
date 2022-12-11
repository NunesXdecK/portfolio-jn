interface ImageBubbleProps {
    id?: string,
    isLeft?: boolean,
    isRight?: boolean,
    isCenter?: boolean,
    className?: string,
    children?: any | any[],
}

export default function ImageBubble(props: ImageBubbleProps) {
    let className = "p rounded-full border-2 border-gray-400 dark:border-gray-600"
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