import Text from ".";

interface ContactTextProps {
    isEnglish?: boolean,
    onClick?: (arg0: boolean) => void,
}

export default function ContactText(props: ContactTextProps) {
    const handleOnClick = () => {
        if (props.onClick) {
            props.onClick(false)
        }
    }
    return (
        <a href="#contact" className="pl-4 duration-200" onClick={() => handleOnClick()}>
            <Text
                text="Contato"
                textEnglish="Contact"
                isEnglish={props.isEnglish}
                className="text-gray-200 hover:text-gray-400"
            />
        </a>
    )
}