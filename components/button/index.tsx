interface ButtonProps {
    id?: string,
    className?: string,
    children?: any | any[],
    onClick?: (event: any) => void,
}

export default function Button(props: ButtonProps) {
    let className = ""
    if (props.className) {
        className = className + " " + props.className
    }

    const handleOnClick = (event: any) => {
        if (props.onClick) {
            props.onClick(event)
        }
    }

    return (
        <button id={props.id} className={className}
            onClick={(event) => {
                handleOnClick(event)
            }}
        >
            {props.children}
        </button>
    )
}