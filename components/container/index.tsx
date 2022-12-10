interface ContainerProps {
    id: string,
    className?: string,
    children?: any | any[],
}

export default function Container(props: ContainerProps) {
    let className = "min-w-max pt-20"
    if (props.className) {
        className = className + " "+ props.className
    }
    return (
        <div id={props.id} className={className}>
            {props.children}
        </div>
    )
}