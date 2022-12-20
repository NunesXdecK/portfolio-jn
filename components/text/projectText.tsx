import Text from ".";

interface ProjectTextProps {
    isEnglish?: boolean,
    onClick?: (arg0: boolean) => void,
}

export default function ProjectText(props: ProjectTextProps) {
    const handleOnClick = () => {
        if (props.onClick) {
            props.onClick(false)
        }
    }
    return (
        <a href="#project" className="pl-4 duration-200" onClick={() => handleOnClick()}>
            <Text
                text="Projetos"
                textEnglish="Projects"
                isEnglish={props.isEnglish}
                className="text-gray-200 hover:text-gray-400"
            />
        </a>
    )
}