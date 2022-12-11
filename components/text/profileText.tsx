import Text from ".";

interface ProfileTextProps {
    isEnglish?: boolean,
}

export default function ProfileText(props: ProfileTextProps) {
    return (
        <a href="#profile" className="pl-0 p-4">
            <Text
                text="Perfil"
                textEnglish="Profile"
                isEnglish={props.isEnglish}
                className="dark:text-black text-white w-full p-8"
            />
        </a>
    )
}