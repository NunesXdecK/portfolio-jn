import Text from ".";

interface ContactTextProps {
    isEnglish?: boolean,
}

export default function ContactText(props: ContactTextProps) {
    return (
        <a href="#contact" className="pl-4 duration-200 ">
            <Text
                text="Contato"
                textEnglish="Contact"
                isEnglish={props.isEnglish}
                className="text-gray-200 hover:text-gray-400"
            />
        </a>
    )
}