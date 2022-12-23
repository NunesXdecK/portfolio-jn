import { UIEvent, useEffect, useState } from "react"

interface PageProps {
    id?: string,
    className?: string,
    isLast?: boolean,
    isFirst?: boolean,
    divisor?: any | any[],
    children?: any | any[],
}

export default function Page(props: PageProps) {
    let className = "flex flex-col justify-center items-center align-middle min-w-max"
    if (props.className) {
        className = className + " " + props.className
    }
    if (props.isFirst) {
        className = className + " pt-24"
    }
    const handleResizeInner = () => {
        if (typeof window !== 'undefined' && props.id) {
            let content = document.getElementById(props.id)
            if (content) {
                content.style.height = (window.innerHeight) + "px"
            }
        }
    }
    const handleResize = () => {
        if (typeof window !== 'undefined' && props.id) {
            let content = document.getElementById(props.id)
            if (content) {
                handleResizeInner()
                content.addEventListener("resize", handleResizeInner)
            }
        }
    }
    useEffect(() => {
        handleResize()
    })
    return (
        <>
            <div id={props.id} className={className}>
                <div className="w-screen max-w-[1260px] p-4">
                    {props.children}
                </div>
            </div>
            {props.divisor && (
                <>
                    {props.divisor}
                </>
            )}
        </>
    )
}