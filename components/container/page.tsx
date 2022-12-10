interface PageProps {
    id: string,
    className?: string,
    children?: any | any[],
}

export default function Page(props: PageProps) {
    let className = "min-w-max pt-24 p-4"
    if (props.className) {
        className = className + " "+ props.className
    }
    return (
        <div id={props.id} className={className}>
            {props.children}
        </div>
    )
}