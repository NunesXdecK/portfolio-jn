import InputText from "."

interface EmailInputTextProps {
    id?: string,
    value?: string,
    title?: string,
    className?: string,
    placeholder?: string,
    titleEnglish?: string,
    placeholderEnglish?: string,
    isLoading?: boolean,
    isEnglish?: boolean,
    onSet?: (arg0: any) => void,
}

export const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
export const isEmailValid = (text: string) => {
    if (!text || text.length === 0) {
        return false
    }
    return new RegExp(EMAIL_PATTERN).test(text)
}

export default function EmailInputText(props: EmailInputTextProps) {
    const handleOnSet = (value: string) => {
        if (props.onSet) {
            props.onSet(value)
        }
    }
    let text = props.value?.trim() ?? ""
    let test = isEmailValid(text)
    return (
        <InputText
            value={text}
            id={props.id}
            title={props.title}
            onSet={handleOnSet}
            isLoading={props.isLoading}
            className={props.className}
            isEnglish={props.isEnglish}
            placeholder={props.placeholder}
            titleEnglish={props.titleEnglish}
            placeholderEnglish={props.placeholderEnglish}
            isInvalid={props.value?.length === 0 ? false : !test}
        />
    )
}