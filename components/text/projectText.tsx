import Text from ".";

interface ProjectTextProps {
    isEnglish?: boolean,
}

export default function ProjectText(props: ProjectTextProps) {
    return (
        <a href="#project" className="pl-4 duration-200 ">
            <Text
                text="Projetos"
                textEnglish="Projects"
                isEnglish={props.isEnglish}
                className="text-gray-200 hover:text-gray-400"
            />
        </a>
    )
}