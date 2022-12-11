import { useEffect, useState } from "react"

interface PageProps {
    id: string,
    isFirst?: boolean,
    className?: string,
    children?: any | any[],
}

export default function Page(props: PageProps) {
    let className = "flex flex-col justify-center items-center min-w-max p-4"
    if (props.className) {
        className = className + " " + props.className
    }
    if (props.isFirst) {
        className = className + " pt-24"
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            let content = document.getElementById(props.id)
            if (content) {
                content.style.height = window.innerHeight + "px"
            }
        }
    }, [props.id])
    return (
        <div id={props.id} className={className}>
            {props.children}
        </div>
    )
}