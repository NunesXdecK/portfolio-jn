interface ContainerProps {
    isDark?: boolean,
    className?: string,
    children?: any | any[],
}

export default function Container(props: ContainerProps) {
    let className = "flex flex-col justify-center"
    if (props.className) {
        className = className + " " + props.className
    }
    if (props.isDark) {
        className = className + " dark"
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}