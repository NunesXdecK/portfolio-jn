import Page from "../container/page"
import ProjectBubble, { Project } from "../container/projectBubble"
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"

interface ProjectPageProps {
    id?: string,
    isEnglish?: boolean,
    className?: string,
    children?: any | any[],
}

const defaultProject: Project = {
    name: "default",
    image: "",
    github: "",
    online: "",
    description: "",
    descriptionEnglish: "",
    technologies: [],
}

const projects: Project[] = [
    {
        name: "Portfolio-JN",
        image: "/portfolio-jn.png",
        online: "https://portfolio-jn.vercel.app",
        description: "Este portfolio que você está vendo.",
        github: "https://github.com/NunesXdecK/portfolio-jn",
        descriptionEnglish: "This portfolio that you are seeing right now.",
        technologies: ["Next.JS", "TailwindCSS"],
    },
    {
        name: "MMJP",
        image: "/mmjp.png",
        online: "https://mmjp.vercel.app",
        descriptionEnglish: "Custom project made to manage environmental projects.",
        description: "Projeto feito sobe encomenda para gerenciar projetos ambientais.",
        technologies: ["Next.JS", "TailwindCSS", "Firebase"],
    },
]

export default function ProjectPage(props: ProjectPageProps) {
    return (
        <Page
            id="project"
            className="bg-gray-200 text-black dark:bg-gray-900 dark:text-white"
        >
            <div className="flex flex-row justify-center items-center">
                <div className="hidden p-4 flex-row gap-2 justify-between">
                    <ArrowLeftCircleIcon className="h-6 w-6 text-slate-800" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2 justify-between">
                        <ProjectBubble isEnglish={props.isEnglish} project={projects[0]} />
                        <ProjectBubble isEnglish={props.isEnglish} project={projects[1]} />
                    </div>
                </div>
                <div className="p-4 hidden flex-row items-center">
                    <ArrowRightCircleIcon className="h-6 w-6 text-slate-800" />
                </div>
            </div>
        </Page >
    )
}