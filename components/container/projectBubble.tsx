import Text from "../text";
import Image from "next/image";
import TechnologiesText from "../text/technologiesText";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import ChatBubble from "./chatBubble";
import { useEffect } from "react";

interface ProjectBubbleProps {
    className?: string,
    isEnglish?: boolean,
    project: Project,
}

export interface Project {
    name: string,
    image: string,
    description: string,
    descriptionEnglish: string,
    technologies: string[],
    github?: string,
    online?: string,
}

export default function ProjectBubble(props: ProjectBubbleProps) {
    let holderClassName = "text-center p-4 rounded shadow border-2 border-gray-400"
    if (props?.project?.name === "default") {
        holderClassName = holderClassName + " "
    }
    return (
        <div
            id={props.project.name}
            className={holderClassName}>
            <Text text={props.project.name} className="text-md sm:text-3xl" />
            <div className="flex flex-col items-center justify-center align-middle">
                <Image width={200} height={200}
                    priority
                    alt="/alt-image.png"
                    src={props.project.image}
                    className="mt-4 shadow border-2 border-gray-300 rounded-md"
                />
                <div className="mt-2 flex flex-row gap-1 justify-start flex-wrap">
                    {props.project?.technologies?.map((element, index) => (
                        <TechnologiesText
                            text={element}
                            id={props.project.name + "-" + element + "-" + index}
                            key={props.project.name + "-" + element + "-" + index}
                        />
                    ))}
                </div>
            </div>
            <ChatBubble
                className=" text-left my-6 hidden sm:block">
                <Text
                    className="text-lg"
                    isEnglish={props.isEnglish}
                    text={props.project.description}
                    textEnglish={props.project.descriptionEnglish}
                />
            </ChatBubble>
            <div className="mt-4">
                {props.project.github &&
                    <a href={props.project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="shadow group w-full rounded duration-200 bg-indigo-600 hover:bg-indigo-800 px-2 py-1 flex flex-row gap-1 justify-center">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3 h-3 sm:h-6 sm:w-6 fill-slate-200 group-hover:fill-slate-100">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                            </svg>
                            <span className="text-[0.6em] sm:text-base font-semibold text-gray-200 group-hover:text-gray-100">GITHUB</span>
                        </div>
                    </a>
                }
                {props.project.online &&
                    <a href={props.project.online}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="mt-2 shadow group w-full rounded duration-200 bg-slate-600 hover:bg-slate-800 px-2 py-1 flex flex-row gap-1 justify-center items-center">
                            <ArrowTopRightOnSquareIcon className="w-3 h-3 sm:h-6 sm:w-6 group-hover:text-slate-100 text-slate-200" />
                            <span className="text-[0.6em] sm:text-base font-semibold text-gray-200 group-hover:text-gray-100">VISITAR</span>
                        </div>
                    </a>
                }
            </div>
        </div>
    )
}