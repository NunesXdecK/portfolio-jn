interface ButtonProps {
    id?: string,
    className?: string,
    isLoading?: boolean,
    children?: any | any[],
    onClick?: (event: any) => void,
}

export default function Button(props: ButtonProps) {
    let className = ""
    if (props.className) {
        className = className + " " + props.className
    }
    if (props.isLoading) {
        className = className + " opacity-80"
    }
    const handleOnClick = (event: any) => {
        if (props.onClick) {
            props.onClick(event)
        }
    }

    return (
        <button
            id={props.id}
            className={className}
            disabled={props.isLoading}
            onClick={(event) => {
                handleOnClick(event)
            }}
        >
            {props.children}
        </button>
    )
}