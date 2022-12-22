import { useEffect } from "react"

interface FeedbackMessageModalProps {
    isOpen?: boolean,
    feedbackMessage?: FeedbackMessage,
    setIsOpen?: (arg0: boolean) => void,
}

type messageType = "SUCCESS" | "ERROR" | "WARNING"

export interface FeedbackMessage {
    messages?: string[],
    messageType?: messageType,
}

export const defaultFeedbackMessage: FeedbackMessage = {
    messages: [],
    messageType: "SUCCESS",
}

const delay = (amount = 2000) => new Promise(resolve => setTimeout(resolve, amount))

export default function FeedbackMessageModal(props: FeedbackMessageModalProps) {
    let className = "fixed transition-opacity duration-300 py-2 px-5 text-white rounded-md right-10 bottom-10"
    let classNameMessages = ""
    if (props.isOpen) {
        className = className + " z-30 opacity-100"
    } else {
        className = className + " z-0 opacity-0"
    }
    switch (props.feedbackMessage?.messageType) {
        case "SUCCESS":
            className = className + " bg-green-600"
            break
        case "ERROR":
            className = className + " bg-red-600"
            break
        case "WARNING":
            className = className + " bg-orange-600"
            break
    }
    useEffect(() => {
        if (props.isOpen) {
            delay().then(() => {
                if (props.setIsOpen) {
                    props.setIsOpen(false)
                }
            })
        }
    })
    return (
        <div className={className}>
            <div className={classNameMessages}>
                {props.feedbackMessage?.messages?.map((element, index) => (
                    <p key={index + element}>{element}</p>
                ))}
            </div>
        </div>
    )
}
