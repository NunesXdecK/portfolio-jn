interface ContainerProps {
    className?: string,
    children?: any | any[],
}

export default function Container(props: ContainerProps) {
    let className = "flex justify-center"
    if (props.className) {
        className = className + " " + props.className
    }
    return (
        <div className={className}>
            <div className="w-[1260px]">
                {props.children}
            </div>
        </div>
    )
}