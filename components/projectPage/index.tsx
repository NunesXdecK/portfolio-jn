import Page from "../container/page";
import ProjectBubble, { Project } from "../container/projectBubble";

interface ProjectPageProps {
    id?: string,
    isEnglish?: boolean,
    className?: string,
    children?: any | any[],
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
            className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
        >
            <div className="flex flex-row gap-2 justify-center">
                <>
                    {projects.map((element, index) => (
                        <ProjectBubble key={element.name + "-" + index} isEnglish={props.isEnglish} project={element} />
                    ))}
                </>
            </div>
        </Page>
    )
}