import Text from ".";

interface ProfileTextProps {
    isEnglish?: boolean,
}

export default function ProfileText(props: ProfileTextProps) {
    return (
        <a href="#profile" className="pl-4 duration-200 ">
            <Text
                text="Perfil"
                textEnglish="Profile"
                isEnglish={props.isEnglish}
                className="text-gray-200 hover:text-gray-400"
            />
        </a>
    )
}