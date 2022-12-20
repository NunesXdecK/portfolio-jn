import Text from ".";

interface ProfileTextProps {
    isEnglish?: boolean,
    onClick?: (arg0: boolean) => void,
}

export default function ProfileText(props: ProfileTextProps) {
    const handleOnClick = () => {
        if (props.onClick) {
            props.onClick(false)
        }
    }
    return (
        <a href="#profile" className="pl-4 duration-200" onClick={() => handleOnClick()}>
            <Text
                text="Perfil"
                textEnglish="Profile"
                isEnglish={props.isEnglish}
                className="text-gray-200 hover:text-gray-400"
            />
        </a>
    )
}