import Button from "."

interface SwitchButtonProps {
    id?: string,
    className?: string,
    isActive?: boolean,
    contentOn?: any | any[],
    contentOff?: any | any[],
    onSetActive?: (event: any) => void,
}

export default function SwitchButton(props: SwitchButtonProps) {
    let className = ""
    if (props.className) {
        className = className + " " + props.className
    }
    const handleOnSetActive = (value: boolean) => {
        if (props.onSetActive) {
            props.onSetActive(value)
        }
    }
    return (
        <Button
            id={props.id}
            className={className}
            onClick={() => {
                handleOnSetActive(!props.isActive)
            }}
        >
            {props.isActive ?
                <>
                    {props.contentOn}
                </>
                :
                <>
                    {props.contentOff}
                </>
            }
        </Button>
    )
}